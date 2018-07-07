import ListBuilder from "../init";

export default class AvailableUnit {

  public faction: string;
  public type: string;
  public name: string;
  public unitInfo: any;
  public points: number;
  public power: number;
  public wounds: number;
  public models: number;

  constructor(faction: string, type: string, unit: string) {
    this.faction = faction;
    this.type = type;
    this.name = unit;
    this.unitInfo = ListBuilder.data.data[faction].units[type][unit];
    this.points = this.getPointsValue();
    this.power = this.getPowerValue();
    this.wounds = this.getWoundsValue();
    this.models = this.getModelsValue();
  }

  public getPointsValue() {
    let points = 0;
    for (let modelType of this.unitInfo.modelTypes) {
      let modelPoints = 0;
      let model = ListBuilder.data.data[this.faction].models[modelType.model];
      modelPoints += model.Points;  
      if (!model.PointsIncludesWargear) {
        if(model.Wargear.weapons) {
          for (let weapon = 0; weapon < model.Wargear.weapons[0].length; weapon++) {
            modelPoints += ListBuilder.data.data[this.faction].wargear[model.Wargear.weapons[0][weapon]].Points;
          }
        }
      }
      points += (modelPoints * modelType.defaultAmount);
    }
    return points;
  }

  public getPowerValue() {
    let power = 0;
    power += this.unitInfo.power[0][1];
    return power;
  }

  public getWoundsValue() {
    let wounds = 0;
    for (let modelType of this.unitInfo.modelTypes) {
      let model = ListBuilder.data.data[this.faction].models[modelType.model];
      wounds += (model.W * modelType.defaultAmount); 
    }
    return wounds;
  }

  public getModelsValue() {
    let models = 0;
    for (let modelType of this.unitInfo.modelTypes) {
      models += modelType.defaultAmount;
    }
    return models;
  }
}
