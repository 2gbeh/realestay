const dotenv = require("dotenv");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schemas/rootSchema");
//
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
//
app.use(
  "/api/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);
app.listen(port, console.log(`- Local:        http://localhost:${port}/api/graphql`));
