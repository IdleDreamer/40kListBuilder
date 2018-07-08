import AvailableUnit from "../objects/availableUnit";

export default class UnitList {

  private currentFaction: string;
  private availableList: Array<AvailableUnit>;

  constructor() {
    this.currentFaction = '';
    this.availableList = [];
  }

  public factionSelected(faction: string) {
    this.availableList = [];
    this.currentFaction = faction;
    let factionData = window.list.data.data[faction];
    for (let type in factionData.units) {
      let units = factionData.units[type];
      for (let unit in units) {
        this.availableList.push(new AvailableUnit(faction, type, unit));
      }
    }
    this.renderList();
  }

  private renderList() {
    let availableListHTML = (document.getElementById("availableList") as HTMLElement);
    availableListHTML.innerHTML = '<h2>' + this.currentFaction + '</h2>';

    let containingList = document.createElement('ul');
    let typeList = document.createElement('ul');
    let currentType = "";
    let listItem = document.createElement('li');

    for (let unit of this.availableList) {
      if (unit.type !== currentType) {
        if (currentType !== "") {
          containingList.appendChild(typeList);
          typeList = document.createElement('ul');
        }
        typeList.innerHTML = unit.type + '<hr/>';
        currentType = unit.type;
      }    
      listItem = document.createElement('li');
      listItem.onclick = () => {
        window.list.armyList.addUnit(unit.faction, unit.type, unit.name);
      };
      listItem.innerHTML = unit.name
        + '<br/><div id="unitDetails"><table><tr><td>Points: ' 
        + unit.points
        + '</td><td>Power: '
        + unit.power
        + '</td><td>Wounds: '
        + unit.wounds
        + '</td><td>Models: '
        + unit.models
        + '</td></tr></table></div>';
      typeList.appendChild(listItem);
    }
    containingList.appendChild(typeList);
    
    if (window.list.data.data[this.currentFaction].spells !== undefined) {
      let spellsList = document.createElement('ul');
      spellsList.innerHTML = 'Spells<hr/>';

      let smite = document.createElement('li');
      smite.id = "smite";
      smite.onclick = () => {
        window.list.armyList.addSmiteSpell();
      };
      smite.innerHTML = "Smite";
      spellsList.appendChild(smite);

      for (let spellType in window.list.data.data[this.currentFaction].spells) {
        let id = this.currentFaction + '-' + spellType;
        let spellItem = document.createElement('li');
        spellItem.id = id;
        spellItem.onclick = () => {
          window.list.armyList.addFactionSpells(this.currentFaction, spellType);
        };
        spellItem.innerHTML = spellType;
        spellsList.appendChild(spellItem);
      }
      containingList.appendChild(spellsList);
    }

    availableListHTML.appendChild(containingList);

    let spacer = document.createElement('div');
    spacer.className = "spacer";
    availableListHTML.appendChild(spacer);
  }
}
