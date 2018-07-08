import Model from '../objects/model';

export default class Unit {

  public id: number;
  public faction: string;
  public type: string;
  public name: string;

  public totalModels: number;
  public totalPoints: number;
  public totalPower: number;
  public totalWounds: number;

  public unitInfo: any;
  public models: any;

  constructor(unitId: number, faction: string, type: string, name: string) {
    this.id = unitId;
    this.faction = faction;
    this.type = type;
    this.name = name;

    this.totalModels = 0;
    this.totalPoints = 0;
    this.totalPower = 0;
    this.totalWounds = 0;

    this.unitInfo = window.list.data.data[faction].units[type][name];
    this.models = {};

    this.setupDefaultModels();
    this.updateCosts();
  }

  public getUnitNameAndCostHTML(): string {
    let costHTML =  'Points: ' + this.totalPoints
                 +  ' | Power: ' + this.totalPower
                 +  ' | Wounds: ' + this.totalWounds
                 +  ' | Models: ' + this.totalModels;
    let HTML = '<tr>'
      + '<td class="name" colspan="5">' + this.name + '</td>'
      + '<td class="cost" colspan="5">' + costHTML + '</td>'
      + '</tr>';
    
    return HTML;
  }

  public getStatsHeadersHTML(): string {
    let HTML = '<tr>'
        + '<th class="statHeader" id="name_H">Name</th>'
        + '<th class="statHeader" id="m_H">M</th>'
        + '<th class="statHeader" id="ws_H">WS</th>'
        + '<th class="statHeader" id="bs_H">BS</th>'
        + '<th class="statHeader" id="s_H">S</th>'
        + '<th class="statHeader" id="t_H">T</th>'
        + '<th class="statHeader" id="w_H">W</th>'
        + '<th class="statHeader" id="a_H">A</th>'
        + '<th class="statHeader" id="ld_H">Ld</th>'
        + '<th class="statHeader" id="sv_H">Sv</th>'
        + '</tr>';
    return HTML;
  }

  public getStatsHTML(): string {
    let HTML = '';
    for (let modelType in this.models) {
      if (this.models[modelType].length > 0) {
        let model = this.models[modelType][0];
        let modelNumStr = '';
        if (this.models[modelType].length > 1) {
          modelNumStr = ' (' + this.models[modelType].length +')';
        }
        HTML += '<tr>'
          + '<td class="stat" id="name">' + model.name + modelNumStr + '</td>'
          + '<td class="stat" id="m">' + this.getUnProfiledStats(model.modelInfo.M) + '</td>'
          + '<td class="stat" id="ws">' + this.getUnProfiledStats(model.modelInfo.WS) + '</td>'
          + '<td class="stat" id="bs">' + this.getUnProfiledStats(model.modelInfo.BS) + '</td>'
          + '<td class="stat" id="s">' + this.getUnProfiledStats(model.modelInfo.S) + '</td>'
          + '<td class="stat" id="t">' + this.getUnProfiledStats(model.modelInfo.T) + '</td>'
          + '<td class="stat" id="w">' + this.getUnProfiledStats(model.modelInfo.W) + '</td>'
          + '<td class="stat" id="a">' + this.getUnProfiledStats(model.modelInfo.A) +'</td>'
          + '<td class="stat" id="ld">' + this.getUnProfiledStats(model.modelInfo.Ld) + '</td>'
          + '<td class="stat" id="sv">' + this.getUnProfiledStats(model.modelInfo.Sv) + '</td>'
          + '</tr>';
      }
    }
    return HTML;
  }

  public getUnProfiledStats(stat: any) {
    if (typeof stat === "string" || typeof stat === "number") {
      return stat;
    }
    else {
      let stats = '';
      for (let i = 0; i < stat.length; i++) {
        stats += '<b>' + stat[i].value + '</b> (' + stat[i].Wounds[0] + '-' + stat[i].Wounds[1] + ')<br/>';
      }
      return stats;
    }
  }

  public getWeaponsHeadersHTML(): string {
    let HTML = '<tr>'
        + '<th class="leftHeader">Weapon</th>'
        + '<th>Range</th>'
        + '<th>Type</th>'
        + '<th>S</th>'
        + '<th>AP</th>'
        + '<th>D</th>'
        + '<th colspan="4">Abilities</th>'
        + '</tr>';
    return HTML;
  }

  public getWeaponsHTML(): string {
    let listOfWeapons: Array<string> = [];
    let amountsPerWeapon: Array<number> = [];
    let HTML = '';
    for (let modelType in this.models) {
      for (let i = 0; i < this.models[modelType].length; i++) {
        let weapons = this.models[modelType][i].modelInfo.Wargear.weapons[this.models[modelType][i].selectedWeaponConfig];
        for (let weapon in weapons) {
          if (listOfWeapons.indexOf(weapons[weapon]) === -1) {
            listOfWeapons.push(weapons[weapon]);
            amountsPerWeapon.push(1);
          }
          else {
            amountsPerWeapon[listOfWeapons.indexOf(weapons[weapon])]++;
          }
        }
      }
    }
    for (let weaponIndex in listOfWeapons) {
      let weapon = listOfWeapons[weaponIndex];
      let weaponInfo = window.list.data.data[this.faction].wargear[weapon];
      let numberOf = '';
      if (amountsPerWeapon[weaponIndex] > 1) {
        numberOf = ' (' + amountsPerWeapon[weaponIndex] +')';
      }
      if (weaponInfo !== undefined) {
        if (weaponInfo.WargearAbility !== undefined) {
          HTML += '<tr>'
          + '<td class="stat" id="name">' + weapon + '</td>'
          + '<td class="stat" id="abilities" colspan="9">' + weaponInfo.WargearAbility + '</td>'
          + '</tr>';
        }
        else if (weaponInfo.profiles === undefined) {
          HTML += '<tr>'
          + '<td class="stat" id="name">' + weapon + numberOf +'</td>'
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

  public getAbilitiesHTML(): string {
    let abilityHTML = '<tr class="abilities"><th>Abilities</th><td colspan="9">';
    let abilityList: Array<any> = [];
    for (let modelType in this.models) {
      for (let i = 0; i < this.models[modelType].length; i++) {
        let abilities = this.models[modelType][i].modelInfo.Abilities;
        for (let ability in abilities) {
          if (typeof abilities[ability] !== "string") {
            for (let factionAbility in abilities[ability]) {
              let htmlString = this.getFactionAbility(factionAbility);
              if (abilityList.indexOf(htmlString) === -1) {
                abilityList.push(htmlString);
              }
            }
          }
          else {
            let htmlString = '<b>' + ability + ':</b> ' + this.models[modelType][i].modelInfo.Abilities[ability] + '<br/>';
            if (abilityList.indexOf(htmlString) === -1) {
              abilityList.push(htmlString);
            }
          }
        }
      }
    }
    for (let i = 0; i < abilityList.length; i++) {
      abilityHTML += abilityList[i];
      if (i < abilityList.length - 1) {
        abilityHTML += '<br/>';
      }
    }
    abilityHTML += '</td></tr>';
    return abilityHTML;
  }

  public getFactionAbility(id: number | string) {
    return '<b>' + window.list.data.data[this.faction].factionSpecialRules[id].name + '</b>: '
    + window.list.data.data[this.faction].factionSpecialRules[id].description + '<br/>';
  }

  public getPsykerHTML(): string {
    let psykerHTML = '';
    for (let modelType in this.models) {
      if (this.models[modelType].length > 0 && this.models[modelType][0].modelInfo.Psyker !== undefined) {
        psykerHTML += '<tr class="psykerAbilities"><th>Psyker</th>'
          + '<td colspan="9">' + this.models[modelType][0].modelInfo.Psyker
          + '</td></tr>';
      }
    }
    return psykerHTML;
  }

  public getAllegianceHTML(): string {
    let allegianceHTML = '';
    for (let modelType in this.models) {
      if (this.models[modelType].length > 0) {
        if (this.models[modelType][0].modelInfo.Allegiance !== undefined) {
          allegianceHTML += '<tr class="allegiance"><th>Allegiance</th><td colspan="9">' + this.models[modelType][0].modelInfo.Allegiance[this.models[modelType][0].selectedAllegiance] + '</td></tr>';
          return allegianceHTML;
        }
      }
    }
    return '';
  }

  public getKeywordsHTML(): string {
    let keywords: Array<any> = [];
    for (let modelType in this.models) {
      if (this.models[modelType].length > 0) {
        for (let i = 0; i < this.models[modelType][0].modelInfo["Faction Keywords"].length; i++) {
          let keyword = this.models[modelType][0].modelInfo["Faction Keywords"][i].toUpperCase();
          if (keywords.indexOf(keyword) === -1) {
            keywords.push(keyword);
          }
        }
        for (let i = 0; i < this.models[modelType][0].modelInfo.Keywords.length; i++) {
          let keyword = this.models[modelType][0].modelInfo.Keywords[i].toUpperCase();
          if (keywords.indexOf(keyword) === -1) {
            keywords.push(keyword);
          }
        }
      }
    }
    let keywordHTML = '<tr class="keywords"><th>Keywords</th><td colspan="9">';
    for (let keyword of keywords) {
      if (keywords.indexOf(keyword) < keywords.length - 1) {
        keywordHTML += keyword + ', ';
      }
      else {
        keywordHTML += keyword;
      }
    }
    keywordHTML += '</td></tr>';
    return keywordHTML;
  }

  public updateCosts() {
    this.calculateModels();
    this.calculateWounds();
    this.calculatePoints();
    this.calculatePower();
  }

  private calculateModels() {
    let models = 0;
    for (let modelType in this.models) {
      models += this.models[modelType].length;
    }
    this.totalModels = models;
  }

  private calculateWounds() {
    let wounds = 0;
    for (let modelType in this.models) {
      for (let modelIndex in this.models[modelType]) {
        wounds += this.models[modelType][modelIndex].modelInfo.W;
      }
    }
    this.totalWounds = wounds;
  }

  private calculatePoints() {
    let points = 0;
    for (let modelType in this.models) {
      for (let modelIndex in this.models[modelType]) {
        let model = this.models[modelType][modelIndex];
        points += model.modelInfo.Points;
        if (!model.modelInfo.PointsIncludesWargear) {
          if(model.modelInfo.Wargear.weapons) {
            let selectedWeapons = model.modelInfo.Wargear.weapons[model.selectedWeaponConfig];
            for (let weapon = 0; weapon < selectedWeapons.length; weapon++) {
              points += window.list.data.data[this.faction].wargear[selectedWeapons[weapon]].Points;
            }
          }
        }
      }
    }
    this.totalPoints = points;
  }

  private calculatePower() {
    let power = 0;
    for (let i = this.unitInfo.power.length - 1; i >= 0; i--) {
      if (this.totalModels >= this.unitInfo.power[i][0]) {
        power = this.unitInfo.power[i][1];
        break;
      }
    }
    this.totalPower = power;
  }

  private setupDefaultModels() {
    for (let modelType in this.unitInfo.modelTypes) {
      let model = this.unitInfo.modelTypes[modelType].model;
      this.models[model] = [];
      let modelInfo = window.list.data.data[this.faction].models[model];
      if (modelInfo !== undefined) {
        for (let num = 0; num < this.unitInfo.modelTypes[modelType].defaultAmount; num++) {
          let newModel = new Model(model, modelInfo);
          this.models[model].push(newModel);
        }
      }
    }
  }

  /* 
  addModel(modelType) {
    let model = this.unitInfo.modelTypes[modelType].model;
    let modelInfo = factionList[this.faction].models[model];
    if (modelInfo !== undefined) {
      let newModel = new Model(model, modelInfo);
      this.models[model].push(newModel);
    }
    this.updateCosts();
    list.updateCosts();
    editor.renderEdit();
  }

  removeModel(modelType) {
    let model = this.unitInfo.modelTypes[modelType].model;
    if (this.models[model].length > 1) {
      this.models[model].pop();
    }
    else {
      this.models[model] = [];
    }
    this.updateCosts();
    list.updateCosts();
    editor.renderEdit();
  }

  updateModelWargear(modelType, modelIndex, selectedWeaponConfig) {
    let model = this.unitInfo.modelTypes[modelType].model;
    this.models[model][modelIndex].selectedWeaponConfig = selectedWeaponConfig;
    this.updateCosts();
    list.updateCosts();
    editor.renderEdit();
  }

  updateAllegiance(index) {
    for (let modelType in this.models) {
      for (let modelIndex in this.models[modelType]) {
        let model = this.models[modelType][modelIndex];
        model.selectedAllegiance = index;
      }
    }
  }*/
}
