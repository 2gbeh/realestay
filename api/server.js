require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schemas/rootSchema");
//
const port = process.env.PORT || 4000;
const app = express();
//
app.use(
  "/api/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);
app.listen(port, console.log("🚀 ~ server ~ port:", port));
