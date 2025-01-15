const {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");
//
const PostType = require("../types/PostType");
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
        userId: { type: GraphQLNonNull(GraphQLString) },
        title: { type: GraphQLNonNull(GraphQLString) },
        body: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (_, args) => postResolver.add(args),
    },
    updatePost: {
      type: PostType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
      },
      resolve: (_, { id, ...args }) => postResolver.edit(args, id),
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
