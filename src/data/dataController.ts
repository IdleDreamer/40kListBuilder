import Factions from '../data/factions';
import Settings from '../settings';

interface DataCollection {
  [key: string]: any;
}

export default class Data {

  public data: DataCollection;
  private filesLoaded: number;
  private success: Function;
  private failure: Function;

  constructor(success: Function, failure: Function) {
    this.filesLoaded = 0;
    this.success = success;
    this.failure = failure;
    this.data = {};
  }

  public loadFactionData() {
    for (let faction in Factions) {
      if (Settings.supportedFactions.indexOf(faction) > -1) {
        let json = Factions[faction].dataFile;
        let request = new XMLHttpRequest();
        request.onload = () => {
          this.onFileLoaded(faction, JSON.parse(request.response));
        };
        request.onerror = () => {
          this.onFileFailed();
        };
        request.open('get', 'Content/40kListBuilder/resources/data/' + json);
        request.send();
      }
    }
  }

  private onFileLoaded(name: string, jsonData: Object) {
    this.filesLoaded++;
    this.data[name] = jsonData;
    if (this.filesLoaded === Settings.supportedFactions.length) {
      this.success();
    }
  }

  private onFileFailed() {
    this.failure();
  }
}
