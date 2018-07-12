export default class SpellList {

  private faction: string;
  private spellsName: string;
  private spellConfig: any;

  constructor(faction: string, spellsName: string) {
    this.faction = faction;
    this.spellsName = spellsName;
    this.setSpellConfig();
  }

  public getSpellsHTML(): HTMLElement {
    let spellTable = document.createElement('table');
    spellTable.innerHTML = '<tr><th class="spellHeader">' + this.spellsName + '</th></tr>';
    for (let spell in this.spellConfig) {
      spellTable.innerHTML += '<tr><td class="spellName">' 
        + this.spellConfig[spell].name + '</td><td class="spellDescription">'
        + this.spellConfig[spell].description + '</td>';
    }
    return spellTable;
  }

  private setSpellConfig() {
    if (this.spellsName === 'Smite') {
      this.spellConfig = {
        "1": {
          "name": "Smite",
          "description": "Smite has a warp charge value of 5. If manifested, the closest visible enemy unit within 18\" of the psyker suffers D3 mortal wounds. If the result of the Psychic test was more than 10, the target suffers D6 mortal wounds instead."
        }
      };
    }
    else {
      this.spellConfig = window.list.data.data[this.faction].spells[this.spellsName];
    }
  }
}
