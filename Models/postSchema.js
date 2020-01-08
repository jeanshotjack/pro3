var mongoose = require("mongoose");
const { mongooseAssociation } = require('mongoose-association');
mongooseAssociation(mongoose);
var Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
      type: String,
      trim: true,
      // required: "title is required"
    },
  body: {
    type: String,
    trim: true,
    // required: "body is required",
    // validate: [
    //   function(input) {
    //     return input.length <= 200;
    //   },
    //   "Body can't be longer than 200 characters"
    // ]
  },
  postCreated: {
    type: Date,
    default: Date.now
  },
  user: {
    type: String
  }
//   user: [
//     {
//        type: Schema.Types.ObjectId,
//        ref: 'User'
//     }
//  ]
});
 
// PostSchema.belongsTo("User");

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;