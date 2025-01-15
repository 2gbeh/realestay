const {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");
//
const PostType = require("../types/PostType");
const {
  createPostInputType,
  updatePostInputType,
} = require("../inputs/postInput");
const postResolver = require("../resolvers/PostResolver");

const postSchema = {
  query: {
    getAllPosts: {
      type: new GraphQLList(PostType),
      resolve: () => postResolver.getAll(),
    },
    getPostById: {
      type: PostType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve: (_, { id }) => postResolver.getById(id),
    },
  },
  mutation: {
    createPost: {
      type: PostType,
      args: {
        input: { type: createPostInputType },
      },
      resolve: (_, { input }) => postResolver.add(input),
    },
    updatePost: {
      type: PostType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        input: { type: updatePostInputType },
      },
      resolve: (_, { id, input }) => postResolver.edit(input, id),
    },
    deletePost: {
      type: PostType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve: (_, { id }) => postResolver.remove(id),
    },
  },
};

module.exports = postSchema;
