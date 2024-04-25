import Magican from '../class/Magican';

test('Test Magican create', () => {
  const result = {
    attack: 10, defence: 40, health: 100, level: 1, name: 'Magican', type: 'Magican', 
  };

  const objBow = new Magican('Magican');

  expect(objBow).toEqual(result);
});

test('Test Magican levelUp', () => {
  const result = {
    attack: 12, defence: 48, health: 100, level: 2, name: 'Magican', type: 'Magican', 
  };

  const objBow = new Magican('Magican');
  objBow.levelUp();
  expect(objBow).toEqual(result);
});

test('Test Magican damage', () => {
  const damage = 20;
  const result = {
    attack: 10, defence: 40, health: 88, level: 1, name: 'Magican', type: 'Magican',
  };

  const objBow = new Magican('Magican');
  objBow.damage(damage);
  expect(objBow).toEqual(result);
});