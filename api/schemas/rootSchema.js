const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
} = require("graphql");
const posts = require("../data/fake-posts.json");

const PostType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    id: { type: GraphQLID },
    userId: { type: GraphQLInt },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: "Root",
  fields: () => ({
    getAllPosts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return posts;
      },
    },
    getPostById: {
      type: PostType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, { id }) {
        return posts.find((post) => post.id === Number(id));
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQueryType,
});
