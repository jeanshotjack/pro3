const db = require("../Models");
const session = require('express-session')
const crypto = require('crypto');

// Defining methods for the booksController
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
    db.User
      .findOne({ username: userInfo.username }, (err, existingUser) => {
        if (err) {
          console.log("Error in post: " + err)
        }
        else if (existingUser) {
          console.log("username exists")
        } else {
          db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        }
      })
  },
  loginUser: function (req, res) {
    const userInfo = req.body
    console.log(userInfo)
    console.log("got to Login User")
    db.User
      .findOne({ username: userInfo.username } && { password: userInfo.password }, (err, existingUser) => {
        if (err){
          console.log("error in get" + err)
        }
        else if (existingUser) {
          console.log(userInfo)
          req.session = existingUser
          console.log("user exists so log in")
        }
        else{
          console.log("no user exists")
        }
        
      })
  },

      // if (req.session.views) {
      //   req.session.views++
      //   res.setHeader('Content-Type', 'text/html')
      //   res.write('<p>views: ' + req.session.views + '</p>')
      //   res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
      //   res.end()
      // } else {
      //   req.session.views = 1
      //   res.end('welcome to the session demo. refresh!')
      // }
  }



// app.post("/api/signin", function(req, res) {
//     console.log("Posting");
//     var userInfo = req.body;
//     if (!userInfo.username || !userInfo.password) {
//       console.log("Fill in all fields")
//     } else {
//       db.User
//         .findAll( { username: userInfo.username } )
//         .then(function(username) {
//           if (username.length > 0) {
//             var hash = crypto
//               .pbkdf2Sync(
//                 userInfo.password,
//                 username[0].salt,
//                 10000,
//                 64,
//                 "sha512"
//               )
//               .toString("hex");
//             if (hash === username[0].password) {
//               sessionstorage.setItem("user", username[0]);
//               var user = sessionstorage.getItem("user");
//               console.log(user);
//             } else {
//             }
//           } else {
//             console.log("Log in Failed");
//           }
//        