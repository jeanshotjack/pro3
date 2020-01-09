import axios from "axios";
// import db from "../../Models/accountSchema"
export default {
  
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/posts");
  },
  getPost: function(id) {
    return axios.get("/api/posts/" + id);
  },
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  savePost: function(post) {
    return axios.post("/api/posts", post);
  },
  getUser: function(id) {
    return axios.get("/api/user");
  },
  deleteUser: function(id) {
    return axios.delete("/api/users" + id);
  },
  create: function(user) {
    return axios.post("/api/users", user);
  },
  loginUser: function(user){
    return axios.post("/api/login", user)
  },
  sessions: function(user){
    return axios.get("/", user)
  },
  logout: function(user){
    return axios.get("/logout", user)
  }
  }
