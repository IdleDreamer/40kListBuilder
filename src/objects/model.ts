export default class Model {

  public name: string;
  public modelInfo: any;
  public points: number;
  public selectedWeaponConfig: number; // TODO - multiple slots
  public selectedAllegiance: number;

  constructor(name: string, modelInfo: any) {
    this.name = name;
    this.modelInfo = modelInfo;
    this.points = modelInfo.Points;
    this.selectedWeaponConfig = 0;
    this.selectedAllegiance = 0;
  }
}
