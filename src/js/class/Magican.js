import Character from './Character';

export default class Magican extends Character {
  constructor(name, type = 'Magican') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}