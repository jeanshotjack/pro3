import axios from "axios";
// import db from "../../Models/accountSchema"
import crypto from "crypto";
export default {
  
  // Gets all books
  getPosts: function() {
    return axios.get("/api/posts");
  },
  // Gets the book with the given id
  getPost: function(id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the book with the given id
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a book to the database
  savePost: function(post) {
    return axios.post("/api/posts", post);
  },
  getUsers: function () {
    return axios.get("/api/users");
  },
  getUser: function(id) {
    return axios.get("/api/users" + id);
  },
  deleteUser: function(id) {
    return axios.delete("/api/users" + id);
  },
  saveUser: function(user) {
    return axios.post("/api/users", user);
  },
//   handleVer: function(event) {
//     event.preventDefault();
//     console.log("Click")
//     if (!this.state.username ||
//         !this.state.password ||
//         !this.state.confirm ||
//         !this.state.email){
//             console.log("Please Fill in all things")
//         }
//         else{
//     if (this.state.confirm != this.state.password){
//         console.log("Passwords do not match")
//     }
//     else{
//     if (db.Accounts.get({username:this.state.username}) != 0){
//         console.log("user already exists")
//     }
//     else {
//         console.log("encrypting...");
//         var salt = crypto.randomBytes(64).toString("hex");
//         var hash = crypto
//           .pbkdf2Sync(this.state.password, salt, 10000, 64, "sha512")
//           .toString("hex");
//         db.Accounts.save( {username: this.state.username, password: hash, salt: salt, email:this.state.email}).then(console.log("account created"))
//     }
// }
// }
// }
};

