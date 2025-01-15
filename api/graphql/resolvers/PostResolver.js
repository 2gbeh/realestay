const RootResolver = require("../RootResolver");
const fakePosts = require("../../data/fake-posts.json");

class PostResolver extends RootResolver {
  constructor() {
    super(fakePosts);
  }
}

module.exports = new PostResolver();
