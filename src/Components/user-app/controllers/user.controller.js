const UserModel = require("../models/user.model");

const userCtrl = {
  createUser(req, res) {
    //get data from request body
    const data = req.body;
    //save the data to database
    new UserModel(data)
      .save()
      //save result
      .then((result) => {
        res.status(201).send("User created..");
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("could not save the user");
      });
  }, //createUser
  updateUser(req, res) {
    //get id from request parameters
    const { id } = req.params;
    //get data from request body
    const data = req.body;
    //update the user document

    UserModel.findOneAndUpdate({ _id: id }, data, { new: true })
      .then((result) => {
        res.status(200).send("user updated..");
      })
      .catch((err) => {
        console.error(err);
        res.status(404).send("could not updated the user");
      });
    // send result
  }, //updateUser
  deleteUser(req, res) {
    //get id from request parameters
    const { id } = req.params;
    //get data from request body

    UserModel.findOneAndDelete({ _id: id })
      .then((result) => {
        res.status(200).send("user deleted..");
      })
      .catch((err) => {
        console.error(err);
        res.status(404).send("could not deleted the user");
      });
    // send result
  }, //deleteUser

  getOneUser(req, res) {
    //get id from request parameters
    const { id } = req.params;
    //get data from request body

    UserModel.findOne({ _id: id })
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        console.error(err);
        res.status(404).send("The user not available");
      });
    // send result
  }, //getOneUser

  getAllUser(req, res) {
    //get query parameters from request if any

    //http://loacalhost:8080/users?status=1

    const { status } = req.query;
    // fetch users based on the received queries
    const filter = {};
    if (status) filter.status = status;

    UserModel.find(filter)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        console.error(err);
        res.status(404).send("The user not available");
      });
    // send result
  }, //getAllUser
};

module.exports = userCtrl;
