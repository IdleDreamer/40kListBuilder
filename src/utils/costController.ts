export default class Costs {

  // cost values
  public costs: Array<number>;

  // elements
  private pointsElement: HTMLElement;
  private powerElement: HTMLElement;
  private woundsElement: HTMLElement;
  private modelsElement: HTMLElement;

  constructor() {
    this.costs = [0,0,0,0];
    this.pointsElement = document.getElementById("POINTS") as HTMLElement;
    this.powerElement = document.getElementById("POWER") as HTMLElement;
    this.woundsElement = document.getElementById("WOUNDS") as HTMLElement;
    this.modelsElement = document.getElementById("MODELS") as HTMLElement;
    this.updateCosts();
  }

  private updateCosts() {
    
    this.pointsElement.innerHTML = '<div class="costValue">' + this.costs[0] + '</div>' + 'POINTS';
    this.powerElement.innerHTML = '<div class="displayedCostSmall">Power: ' + this.costs[1] + '</div>';
    this.woundsElement.innerHTML = '<div class="displayedCostSmall">Wounds: ' + this.costs[2] + '</div>';
    this.modelsElement.innerHTML = '<div class="displayedCostSmall">Models: ' + this.costs[3] + '</div>';
  }
}
