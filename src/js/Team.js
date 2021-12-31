export default class Team {
  constructor() {
    this.myTeam = [];
  }

  addPerson(person) {
    this.myTeam.push(person);
  }

  [Symbol.iterator]() {
    let current = 0;
    const last = this.myTeam.length;
    const team = this.myTeam;

    return { // метод должен вернуть объект с методом next()
      next() {
        if (current < last) {
          const person = team[current];
          current = +1;
          return {
            done: false,
            value: person,
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
