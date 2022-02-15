const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//import schema
const employeSchema = require("../schema/employerSchema");
const Employee = new mongoose.model("Employee", employeSchema);

//handle post route
router.post("/addEmployee", async (req, res) => {
  try {
    newEmployee = Employee(req.body);
    const postedData = await newEmployee.save();
    res.send(postedData);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
