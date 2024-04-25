import Team from "../app.js";
import ErrorRepository from "../app.js";
import Character from "../class/Character.js";

test("Test Team", () => {
  const hero1 = new Character("Ivan", "Bowman");
  const team = new Team();
  team.add(hero1);
  const result = 
  {
    name: "Ivan",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  };

  expect(team[0]).toEqual(result);
});

test("Test ErrRep", ()=> {
  const errRep = new ErrorRepository();
  errRep.addErr(123, 'Ошибка 123');
  const result = errRep.translate(123);

  expect(123).toEqual(result);
});
