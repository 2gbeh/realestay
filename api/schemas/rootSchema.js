const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
} = require("graphql");
const { UserType, fakeUsers: users } = require("../features/users");
const { PostType, fakePosts: posts } = require("../features/posts");

const RootQueryType = new GraphQLObjectType({
  name: "Root",
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
        return posts.find((post) => post.id === Number(id));
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQueryType,
});
