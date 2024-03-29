// import express and graphql
var express = require("express");

var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");

// construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// the root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return "Hello world!"
  },
}

var app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000);
console.log("running a GraphQL API server at http://localhost:4000/graphql");
