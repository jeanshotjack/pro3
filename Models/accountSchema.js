var mongoose = require("mongoose");
const { mongooseAssociation } = require('mongoose-association');
mongooseAssociation(mongoose);
var Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
  },
  pronouns: {
    type: String
  },
  DOB: {
    type: Date,
  },
  userCreated: {
    type: Date,
    default: Date.now
  },
  social: {
    type: String
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post"
    }
  ]
});

// UserSchema.hasMany("Post");
var User = mongoose.model("User", UserSchema);
module.exports = User;