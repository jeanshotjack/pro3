
app.post("/signin", function(req, res) {
    console.log("Posting");
    var userInfo = req.body;
    if (!userInfo.username || !userInfo.password) {
      console.log("Fill in all fields");
      res.render("login", { unfilledError: true });
    } else {
      db.account
        .findAll( { username: userInfo.username } )
        .then(function(username) {
          if (username.length > 0) {
            var hash = crypto
              .pbkdf2Sync(
                userInfo.password,
                username[0].salt,
                10000,
                64,
                "sha512"
              )
              .toString("hex");
            if (hash === username[0].password) {
              sessionstorage.setItem("user", username[0]);
              var user = sessionstorage.getItem("user");
              console.log(user);
              res.redirect("/");
            } else {
              res.render("login", { passwordError: true });
            }
          } else {
            console.log("Log in Failed");
            res.render("login", { userError: true });
          }
        });
    }
  });