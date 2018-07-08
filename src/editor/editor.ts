export default class Editor {

  public editUnit(id: number) {
    // TODO
  }

  // TODO - a lot of this can now be done via the unit class

  /* constructor() {
    this.editorContainerHtml = document.getElementById("editor");
    this.editorHtml = document.getElementById("editorForm");
    this.editorContainerHtml.style.width = '0px';
    this.active = false;
  }

  editUnit(id) {
    for (var type in listContents) {
      for (var unit in listContents[type]) {
        if (listContents[type][unit].id === id) {
          this.unit = listContents[type][unit];
          this.renderEdit();
          break;
        }
      }
    }
  }

  renderEdit() {
    this.active = true;
    this.editorContainerHtml.style.width = '100%';
    var editFields = this.editorHtml.innerHTML;
    editFields = '';

    editFields += '<table class="editTable">';
    editFields += this.getUnitNameAndCostHTML(this.unit);

    let globalMax = this.unit.unitInfo.modelTypes[0].maxAmount;
    let globalMin = this.unit.unitInfo.modelTypes[0].defaultAmount;
    let totalModels = 0;
    for (var i = 0; i < this.unit.unitInfo.modelTypes.length; i++) {
      totalModels += this.unit.models[this.unit.unitInfo.modelTypes[i].model].length;
    }

    for (var i = 0; i < this.unit.unitInfo.modelTypes.length; i++) {
      editFields += this.getModelTypeHTML(this.unit.unitInfo.modelTypes[i].model);
      var models = this.unit.models[this.unit.unitInfo.modelTypes[i].model];
      var max = this.unit.unitInfo.modelTypes[i].maxAmount;
      if (models) {
        for (var model in models) {
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
      editFields += '<tr><td class="modelType" colspan="11">Allegiance</td></tr>'
      editFields += allegianceHTML;
    }
    editFields += '</table>';

    editFields += '<button class="closeButton" type="button" onclick="editor.closeEdit()">Done</button>';
    this.editorHtml.innerHTML = editFields;
  }

  getUnitNameAndCostHTML(unit) {
    var costHTML =  'Points: ' + unit.totalPoints
                 +  ' | Power: ' + unit.totalPower
                 +  ' | Wounds: ' + unit.totalWounds
                 +  ' | Models: ' + unit.totalModels;
    let HTML = '<tr>'
      + '<td class="name" colspan="5">' + unit.name + '</td>'
      + '<td class="cost" colspan="6">' + costHTML + '</td>'
      + '</tr>';
    
    return HTML;
  }

  getModelTypeHTML(type) {
    return '<tr><td class="modelType" colspan="11">' + type + '(s)</td></tr>';
  }

  getButtonRowHTML(canAdd, canRemove, model) {
    var modelId = "'" + model + "'";
    let HTML = '<tr><td colspan="11">';
    if (canAdd) {
      let button = document.createElement
      HTML += '<button class="add" type="button" onclick="editor.addModel(' + modelId + ')">Add</button>';
    }
    if (canRemove) {
      HTML += '<button class="remove" type="button" onclick="editor.removeModel(' + modelId + ')">Remove</button>';
    }
    HTML += '</td></tr>';
    return HTML;
  } 

  getModelStatsHTML(unit, model) {
    var html = '';
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

  getWeaponsHTML(model, faction) {
    let HTML = '';
    let selectedWeapons = model.modelInfo.Wargear.weapons[model.selectedWeaponConfig];
    for (let weapon of selectedWeapons) {
      let weaponInfo = factionList[faction].wargear[weapon];
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
          for (var profile in weaponInfo.profiles) {
            var profileInfo = weaponInfo.profiles[profile];
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

  getWeaponLoadoutSelectionHTML(type, id, model) {
    let valueStr = '' + type + '-' + id + '-';
    let HTML = '';
    HTML += '<tr><td colspan="11"><select onchange="editor.editLoadout(value);">';
    
    let loadoutLength = model.modelInfo.Wargear.weapons.length;
    let selected = model.selectedWeaponConfig;
    for (let i = 0; i < loadoutLength; i++) {
      let weaponsList = model.modelInfo.Wargear.weapons[i];
      let cost = 0;
      for (let weapon = 0; weapon < weaponsList.length; weapon++) {
        cost += factionList[this.unit.faction].wargear[weaponsList[weapon]].Points;
      }
      if (i == selected) {
        HTML += '<option value="' + valueStr + i + '" selected="selected">' + this.formatWeaponsList(model.modelInfo.Wargear.weapons[i]) + ' (' + cost + ' pnts)</option>';
      }
      else {     
        HTML += '<option value="' + valueStr + i + '">' + this.formatWeaponsList(model.modelInfo.Wargear.weapons[i]) + ' (' + cost + ' pnts)</option>';
      }
    }
    HTML += '</select></td></tr>';
    return HTML;
  }

  formatWeaponsList(weapons) {
    let formattedList = '';
    for (let i = 0; i < weapons.length; i++) {
      formattedList += weapons[i];
      if (i !== weapons.length - 1) {
        formattedList += ' | ';
      }
    }
    return formattedList;
  }

  getAllegianceHTML(unit) {
    let HTML = '';
    for (var modelType in unit.models) {
      if (unit.models[modelType].length > 0) {
        let allegiances = unit.models[modelType][0].modelInfo.Allegiance;
        if (allegiances !== undefined) {
          let selected = unit.models[modelType][0].selectedAllegiance;
          HTML += '<tr><td colspan="11"><select onchange=editor.editAllegiance(value)>';
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

  getSeperatorHTML() {
    return '<tr><td class="seperator" colspan="11"><hr/></td></tr>';
  }

  addModel(id) {
    this.unit.addModel(id);
  }

  removeModel(id) {
    this.unit.removeModel(id);
  }

  editLoadout(argStr) {
    let args = argStr.split('-');
    this.unit.updateModelWargear(args[0], args[1], args[2]);
  }

  editAllegiance(index) {
    this.unit.updateAllegiance(index);
  }

  closeEdit() {
    this.editorContainerHtml.style.width = '0px';
    this.active = false;
    list.updateCosts();
    list.renderList();
  } */
}
