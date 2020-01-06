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
  userCreated: {
    type: Date,
    default: Date.now
  }
});

UserSchema.hasMany("Post");
var User = mongoose.model("User", UserSchema);
module.exports = User;