export class users {

  constructor() {
    this.user = { Id: "Id", born: "born", first: "first", last: "last" };
  }

  getUser() {
    return this.user;
  }
  setUser(user) {
    this.user = user;
  }
}
