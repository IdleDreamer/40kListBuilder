import Factions from '../data/factions';
import Settings from '../settings';
import ListBuilder from '../init';

export default class FactionList {

  private open: boolean;
  private menuBtn: HTMLElement;
  private factionList: HTMLElement;

  constructor() {
    this.open = false;
    this.menuBtn = (document.getElementById("factionBtn") as HTMLElement);
    this.factionList = (document.getElementById("factionList") as HTMLElement);
    this.setupFactionList();
  }

  public openNav() {
    (document.getElementById("sidenav") as HTMLElement).style.width = "350px";
    (document.getElementById("availableList") as HTMLElement).style.marginLeft = "350px";
    (document.getElementById("newList") as HTMLElement).style.paddingLeft = "700px";
  }

  public closeNav() {
    (document.getElementById("sidenav") as HTMLElement).style.width = "60px";
    (document.getElementById("availableList") as HTMLElement).style.marginLeft = "60px";
    (document.getElementById("newList") as HTMLElement).style.paddingLeft = "410px";
  }

  public toggleNav() {
    if (this.open) {
      this.closeNav();
      this.open = false;
    }
    else {
      this.openNav();
      this.open = true;
    }
  }

  public isOpen() {
    return this.open;
  }

  public setupFactionList() {
    this.menuBtn.onclick = () => {this.toggleNav();};
    for (let faction in Factions) {
      if (Settings.supportedFactions.indexOf(faction) !== -1) {
        this.factionList.appendChild(this.createFactionListElement(faction, true));
      }
    }
    for (let faction in Factions) {
      if (Settings.supportedFactions.indexOf(faction) === -1) {
        this.factionList.appendChild(this.createFactionListElement(faction, false));
      }
    }
  }

  private createFactionListElement(faction: string, supported: boolean): HTMLElement {
    let listItem = document.createElement('li');
    listItem.id = faction;
    if (!supported) {
      listItem.className = "factionNotSupported";
    }
    listItem.onclick = () => {/* ListBuilder.unitList.factionSelected(faction); */};
    listItem.innerHTML = '<img src="Content/40kListBuilder/resources/icons/' + Factions[faction].icon +'"/>' + faction;
    return listItem;
  }
}
