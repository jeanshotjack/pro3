import axios from "axios";

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
  }
};
