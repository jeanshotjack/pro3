import React from "react";
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
          <button className="primary" onClick={() => 
            {this.postToDB(this.props)}
            }>
            Submit
<<<<<<< HEAD
          </Button>
          </div>
=======
        </button>
        </div>
>>>>>>> e1d3e555be60e379ddb43219383c121075e80b5e
        );
    }
  }

  export default SubmitPost;