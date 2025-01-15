const {
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");

const createPostInputType = new GraphQLInputObjectType({
  name: "CreatePostInput",
  fields: {
    userId: { type: GraphQLNonNull(GraphQLString) },
    title: { type: GraphQLNonNull(GraphQLString) },
    body: { type: GraphQLNonNull(GraphQLString) },
  },
});

const updatePostInputType = new GraphQLInputObjectType({
  name: "UpdatePostInput",
  fields: {
    title: { type: GraphQLString },
    body: { type: GraphQLString },
  },
});

module.exports = {
  createPostInputType,
  updatePostInputType,
};
