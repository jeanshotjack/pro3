import React from "react";
import Button from "../Button";
import axios from "axios";

class SubmitPost extends React.Component{
 
    postToDB = (post) => {
        var dbPost = {
          title: post.title,
          body: post.body,
          postCreated: post.postCreated,
          user: post.User
        }
    
        axios.post("/api/posts", dbPost)
        .catch(err => console.log(err))
      }

    render() {
        return (
          <div>
          <Button type="primary" onClick={() => 
            {this.postToDB(this.props)}
            }>
            Submit
          </Button>
          </div>
        );
    }
  }

  export default SubmitPost;