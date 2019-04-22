const express = require('express');
const mongoose = require("mongoose")
const bodyParser = require("body-parser");

//Models
const Recipe = require("./models/Recipe");
const User = require("./models/User");

// Bring in GraphQL-Express middleware
const { graphiqlExpress, graphqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");


const { typeDefs } = require("./schema")
const { resolvers } = require("./resolvers")


/// Create Schema

const schema = makeExecutableSchema({
     typeDefs,
     resolvers
})

// DB Config
const db = require("./config/keys").mongoURI;
// Initializes application
const app = express();

// Connect to MongoDB

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});