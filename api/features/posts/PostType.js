const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = require("graphql");
const { UserType, userRepository } = require("../users");

const PostType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    userId: { type: GraphQLInt },
    user: {
      type: UserType,
      resolve: (parent) => userRepository.getById(parent.userId),
    },
  }),
});

const UpdatePostDto = new GraphQLObjectType({
  name: "UpdatePostDto",
  fields: () => ({
    title: { type: GraphQLString },
    body: { type: GraphQLString },
  }),
});

module.exports = {
  PostType,
  UpdatePostDto,
};
