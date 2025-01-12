const CommonRepository = require("../common/CommonRepository");
const fakePosts = require("./fake-posts.json");

class PostRepository extends CommonRepository {
  constructor() {
    super(fakePosts);
  }
}

module.exports = new PostRepository();
