import Unit from '../objects/unit';
import SpellList from '../objects/spellList';

export default class ArmyList {

  public listContents: any;
  private currentUnits: number;

  constructor() {
    this.listContents = {
      "HQ": [],
      "Troops": [],
      "Elites": [],
      "Fast Attack": [],
      "Heavy Support": [],
      "Dedicated Transport": [],
      "Flyer": [],
      "Fortification": [],
      "Lord Of War": [],
      "Spells": [],
      "Strategems": [],
      "Warlord Traits": [],
      "Warlord Wargear": [],
      "Detachments": [],
      "Detachment Abilities": [],
      "Tactical Objectives": []
    };
    this.currentUnits = 0;
  }

  public addUnit(faction: string, type: string, name: string) {
    this.listContents[type].push(new Unit(this.currentUnits, faction, type, name));
    this.currentUnits++;
    this.updateCosts();
    this.renderList();
  }

  public removeUnit(id: number) {
    for (let type in this.listContents) {
      let tempArray: Array<Unit> = [];
      for (let unit in this.listContents[type]) {
        if (this.listContents[type][unit].id !== id) {
          tempArray.push(this.listContents[type][unit]);
        }
      }
      this.listContents[type] = tempArray;
    }
    this.updateCosts();
    this.renderList();
  }

  public addSmiteSpell() {
    this.listContents['Spells'].push(new SpellList('', 'Smite'));
    this.renderList();
  }

  public addFactionSpells(faction: string, spells: string) {
    this.listContents['Spells'].push(new SpellList(faction, spells));
    this.renderList();
  }

  public updateCosts() {
    let power = 0;
    let points= 0;
    let wounds = 0;
    let models = 0;
    for (let type in this.listContents) {
      for (let unit of this.listContents[type]) {
        if (unit !== null) {
          power += unit.totalPower;
          points += unit.totalPoints;
          wounds += unit.totalWounds;
          models += unit.totalModels;
        }
      }
    } 
    window.list.costs.updateCostsExt([points, power, wounds, models]);
  }

  public renderList() {
    let listContainer = (document.getElementById("newListContents") as HTMLElement);
    listContainer.innerHTML = '';
    for (let type in this.listContents) {
      if (this.listContents[type].length > 0) {
        let imageName = this.getImageName(type);
        listContainer.innerHTML += '<div id="typeHeader"><img src="/Content/40kListBuilder/resources/icons/' + imageName + '"/><h1>' + type + '</h1></div>';
      }
      if (this.listContents[type][0] && this.listContents[type][0] instanceof Unit) {
        for (let unit = 0; unit < this.listContents[type].length; unit++) {
          if (this.listContents[type][unit] !== null) {
            let unitInfo = this.listContents[type][unit] as Unit;
            let unitTable = document.createElement('table');
            unitTable.className = "unitTable";
            unitTable.id = '' + unitInfo.id;
            unitTable.innerHTML += unitInfo.getUnitNameAndCostHTML();
            unitTable.innerHTML += unitInfo.getStatsHeadersHTML();
            unitTable.innerHTML += unitInfo.getStatsHTML();
            unitTable.innerHTML += unitInfo.getWeaponsHeadersHTML();
            unitTable.innerHTML += unitInfo.getWeaponsHTML();
            unitTable.innerHTML += unitInfo.getAbilitiesHTML();
            unitTable.innerHTML += unitInfo.getPsykerHTML();
            unitTable.innerHTML += unitInfo.getAllegianceHTML();
            unitTable.innerHTML += unitInfo.getKeywordsHTML();
            listContainer.appendChild(unitTable);
            listContainer.appendChild(this.getUnitControls(unitInfo.id));
            listContainer.innerHTML += '<div class="clear"</div>';
          }
        }
      }
      else if (this.listContents[type][0] && this.listContents[type][0] instanceof SpellList) {
        for (let spell = 0; spell < this.listContents[type].length; spell++) {
          if (this.listContents[type][spell] !== null) {
            listContainer.appendChild((this.listContents[type][spell] as SpellList).getSpellsHTML());
          }
        }
        // TODO:
        // Spells
        // Strategems
        // Warlord Traits
        // Detachments
      }
    }
    let spacer = document.createElement('div');
    spacer.className = "spacer";
    listContainer.appendChild(spacer);
  }

  public getImageName(type: string): string {
    let imageName = '';
    switch (type) {
      case "HQ":
        imageName = 'hq.png';
        break;
      case "Troops":
        imageName = 'troops.png';
        break;
      case "Elites":
        imageName = 'elites.png';
        break;
      case "Fast Attack":
        imageName = 'fastattack.png';
        break;
      case "Heavy Support":
        imageName = 'heavysupport.png';
        break;
      case "Dedicated Transport":
        imageName = 'dedicatedtransport.png';
        break;
      case "Flyer":
        imageName = 'flyers.png';
        break;
      case "Fortification":
        imageName = 'fortifications.png';
        break;
      case "Lord Of War":
        imageName = 'lordofwar.png';
        break;
      case "Spells":
        imageName = 'spells.png';
    }
    return imageName;
  }

  private getUnitControls(id: number): HTMLElement {
    let controlList = document.createElement('ul');
    controlList.className = "unitControls";

    let deleteBtn = document.createElement('li');
    deleteBtn.className = "button";
    deleteBtn.id = 'delete' + id;
    deleteBtn.innerHTML = '<img onclick="list.armyList.removeUnit(' + id + ')" src="/Content/40kListBuilder/resources/icons/delete.png"/>';
    controlList.appendChild(deleteBtn);

    let editBtn = document.createElement('li');
    editBtn.className = "button";
    editBtn.id = 'edit' + id;
    editBtn.innerHTML = '<img onclick="list.editor.editUnit(' + id + ')" src="/Content/40kListBuilder/resources/icons/edit.png"/>';
    controlList.appendChild(editBtn);

    return controlList;
  }
}
