// npm i mongoose

const mongoose = require("mongoose");

// const url = "mongodb://localhost:27017/mydb"
const url = "mongodb://127.0.0.1:27017/mydb";

//single connection
mongoose.connect(url); //create the default connection

// access the connection
const conn = mongoose.connection;

conn.on("connected", () => {
  console.log("connected to db");
});

conn.on("error", (err) => {
  console.log("could not connected to db");
});

conn.on("disconnected", () => {
  console.log("Disconnected from db");
});
