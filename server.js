const express = require('express');
const mongoose = require("mongoose")
// DB Config
const db = require("./config/keys").mongoURI;
// Initializes application
const app = express();

// Connect to MongoD
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});