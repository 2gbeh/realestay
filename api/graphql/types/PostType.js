const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = require("graphql");
// 
const UserType = require("../types/UserType");
const userResolver = require("../resolvers/UserResolver");

const PostType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    userId: { type: GraphQLString },
    user: {
      type: UserType,
      resolve: (parent) => userResolver.getById(parent.userId),
    },
  }),
});

module.exports = PostType;
