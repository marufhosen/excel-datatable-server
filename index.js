const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const mongoose = require("mongoose");

//import route
const employeeHandler = require("./route/employerRoute");

//middlewere
app.use(cors());
app.use(express.json());
require("dotenv").config();

//database connettion
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

// employer route
app.use("/employer", employeeHandler);

//test route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//listening port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
