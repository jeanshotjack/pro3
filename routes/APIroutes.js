const router = require("express").Router();
const apiController = require("../controlers/APIcontroler");

router.route("/api/users")
  .get(apiController.findAll)
  .post(apiController.create)
  .post(apiController.saveUser)
  .get(apiController.test);
  module.exports = router;
