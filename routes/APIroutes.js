const router = require("express").Router();
const apiController = require("../controlers/APIcontroler");
const postsControler = require("../controlers/postsControler")

router.route("/api/users/")
  .get(apiController.findAll)
  .post(apiController.create)
  // .post(apiController.saveUser)

router.route("/api/login")
  .post(apiController.loginUser)
  // .get(apiController.sessions)
  // .get(apiController.findAll)
  // .post(apiController.loginUser)
  module.exports = router;
// .get(apiController.findAll)
// .post(apiController.loginUser)

router.route("/api/user")
.get(apiController.findOne)

router.route("/api/posts")
  .get(postsControler.findAll)
  .get(postsControler.findbyId)
  .post(postsControler.create)

router.route("/logout")
.get(apiController.logout)

module.exports = router;

