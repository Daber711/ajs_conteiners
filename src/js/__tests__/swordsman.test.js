import Swordsman from '../class/Swordsman';

test('Test Swordsman create', () => {
  const result = {
    attack: 40, defence: 10, health: 100, level: 1, name: 'Swordsman', type: 'Swordsman', 
  };

  const objBow = new Swordsman('Swordsman');

  expect(objBow).toEqual(result);
});

test('Test Swordsman levelUp', () => {
  const result = {
    attack: 48, defence: 12, health: 100, level: 2, name: 'Swordsman', type: 'Swordsman', 
  };

  const objBow = new Swordsman('Swordsman');
  objBow.levelUp();
  expect(objBow).toEqual(result);
});

test('Test Swordsman damage', () => {
  const damage = 20;
  const result = {
    attack: 40, defence: 10, health: 82, level: 1, name: 'Swordsman', type: 'Swordsman',
  };

  const objBow = new Swordsman('Swordsman');
  objBow.damage(damage);
  expect(objBow).toEqual(result);
});