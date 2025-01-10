const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = require("graphql");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    address: { type: AddressType },
    phone: { type: GraphQLString },
    website: { type: GraphQLString },
    company: { type: CompanyType },
  }),
});

const AddressType = new GraphQLObjectType({
  name: "Address",
  fields: () => ({
    street: { type: GraphQLString },
    suite: { type: GraphQLString },
    city: { type: GraphQLString },
    zipcode: { type: GraphQLString },
    geo: { type: GeoType },
  }),
});

const GeoType = new GraphQLObjectType({
  name: "Geo",
  fields: () => ({
    lat: { type: GraphQLString },
    lng: { type: GraphQLString },
  }),
});

const CompanyType = new GraphQLObjectType({
  name: "Company",
  fields: () => ({
    name: { type: GraphQLString },
    catchPhrase: { type: GraphQLString },
    bs: { type: GraphQLString },
  }),
});

module.exports = UserType;
