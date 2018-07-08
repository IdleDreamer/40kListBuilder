import Data from '../src/data/dataController';
import Costs from '../src/utils/costController';
import FactionList from '../src/lists/factionList';
import UnitList from '../src/lists/unitList';
import ArmyList from '../src/lists/armyList';
import Editor from '../src/editor/editor';

export default class ListBuilder {

  public data: Data;
  public costs: Costs;
  public factionList: FactionList;
  public unitList: UnitList;
  public armyList: ArmyList;
  public editor: Editor;

  constructor() {
    this.data = new Data(this.setup, this.loadingFailure);
    this.costs = new Costs();
    this.factionList = new FactionList();
    this.unitList = new UnitList();
    this.armyList = new ArmyList();
    this.editor = new Editor();
  }

  public loadFactionData() {
    this.data.loadFactionData();
  }

  public setup() {
    this.costs = new Costs();
    this.factionList = new FactionList();
    this.unitList = new UnitList();
    this.armyList = new ArmyList();
    this.editor = new Editor();
  }

  public loadingFailure() {
    alert('Faction data failed to load :(');
  }
}

let list = new ListBuilder();
list.loadFactionData();

declare global {
  interface Window {
    list: ListBuilder;
  }
}
window.list = list;

/**
 * X 1. Load all the supported faction files
 * X 2. Create the cost header 
 * X 3. Create the faction list
 * X 4. Create the army list
 * X 5.   Create the available unit list
 * X 6.   Populate the army list
 * 7.   Create the editor
 * 
 * TODOs: 
 *  - Spells
 *  - Strategems
 *  - Detachments
 *  - Warlord traits
 *  - A way to tell which weapon goes with which model in print view
 */
