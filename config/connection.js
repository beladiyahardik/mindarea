const mongoose = require("mongoose");
require("dotenv").config();

//Set up default mongoose connection
const mongoDB = `mongodb+srv://${process.env.DBUSERNAME}:${process.env
  .DBPASSWORD}@cluster0.jgv5v.mongodb.net/${process.env.DBNAME}`;
mongoose
  .connect(mongoDB)
  .then(() => {
    console.log("Connections started");
  })
  .catch(() => {
    console.log("Connection failed successfully");
  });
