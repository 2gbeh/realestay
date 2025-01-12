const fakePosts = require("./fake-posts.json");
const { PostType, UpdatePostDto } = require("./PostType");
const postRepository = require("./PostRepository");

module.exports = {
  fakePosts,
  PostType,
  UpdatePostDto,
  postRepository,
};
