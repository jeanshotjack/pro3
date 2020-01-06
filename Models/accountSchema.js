var mongoose = require("mongoose");
const { mongooseAssociation } = require('mongoose-association');
mongooseAssociation(mongoose);
var Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: "Username is Required"
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
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
  }
});

UserSchema.hasMany("Post");
var User = mongoose.model("User", UserSchema);
module.exports = User;