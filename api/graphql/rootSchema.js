const { GraphQLSchema, GraphQLObjectType } = require("graphql");
//
const userSchema = require("./schemas/userSchema");
const postSchema = require("./schemas/postSchema");

const rootSchema = {
  query: new GraphQLObjectType({
    name: "RootQuery",
    fields: () => ({
      ...userSchema.query,
      ...postSchema.query,
    }),
  }),
  mutation: new GraphQLObjectType({
    name: "RootMutation",
    fields: () => ({
      ...userSchema.mutation,
      ...postSchema.mutation,
    }),
  }),
};

module.exports = new GraphQLSchema(rootSchema);
