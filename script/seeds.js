const mongoose = require("mongoose");
const db = require("../Models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/posts"
);

// Creating a test data in postslist collection
const postSeed = [
  {
    User: "Suzanne Collins",

    body: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",

    title: "The Hunger Games",
  
    postCreated: new Date(Date.now())
  },
];

db.Post
  .remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


// module.exports=function(app){
//   app.get("/api/posts", function (req,res) {
//     console.log("apicall")
//     post.find({}).then(function (data) {
//       console.log(data)
//       res.json(data)
//     })
//   })
// }

