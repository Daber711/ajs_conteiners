export default class Character {
	constructor(name, type) {
	  const types = [
		 'Bowman',
		 'Swordsman',
		 'Magican',
		 'Daemon',
		 'Undead',
		 'Zombie',
	  ];
	  if (name.length < 2 || name.length > 10) {
		 throw new Error('Имя должно содержать от 2 до 10 символов');
	  }
	  if (!types.includes(type)) {
		 throw new Error('Неизвестный тип');
	  }
	  this.name = name;
	  this.type = type;
 
	  this.health = 100;
	  this.level = 1;
	  this.attack = undefined;
	  this.defence = undefined;
	}
 
	levelUp() {
	  if (this.health > 0) {
		 this.level++;
		 this.health = 100;
		 this.attack *= 1.2;
		 this.defence *= 1.2;
	  } else throw new Error('Нельзя повысить уровень умершего');
	}
 
	damage(points) {
	  if (this.health > 0) {
		 this.health -= points * (1 - this.defence / 100);
	  } else throw new Error('Нельзя нанести урон умершему');
	}
 }