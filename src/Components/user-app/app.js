// const express = require("express");
// const app = express();

// const bodyParser = require("body-parser");
// const cors = require("cors"); //npm i core

// require("../user-app/models/db");

// app.use(cors());
// app.use(bodyParser.json());

// app.use("/users", require("../user-app/routes/user.route"));

// app.listen(8080, () => {
//   console.log("server is listening on port 8080");
// });

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors"); //npm i core
require("dotenv").config();
const port = process.env.Port || 4000;
const Url = process.env.DB_URL;
// require("../user-app/models/db");
// const url = "mongodb://127.0.0.1:27017/mydb";
mongoose
  .connect(Url, {
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(bodyParser.json());

app.use("/users", require("../user-app/routes/user.route"));

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
