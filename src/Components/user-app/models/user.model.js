const mongoose = require("mongoose");
// require("./db");
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  mobile: { type: String, unique: true, matches: /^[0-9]{10}/ },
  email: String,
  city: String,
  isActive: Boolean,
  address: {
    country: String,
  },
  status: Number,
  createdAt: { type: Date, default: Date.now },
});

//create a model
//const UserModel = mongoose.model("UserSchema,"users")
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
