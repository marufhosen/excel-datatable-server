const mongoose = require("mongoose");

//create schema
const employeSchema = mongoose.Schema({
  title: String,
  employers: [
    {
      Name: String,
      Position: String,
      OfficeLocation: String,
      Age: Number,
      Date: String,
    },
  ],
});

module.exports = employeSchema;
