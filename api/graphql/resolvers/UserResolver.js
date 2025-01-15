const RootResolver = require("../RootResolver");
const fakeUsers = require("../../data/fake-users.json");

class UserResolver extends RootResolver {
  constructor() {
    super(fakeUsers);
  }
}

module.exports = new UserResolver();
