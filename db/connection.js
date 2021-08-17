// Load environmental variables
require("dotenv").config();

// Import dependencies
const mongoose = require("mongoose");

// pull out environmental variables from process.env object
const MONGODB_URI = process.env.MONGODB_URI;

// Optional configuration object to remove mongo depreciation warnings
const config = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

// Establish connection to database
mongoose.connect(MONGODB_URI, config);

// Create database connection message for Open, Closed, and Error
mongoose.connection
  .on("open", () => console.log("MONGO CONNECTION IS OPEN"))
  .on("close", () => console.log("MONGO CONNECTION IS CLOSED"))
  .on("error", (error) =>
    console.log("MONGO CONNECTION ERROR \n***************\n")
  );
// Export mongoose connection to use in server.js
module.exports = mongoose;
