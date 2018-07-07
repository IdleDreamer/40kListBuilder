import Data from '../src/data/dataController';
import Costs from '../src/utils/costController';
import FactionList from '../src/lists/factionList';
import UnitList from '../src/lists/unitList';
import ArmyList from '../src/lists/armyList';
import Editor from '../src/editor/editor';

export default class ListBuilder {

  public static data: Data;
  public static costs: Costs;
  public static factionList: FactionList;
  public static unitList: UnitList;
  public static armyList: ArmyList;
  public static editor: Editor;

  constructor() {
    ListBuilder.data = new Data(this.setup, this.loadingFailure);
  }

  public loadFactionData() {
    ListBuilder.data.loadFactionData();
  }

  public setup() {
    ListBuilder.costs = new Costs();
    ListBuilder.factionList = new FactionList();
    ListBuilder.unitList = new UnitList();
    ListBuilder.armyList = new ArmyList();
    ListBuilder.editor = new Editor();
  }

  public loadingFailure() {
    alert('Faction data failed to load :(');
  }
}

let list = new ListBuilder();
list.loadFactionData();

/**
 * X 1. Load all the supported faction files
 * X 2. Create the cost header 
 * 3. Create the faction list
 * 4. Create the army list
 * 5.   Create the available unit list
 * 6.   Populate the army list
 * 7.   Create the editor
 * 
 * TODOs: 
 *  - Spells
 *  - Strategems
 *  - Detachments
 *  - Warlord traits
 *  - A way to tell which weapon goes with which model in print view
 */
