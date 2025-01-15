const {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");
//
const UserType = require("../types/UserType");
const userResolver = require("../resolvers/UserResolver");

const userSchema = {
  query: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      resolve: () => userResolver.getAll(),
    },
  },
  mutation: {},
};

module.exports = userSchema;
