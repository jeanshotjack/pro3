const db = require("../Models");
// const sessionstorage = require("sessionstorage");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Post
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // create: function (req, res) {
  //   const userInfo = req.body
  //   console.log(userInfo)
  //   db.Post
  //     .findOne({ username: userInfo.username }, (err, existingUser) => {
  //       if (err) {
  //         console.log("Error in post: " + err)
  //       }
  //       else if (existingUser) {
  //         console.log("username exists")
  //       } else {
  //         db.Post
  //           .create(req.body)
  //           .then(dbModel => res.json(dbModel))
  //           .catch(err => res.status(422).json(err));
  //       }
  //     })
  // },
}