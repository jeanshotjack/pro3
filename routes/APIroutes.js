const router = require("express").Router();
const apiController = require("../controlers/APIcontroler");

router.route("/api/users/")
  .get(apiController.findAll)
  .post(apiController.create)
  
  // .post(apiController.saveUser)

  router.route("/api/login")
  .post(apiController.loginUser)
  .get(apiController.session)
  // .get(apiController.findAll)
  // .post(apiController.loginUser)
  module.exports = router;