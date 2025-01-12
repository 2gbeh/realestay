const CommonRepository = require("../common/CommonRepository");
const fakeUsers = require("./fake-users.json");

class UserRepository extends CommonRepository {
  constructor() {
    super(fakeUsers);
  }
}

module.exports = new UserRepository();
