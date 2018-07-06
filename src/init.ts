export default class ListBuilder {

  public Factions: String;
  public UnitList: String;
  public ArmyList: String;

  constructor() {
    this.Factions = 'test1';
    this.UnitList = 'test1';
    this.ArmyList = 'test1';
  }

  public test(): void {
    alert('Working');
  }
}

let list = new ListBuilder();
list.test();
