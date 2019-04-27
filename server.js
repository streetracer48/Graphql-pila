const express = require('express');
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const cors = require("cors");
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

// Initializes application
const app = express();

app.use(cors("*"));


// Set up JWT authentication middleware
app.use(async (req, res, next) => {
  const token = req.headers["authorization"];
  if (token !== "null") {
    try {
      const currentUser = await jwt.verify(token, process.env.SECRET);
      req.currentUser = currentUser;
    } catch (err) {
      console.error(err);
    }
  }
  next();
});

// Create GraphiQL application

app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

// Connect schema with Graphql

app.use("/graphql", bodyParser(), graphqlExpress({ 
    
        schema,
        context:{
            Recipe,
            User
        }

}))

// DB Config
const db = require("./config/keys").mongoURI;


// Connect to MongoDB

// Connect to MongoD

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});