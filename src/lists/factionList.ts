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

  private openNav() {
    (document.getElementById("sidenav") as HTMLElement).style.width = "350px";
    (document.getElementById("availableList") as HTMLElement).style.marginLeft = "350px";
    (document.getElementById("newList") as HTMLElement).style.paddingLeft = "700px";
    this.open = true;
  }

  private closeNav() {
    (document.getElementById("sidenav") as HTMLElement).style.width = "60px";
    (document.getElementById("availableList") as HTMLElement).style.marginLeft = "60px";
    (document.getElementById("newList") as HTMLElement).style.paddingLeft = "410px";
    this.open = false;
  }

  private toggleNav() {
    if (this.open) {
      this.closeNav();
    }
    else {
      this.openNav();
    }
  }

  private isOpen() {
    return this.open;
  }

  private setupFactionList() {
    this.menuBtn.onclick = () => { this.toggleNav(); };
    if (!this.isOpen()) {
      this.openNav();
    }
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
    listItem.onclick = () => { this.factionSelected(faction); };
    listItem.innerHTML = '<img src="Content/40kListBuilder/resources/icons/' + Factions[faction].icon + '"/>' + faction;
    return listItem;
  }

  private factionSelected(faction: string) {
    ListBuilder.unitList.factionSelected(faction);
    if (this.isOpen()) {
      this.closeNav();
    }
  }
}
