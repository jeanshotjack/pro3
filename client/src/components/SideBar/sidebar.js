import React from "react";
import ListItem  from "../List/index";
import { Row, Col } from "../Grid";
import SubmitPost from "../SubmitPost";
import PostForm from "./index"


function SideBar(props) {
    return(
    <ListItem>
        <Row className="flex-wrap-reverse">
            <Col size="md-8">

                <div class="sidenav">
                    {/* can we please change this font */}
                    <p className="font-main">
                        Hello! {props.username}
                    </p>
                    
                    <p className="font-main">
                        Pronouns: {props.pronouns}
                    </p>
                    <p className="font-main">
                        User Name: {props.username}
                    </p>
                    <p className="font-main">
                        Social Media: {props.social}
                    </p>
                    <PostForm>
                        <form>
                            <label htmlFor="title">Post Title</label>
                            <input id="title" onChange={props.handleTitle} name="title" type="text" />

                            <label htmlFor="body">Post Body</label>
                            <input id="body" onChange={props.handleBody} name="body" type="text" />

                            {/* <SubmitPost><button>Submit</button></SubmitPost> */}
                           <button onClick={() => this.handleSubmit()}>Submit</button>

                        </form>
                    </PostForm>
                </div>

            </Col>
        </Row>
</ListItem>
    )
}

export default SideBar;