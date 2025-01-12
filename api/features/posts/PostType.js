const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = require("graphql");
const { UserType, fakeUsers: users } = require("../users");

const PostType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    id: { type: GraphQLID },
    userId: { type: GraphQLInt },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(parent) {
        return users.find((user) => String(user.id) === String(parent.userId));
      },
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
