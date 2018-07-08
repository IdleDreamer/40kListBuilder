import ListBuilder from '../init';
import Unit from '../objects/unit';

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
      "Lord Of War": []
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
      let tempArray: Array<any> = [];
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
    // TODO
  }

  public addFactionSpells(id: string, faction: string, spells: string) {
    // TODO - is id still needed
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
    ListBuilder.costs.updateCostsExt([points, power, wounds, models]);
  }

  public renderListOld() {
    let listContainer = (document.getElementById("newListContents") as HTMLElement);
    listContainer.innerHTML = '';
    let newUnitHTML = '';
    for (let type in this.listContents) {
      if (this.listContents[type].length > 0) {
        let imageName = this.getImageName(type);
        newUnitHTML += '<div id="typeHeader"><img src="Content/40kListBuilder/resources/icons/' + imageName + '"/><h1>' + type + '</h1></div>';
      }
      for (let unit = 0; unit < this.listContents[type].length; unit++) {
        if (this.listContents[type][unit] !== null) {
          let unitInfo = this.listContents[type][unit];
          newUnitHTML += '<table class="unitTable" id="' + unitInfo.id + '">';
          newUnitHTML += unitInfo.getUnitNameAndCostHTML();
          newUnitHTML += unitInfo.getStatsHeadersHTML();
          newUnitHTML += unitInfo.getStatsHTML();
          newUnitHTML += unitInfo.getWeaponsHeadersHTML();
          newUnitHTML += unitInfo.getWeaponsHTML();
          newUnitHTML += unitInfo.getAbilitiesHTML();
          newUnitHTML += unitInfo.getPsykerHTML();
          newUnitHTML += unitInfo.getAllegianceHTML();
          newUnitHTML += unitInfo.getKeywordsHTML();
          newUnitHTML += '</table>';
          newUnitHTML += '<ul class="unitControls">'
            +'<li class="button"><img onclick="list.removeFromList(' + unitInfo.id + ')" src="Content/40kListBuilder/resources/icons/delete.png"/></li>'
            +'<li class="button"><img onclick="list.editUnit(' + unitInfo.id + ')" src="Content/40kListBuilder/resources/icons/edit.png"/></li>'
            +'</ul><div class="clear"></div>';
        }
      }
    }
    listContainer.innerHTML += newUnitHTML;
    listContainer.innerHTML += '<div class="spacer"></div>';
  }

  public renderList() {
    let listContainer = (document.getElementById("newListContents") as HTMLElement);
    listContainer.innerHTML = '';
    for (let type in this.listContents) {
      if (this.listContents[type].length > 0) {
        let imageName = this.getImageName(type);
        listContainer.innerHTML += '<div id="typeHeader"><img src="/Content/40kListBuilder/resources/icons/' + imageName + '"/><h1>' + type + '</h1></div>';
      }
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
          // TODO - these controls don't work ?? dafuq ??
          listContainer.appendChild(this.getUnitControls(unitInfo.id));
          listContainer.innerHTML += '<div class="clear"</div>';
        }
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
    }
    return imageName;
  }

  private getUnitControls(id: number): HTMLElement {
    let controlList = document.createElement('ul');
    controlList.className = "unitControls";

    let deleteBtn = document.createElement('li');
    deleteBtn.className = "button";
    deleteBtn.id = 'delete' + id;
    deleteBtn.innerHTML = '<img src="/Content/40kListBuilder/resources/icons/delete.png"/>';
    deleteBtn.onclick = function() { alert(); };
    controlList.appendChild(deleteBtn);

    let editBtn = document.createElement('li');
    editBtn.className = "button";
    editBtn.id = 'edit' + id;
    editBtn.innerHTML = '<img src="/Content/40kListBuilder/resources/icons/edit.png"/>';
    editBtn.onclick = function() { alert(); };
    controlList.appendChild(editBtn);

    return controlList;
  }

}
