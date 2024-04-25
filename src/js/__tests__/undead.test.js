import Undead from '../class/Undead';

test('Test Undead create', () => {
  const result = {
    attack: 25, defence: 25, health: 100, level: 1, name: 'Undead', type: 'Undead', 
  };

  const objBow = new Undead('Undead');

  expect(objBow).toEqual(result);
});

test('Test Undead levelUp', () => {
  const result = {
    attack: 30, defence: 30, health: 100, level: 2, name: 'Undead', type: 'Undead', 
  };

  const objBow = new Undead('Undead');
  objBow.levelUp();
  expect(objBow).toEqual(result);
});

test('Test Undead damage', () => {
  const damage = 20;
  const result = {
    attack: 25, defence: 25, health: 85, level: 1, name: 'Undead', type: 'Undead',
  };

  const objBow = new Undead('Undead');
  objBow.damage(damage);
  expect(objBow).toEqual(result);
});