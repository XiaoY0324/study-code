import { createContext } from "react";
import { decorate, observable, computed } from "mobx";

export class Ydstore {
  needHidden:boolean = false;
  token :string = localStorage["token"];
}

decorate(Ydstore, {
  token: observable,
  needHidden: observable
});

export default createContext(new Ydstore());
