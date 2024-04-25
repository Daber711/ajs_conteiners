import Character from "../js/class/Character.js";

export class Team {
  constructor() {
    this.members = new Set();
  }

  add(obj) {
    if (this.members.has(obj)) {
      throw new Error('Пресонаж уже добавлен');
    } else this.members.add(obj);
  }

  addAll(...obj) {
    obj.forEach((elem) => {
      if (this.members.has(elem)) {
        throw new Error('Пресонаж уже добавлен');
      }
      else this.members.add(elem);
    });
  }

  toArray() {
    const arrTeam = Array.from(this.members);
    return arrTeam;
  }
}


export class ErrorRepository {
  constructor() {
    this.errBase = new Map();
  }

  addErr(code, message) {
    this.errBase.set({code, message});
  }

  translate(code){
    if(this.members.has(code)){
      return this.members.get(code);
    }
    else{
      console.log('Unknown error');
    }
      
  }

}