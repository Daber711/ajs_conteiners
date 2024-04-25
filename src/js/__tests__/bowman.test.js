import Bowman from '../class/Bowman';

test('Test Bowman create', () => {
  const result = {
    attack: 25, defence: 25, health: 100, level: 1, name: 'Bowman', type: 'Bowman', 
  };

  const objBow = new Bowman('Bowman');

  expect(objBow).toEqual(result);
});

test('Test Bowman levelUp', () => {
  const result = {
    attack: 30, defence: 30, health: 100, level: 2, name: 'Bowman', type: 'Bowman', 
  };

  const objBow = new Bowman('Bowman');
  objBow.levelUp();
  expect(objBow).toEqual(result);
});

test('Test Bowman damage', () => {
  const damage = 20;
  const result = {
    attack: 25, defence: 25, health: 85, level: 1, name: 'Bowman', type: 'Bowman',
  };

  const objBow = new Bowman('Bowman');
  objBow.damage(damage);
  expect(objBow).toEqual(result);
});