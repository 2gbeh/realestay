const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");
const { PostType, postRepository } = require("../features/posts");

const rootSchema = {
  query: new GraphQLObjectType({
    name: "RootQuery",
    fields: () => ({
      getAllPosts: {
        type: new GraphQLList(PostType),
        resolve: () => postRepository.getAll(),
      },
      getPostById: {
        type: PostType,
        args: {
          id: { type: GraphQLNonNull(GraphQLID) },
        },
        resolve: (_, { id }) => postRepository.getById(id),
      },
    }),
  }),
  mutation: new GraphQLObjectType({
    name: "RootMutation",
    fields: () => ({
      createPost: {
        type: PostType,
        args: {
          userId: { type: GraphQLNonNull(GraphQLString) },
          title: { type: GraphQLNonNull(GraphQLString) },
          body: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve: (_, args) => postRepository.add(args),
      },
      updatePost: {
        type: PostType,
        args: {
          id: { type: GraphQLNonNull(GraphQLID) },
          title: { type: GraphQLString },
          body: { type: GraphQLString },
        },
        resolve: (_, { id, ...args }) => postRepository.edit(args, id),
      },
      deletePost: {
        type: PostType,
        args: {
          id: { type: GraphQLNonNull(GraphQLID) },
        },
        resolve: (_, { id }) => postRepository.remove(id),
      },
    }),
  }),
};

module.exports = new GraphQLSchema(rootSchema);
