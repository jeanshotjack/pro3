const router = require("express").Router();
const apiController = require("../controlers/APIcontroler");

router.route("/api/users/")
  .get(apiController.findAll)
  .post(apiController.create)
  // .post(apiController.saveUser)
  router.route("/api/login")
  .get(apiController.login)
  module.exports = router;
