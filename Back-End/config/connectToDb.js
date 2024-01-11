const mongoose = require("mongoose");

// Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected To DB");
  } catch (err) {
    console.log(err);
  }
}

// To export the function
module.exports = connectToDb;
