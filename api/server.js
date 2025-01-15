const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/rootSchema");
//
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const basePath = "/api";
const graphQLPath = "/graphql";
//
app.use(cors());
app.use(
  graphQLPath,
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);
app.listen(
  port,
  console.log(`- Local:        http://localhost:${port}${graphQLPath}`)
);
