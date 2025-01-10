const { v4: uuidv4 } = require("uuid");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");
const { PostType, fakePosts: posts } = require("../features/posts");

const RootQueryType = new GraphQLObjectType({
  name: "RootQuery",
  fields: () => ({
    getAllPosts: {
      type: new GraphQLList(PostType),
      resolve() {
        return posts;
      },
    },
    getPostById: {
      type: PostType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(_, { id }) {
        return posts.find((post) => String(post.id) === id);
      },
    },
  }),
});

const RootMutationType = new GraphQLObjectType({
  name: "RootMutation",
  fields: () => ({
    addPost: {
      type: PostType,
      args: {
        userId: { type: GraphQLNonNull(GraphQLInt) },
        title: { type: GraphQLNonNull(GraphQLString) },
        body: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(_, args) {
        const newPost = {
          id: uuidv4(),
          ...args,
        };
        posts.push(newPost);
        return newPost;
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});
