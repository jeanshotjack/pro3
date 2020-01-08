const db = require("../Models");
// const sessionstorage = require("sessionstorage");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Post
      .find(req.query)
      .sort({_id: -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function (req, res) {
    const postInfo = req.body
    console.log(postInfo)
    db.Post
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findbyId: function (req, res) {
    db.Post.find(req.params.id)
    .populate("User")
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
}