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

// Initializes application
const app = express();

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