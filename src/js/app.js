import Person from './Person';
import Team from './Team';

const myTeam = new Team();
myTeam.addPerson(new Person('Персонаж 1'));
myTeam.addPerson(new Person('Персонаж 2'));
myTeam.addPerson(new Person('Персонаж 3'));

for (const person of myTeam) {
  console.log(person);
}
