const db = require("../Models");
const crypto = require('crypto');
const regex = RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    const userInfo = req.body
    console.log(userInfo)
    if (
      !userInfo.username ||
      !userInfo.password ||
      !userInfo.email ||
      !userInfo.pronouns ||
      !userInfo.DOB
      ) 
      {
      let errorObject = { error: true, errorMsg: "Please fill in all fields" };
      return res.status(400).json(errorObject)
    }
    else {
      if (userInfo.confirm != userInfo.password) {
          console.log(userInfo.confirm)
          console.log(userInfo.password)
          let errorObject = { error: true, errorMsg: "Passwords do not match" };
          return res.status(400).json(errorObject)
      }

      else {
        if (!regex.test(userInfo.password)) {
          let errorObject = { error: true, errorMsg: "Minimum eight characters, at least one letter and one number"};
          return res.status(400).json(errorObject)
        }
        else {
          db.User
            .findOne({ username: userInfo.username }, (err, existingUser) => {
              if (err) {
                console.log("Error in post: " + err)
              }
              else if (existingUser) {
                console.log("username already exists")
                let errorObject = { error: true, errorMsg: "Username already exists" };
                return res.status(400).json(errorObject)
              } else {
                var salt = crypto
                  .randomBytes(64).toString("hex");
                var hash = crypto
                  .pbkdf2Sync(userInfo.password, salt, 10000, 64, "sha512")
                  .toString("hex");
                console.log(hash)
                db.User.
                  create({
                    username: userInfo.username,
                    password: hash,
                    email: userInfo.email,
                    pronouns: userInfo.pronouns,
                    social: userInfo.social,
                    DOB: userInfo.DOB,
                    salt: salt
                  })
                  .then(dbModel => res.json(dbModel))
                  .catch(err => res.status(422).json(err));
              }
            })
        }
      }
    }
  },
  loginUser: function (req, res) {
    const userInfo = req.body
    console.log(userInfo)
    console.log("got to Login User")
    db.User
      .findOne({ username: userInfo.username }, (err, existingUser) => {
        if (err) {
          console.log("error in get" + err)
        }
        else if (existingUser) {
          console.log("this is existing user", existingUser)
          console.log(req.session)
          console.log(existingUser.salt)
          var hash = crypto
            .pbkdf2Sync(
              userInfo.password,
              existingUser.salt,
              10000,
              64,
              "sha512"
            )
            .toString("hex")

          if (hash === existingUser.password) {
            req.session.user = existingUser
            console.log("user exists so log in")
            res.send(existingUser)

          }
        }
      })
  },
  findOne: function (req, res) {
    if (req.session) {
      res.json({ user: req.session.user })
    }
    else {
      res.json({ user: null })
    }
  },
  logout: function (req, res) {
    req.session.destroy()
    console.log("logged out")
    res.end()
  }
}