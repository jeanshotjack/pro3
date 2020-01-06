const db = require("../Models/accountSchema");

// Defining methods for the booksController
module.exports = {
findAll: function(req, res) {
    db.User
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      }, 
create: function(req, res) {
    db.User
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      },
saveUser: function(req,res){
  console.log("check")
  db.User
  .insertOne({
  "password" : req.body,
  "username" : req.body,
  "email" : req.body,
  "gender" : req.body
})
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
},
verify: function(req,res){
  db.User
  .find(req.query)
  .then(console.log(req.query))
},
test: function(req,res){
  console.log(req.body)
}
// app.post("/api/users", function(req, res) {
//   console.log("Posting");
//   var userInfo = req.body;
//   if (!userInfo.username || !userInfo.password) {
//     console.log("Fill in all fields")
//   } 
// }

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
//         });
//     }
//   });
}