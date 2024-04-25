import Zombie from '../class/Zombie';

test('Test Zombie create', () => {
  const result = {
    attack: 40, defence: 10, health: 100, level: 1, name: 'Zombie', type: 'Zombie', 
  };

  const objBow = new Zombie('Zombie');

  expect(objBow).toEqual(result);
});

test('Test Zombie levelUp', () => {
  const result = {
    attack: 48, defence: 12, health: 100, level: 2, name: 'Zombie', type: 'Zombie', 
  };

  const objBow = new Zombie('Zombie');
  objBow.levelUp();
  expect(objBow).toEqual(result);
});

test('Test Zombie damage', () => {
  const damage = 20;
  const result = {
    attack: 40, defence: 10, health: 82, level: 1, name: 'Zombie', type: 'Zombie',
  };

  const objBow = new Zombie('Zombie');
  objBow.damage(damage);
  expect(objBow).toEqual(result);
});