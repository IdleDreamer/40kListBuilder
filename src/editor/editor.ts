export default class Editor {

  private editorContainerHTML: HTMLElement;
  private editorHTML: HTMLElement;
  private unit: any;
  
  public constructor() {
    this.editorContainerHTML = (document.getElementById("editor") as HTMLElement);
    this.editorHTML = (document.getElementById("editorForm") as HTMLElement);
    this.editorContainerHTML.style.width = '0px';
    this.unit = {};
  }

  public editUnit(id: number) {
    let listContents = window.list.armyList.listContents;
    for (let type in listContents) {
      for (let unit in listContents[type]) {
        if (listContents[type][unit].id === id) {
          this.unit = listContents[type][unit];
          this.renderEdit();
          break;
        }
      }
    }
  }

  public addModel(id) {
    this.unit.addModel(id);
  }

  public removeModel(id) {
    this.unit.removeModel(id);
  }

  public editLoadout(argStr) {
    let args = argStr.split('-');
    this.unit.updateModelWargear(args[0], args[1], args[2], args[3]);
  }

  public editAllegiance(index) {
    this.unit.updateAllegiance(index);
  }

  public closeEdit() {
    this.editorContainerHTML.style.width = '0px';
    window.list.armyList.updateCosts();
    window.list.armyList.renderList();
  } 

  public renderEdit() {
    this.editorContainerHTML.style.width = '100%';
    let editFields = this.editorHTML.innerHTML;
    editFields = '';

    editFields += '<table class="editTable">';
    editFields += this.getUnitNameAndCostHTML(this.unit);

    let globalMax = this.unit.unitInfo.modelTypes[0].maxAmount;
    let globalMin = this.unit.unitInfo.modelTypes[0].defaultAmount;
    let totalModels = 0;
    for (let i = 0; i < this.unit.unitInfo.modelTypes.length; i++) {
      totalModels += this.unit.models[this.unit.unitInfo.modelTypes[i].model].length;
    }

    for (let i = 0; i < this.unit.unitInfo.modelTypes.length; i++) {
      editFields += this.getModelTypeHTML(this.unit.unitInfo.modelTypes[i].model);
      let models = this.unit.models[this.unit.unitInfo.modelTypes[i].model];
      let max = this.unit.unitInfo.modelTypes[i].maxAmount;
      if (models) {
        for (let model in models) {
          editFields += this.unit.getStatsHeadersHTML();
          editFields += this.getModelStatsHTML(this.unit, models[model]);
          editFields += this.unit.getWeaponsHeadersHTML();
          editFields += this.getWeaponsHTML(models[model], this.unit.faction);
          editFields += this.getWeaponLoadoutSelectionHTML(i, model, models[model]);
          editFields += this.getSeperatorHTML();
        }
        let canAdd = (totalModels < globalMax && models.length < max);
        let canRemove = (totalModels > globalMin && models.length > 0);
        editFields += this.getButtonRowHTML(canAdd, canRemove, i);
        editFields += this.getSeperatorHTML();
      }
    }

    let allegianceHTML = this.getAllegianceHTML(this.unit);
    if (allegianceHTML !== '') {
      editFields += '<tr><td class="modelType" colspan="11">Allegiance</td></tr>';
      editFields += allegianceHTML;
    }
    editFields += '</table>';

    editFields += '<button class="closeButton" type="button" onclick="list.editor.closeEdit()">Done</button>';
    this.editorHTML.innerHTML = editFields;
  }

  private getUnitNameAndCostHTML(unit) {
    let costHTML =  'Points: ' + unit.totalPoints
                 +  ' | Power: ' + unit.totalPower
                 +  ' | Wounds: ' + unit.totalWounds
                 +  ' | Models: ' + unit.totalModels;
    let HTML = '<tr>'
      + '<td class="name" colspan="5">' + unit.name + '</td>'
      + '<td class="cost" colspan="6">' + costHTML + '</td>'
      + '</tr>';
    
    return HTML;
  }

  private getModelTypeHTML(type) {
    return '<tr><td class="modelType" colspan="11">' + type + '(s)</td></tr>';
  }

  private getButtonRowHTML(canAdd, canRemove, model) {
    let  modelId = "'" + model + "'";
    let HTML = '<tr><td colspan="11">';
    if (canAdd) {
      HTML += '<button class="add" type="button" onclick="list.editor.addModel(' + modelId + ')">Add</button>';
    }
    if (canRemove) {
      HTML += '<button class="remove" type="button" onclick="list.editor.removeModel(' + modelId + ')">Remove</button>';
    }
    HTML += '</td></tr>';
    return HTML;
  } 

  private getModelStatsHTML(unit, model) {
    let html = '';
    html += '<tr>'
      + '<td class="stat" id="name">' + model.name + '</td>'
      + '<td class="stat" id="m">' + unit.getUnProfiledStats(model.modelInfo.M) + '</td>'
      + '<td class="stat" id="ws">' + unit.getUnProfiledStats(model.modelInfo.WS) + '</td>'
      + '<td class="stat" id="bs">' + unit.getUnProfiledStats(model.modelInfo.BS) + '</td>'
      + '<td class="stat" id="s">' + unit.getUnProfiledStats(model.modelInfo.S) + '</td>'
      + '<td class="stat" id="t">' + unit.getUnProfiledStats(model.modelInfo.T) + '</td>'
      + '<td class="stat" id="w">' + unit.getUnProfiledStats(model.modelInfo.W) + '</td>'
      + '<td class="stat" id="a">' + unit.getUnProfiledStats(model.modelInfo.A) +'</td>'
      + '<td class="stat" id="ld">' + unit.getUnProfiledStats(model.modelInfo.Ld) + '</td>'
      + '<td class="stat" id="sv">' + unit.getUnProfiledStats(model.modelInfo.Sv) + '</td>'
      + '<td></td>'
      + '</tr>';
    return html;
  }

  private getWeaponsHTML(model, faction) {
    let HTML = '';
    let selectedWeapons: Array<string> = [];
    for (let slot in model.modelInfo.Wargear) {
      let index = model.selectedWeaponConfig[slot] || 0;
      for (let weaponId of model.modelInfo.Wargear[slot][index]) {
        selectedWeapons.push(weaponId);
      }
    }
    // let selectedWeapons = model.modelInfo.Wargear.weapons[model.selectedWeaponConfig];
    for (let weapon of selectedWeapons) {
      let weaponInfo = window.list.data.data[faction].wargear[weapon];
      if (weaponInfo !== undefined) {
        if (weaponInfo.WargearAbility !== undefined) {
          HTML += '<tr>'
          + '<td class="stat" id="name">' + weapon + '</td>'
          + '<td class="stat" id="abilities" colspan="9">' + weaponInfo.WargearAbility + '</td>'
          + '</tr>';
        }
        else if (weaponInfo.profiles === undefined) {
          HTML += '<tr>'
          + '<td class="stat" id="name">' + weapon + '</td>'
          + '<td class="stat" id="range">' + weaponInfo.Range + '</td>'
          + '<td class="stat" id="type">' + weaponInfo.Type + '</td>'
          + '<td class="stat" id="s">' + weaponInfo.S + '</td>'
          + '<td class="stat" id="ap">' + weaponInfo.AP + '</td>'
          + '<td class="stat" id="d">' + weaponInfo.D + '</td>'
          + '<td class="stat" id="abilities" colspan="4">' + weaponInfo.Abilities + '</td>'
          + '</tr>';
        }
        else {
          let desription = weaponInfo.description === undefined ? '' : weaponInfo.description;
          HTML += '<tr class="profiledWeapon">'
          + '<td class="stat" id="name">' + weapon + '</td>'
          + '<td class="stat" id="description" colspan="9">' + desription + '</td>'
          + '</tr>';
          for (let profile in weaponInfo.profiles) {
            let profileInfo = weaponInfo.profiles[profile];
            if (profileInfo !== undefined) {
              HTML += '<tr class="profile">'
              + '<td class="stat" id="name"> - ' + profile + '</td>'
              + '<td class="stat" id="range">' + profileInfo.Range + '</td>'
              + '<td class="stat" id="type">' + profileInfo.Type + '</td>'
              + '<td class="stat" id="s">' + profileInfo.S + '</td>'
              + '<td class="stat" id="ap">' + profileInfo.AP + '</td>'
              + '<td class="stat" id="d">' + profileInfo.D + '</td>'
              + '<td class="stat" id="abilities" colspan="4">' + profileInfo.Abilities + '</td>'
              + '</tr>';
            }
          }
        }
      }
    }
    return HTML;
  }

  private getWeaponLoadoutSelectionHTML(type, id, model) {
    let valueStr = '' + type + '-' + id + '-';
    let HTML = '<tr><td colspan="11">';
    for (let slot in model.modelInfo.Wargear) {    
      let valueId = valueStr + slot + '-';
      let loadoutLength = model.modelInfo.Wargear[slot].length;
      if (loadoutLength > 1) {
        let selected = model.selectedWeaponConfig[slot] || 0;
        HTML += '<select onchange="window.list.editor.editLoadout(value);">';   
        for (let i = 0; i < loadoutLength; i++) {
          let weaponsList = model.modelInfo.Wargear[slot][i];
          let cost = 0;
          for (let weapon = 0; weapon < weaponsList.length; weapon++) {
            cost += window.list.data.data[this.unit.faction].wargear[weaponsList[weapon]].Points;
          }
          if (i == selected) {
            HTML += '<option value="' + valueId + i + '" selected="selected">' + this.formatWeaponsList(model.modelInfo.Wargear[slot][i]) + ' (' + cost + ' pnts)</option>';
          }
          else {     
            HTML += '<option value="' + valueId + i + '">' + this.formatWeaponsList(model.modelInfo.Wargear[slot][i]) + ' (' + cost + ' pnts)</option>';
          }
        }
        HTML += '</select>';
      }
      else {
        let name = this.formatWeaponsList(model.modelInfo.Wargear[slot][0]);
        let cost = 0;
        let weaponsList = model.modelInfo.Wargear[slot][0];
        for (let weapon = 0; weapon < weaponsList.length; weapon++) {
          cost += window.list.data.data[this.unit.faction].wargear[weaponsList[weapon]].Points;
        }
        HTML += '<div class="selectSingle">' + name + ' (' + cost + ' pnts)</div>';
      }
    }
    HTML += '</td></tr>';
    return HTML;
  }

  private formatWeaponsList(weapons) {
    let formattedList = '';
    for (let i = 0; i < weapons.length; i++) {
      formattedList += weapons[i];
      if (i !== weapons.length - 1) {
        formattedList += ' | ';
      }
    }
    return formattedList;
  }

  private getAllegianceHTML(unit) {
    let HTML = '';
    for (let modelType in unit.models) {
      if (unit.models[modelType].length > 0) {
        let allegiances = unit.models[modelType][0].modelInfo.Allegiance;
        if (allegiances !== undefined) {
          let selected = unit.models[modelType][0].selectedAllegiance;
          HTML += '<tr><td colspan="11"><select onchange="window.list.editor.editAllegiance(value);">';
          for (let i = 0; i < allegiances.length; i++) {
            if (i == selected) {
              HTML += '<option selected="selected" value="' + i + '">' + allegiances[i] + '</option>';
            }
            else {
              HTML += '<option value="' + i + '">' + allegiances[i] + '</option>';
            }
          }
          HTML += '</select></td></tr>';
          return HTML;
        }
      }
    }
    return HTML;
  }

  private getSeperatorHTML() {
    return '<tr><td class="seperator" colspan="11"><hr/></td></tr>';
  }
}
