import Daemon from '../class/Daemon';

test('Test Daemon create', () => {
  const result = {
    attack: 10, defence: 40, health: 100, level: 1, name: 'Daemon', type: 'Daemon', 
  };

  const objBow = new Daemon('Daemon');

  expect(objBow).toEqual(result);
});

test('Test Daemon levelUp', () => {
  const result = {
    attack: 12, defence: 48, health: 100, level: 2, name: 'Daemon', type: 'Daemon', 
  };

  const objBow = new Daemon('Daemon');
  objBow.levelUp();
  expect(objBow).toEqual(result);
});

test('Test Daemon damage', () => {
  const damage = 20;
  const result = {
    attack: 10, defence: 40, health: 88, level: 1, name: 'Daemon', type: 'Daemon',
  };

  const objBow = new Daemon('Daemon');
  objBow.damage(damage);
  expect(objBow).toEqual(result);
});