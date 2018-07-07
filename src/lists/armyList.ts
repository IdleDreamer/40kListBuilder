export default class ArmyList {

  public addUnit(id: string, faction: string, type: string, name: string) {
    // TODO - is id still needed
  }

  public removeUnit(idString: string) {
    // TODO
  }

  public addSmiteSpell() {
    // TODO
  }

  public addFactionSpells(id: string, faction: string, spells: string) {
    // TODO - is id still needed
  }

  /* addToList(idString) {
    var params = idString.split("-");
    var faction = params[0];
    var type = params[1];
    var unit = params[2];

    listContents[type].push(new NewUnit(currentUnits, faction, type, unit));
    currentUnits++;

    this.updateCosts();
    this.renderList();
  }

  removeFromList(id) {
    for (let type in listContents) {
      let tempArray = [];
      for (let unit in listContents[type]) {
        if (listContents[type][unit].id !== id) {
          tempArray.push(listContents[type][unit]);
        }
      }
      listContents[type] = tempArray;
    }
    this.updateCosts();
    this.renderList();
  }

  editUnit(id) {
    editor.editUnit(id);
  }

  updateCosts() {
    let power = 0;
    let points= 0;
    let wounds = 0;
    let models = 0;
    for (let type in listContents) {
      for (let unit of listContents[type]) {
        if (unit !== null) {
          power += unit.totalPower;
          points += unit.totalPoints;
          wounds += unit.totalWounds;
          models += unit.totalModels;
        }
      }
    } 
    costs = [power, points, wounds, models];
    costControl.updateCosts();
  }

  // TODO
  addSmiteSpell() {

  }

  // TODO
  addFactionSpells(faction) {

  }

  // TODO - display extras
  renderList() {
    var newUnitHTML = '';
    document.getElementById("newListContents").innerHTML = "";

    for (var type in listContents) {
      if (listContents[type].length > 0) {
        var imageName = ''
        switch (type) {
          case "HQ":
            imageName = 'hq.png';
            break;
          case "Troops":
            imageName = 'troops.png';
            break;
          case "Elites":
            imageName = 'elites.png';
            break;
          case "Fast Attack":
            imageName = 'fastattack.png';
            break;
          case "Heavy Support":
            imageName = 'heavysupport.png';
            break;
          case "Dedicated Transport":
            imageName = 'dedicatedtransport.png';
            break;
          case "Flyer":
            imageName = 'flyers.png';
            break;
          case "Fortification":
            imageName = 'fortifications.png';
            break;
          case "Lord Of War":
            imageName = 'lordofwar.png';
            break;
        }

        newUnitHTML += '<div id="typeHeader"><img src="Content/40kListBuilder/resources/icons/' + imageName + '"/><h1>' + type + '</h1></div>';
        
      }
      for (var unit = 0; unit < listContents[type].length; unit++) {
        if (listContents[type][unit] !== null) {
          let unitInfo = listContents[type][unit];
          newUnitHTML += '<table class="unitTable" id="' + unitInfo.id + '">';
          newUnitHTML += unitInfo.getUnitNameAndCostHTML();
          newUnitHTML += unitInfo.getStatsHeadersHTML();
          newUnitHTML += unitInfo.getStatsHTML();
          newUnitHTML += unitInfo.getWeaponsHeadersHTML();
          newUnitHTML += unitInfo.getWeaponsHTML();
          newUnitHTML += unitInfo.getAbilitiesHTML();
          newUnitHTML += unitInfo.getPsykerHTML();
          newUnitHTML += unitInfo.getAllegianceHTML();
          newUnitHTML += unitInfo.getKeywordsHTML();

          newUnitHTML += '</table>';
          newUnitHTML += '<ul class="unitControls">'
            +'<li class="button"><img onclick="list.removeFromList(' + unitInfo.id + ')" src="Content/40kListBuilder/resources/icons/delete.png"/></li>'
            +'<li class="button"><img onclick="list.editUnit(' + unitInfo.id + ')" src="Content/40kListBuilder/resources/icons/edit.png"/></li>'
            +'</ul><div class="clear"></div>';
        }
      }
    }
    document.getElementById("newListContents").innerHTML += newUnitHTML;
    document.getElementById("newListContents").innerHTML += '<div class="spacer"></div>';
  } */
}
