import React from "react";
import { Container, Row, Col } from "../Grid";


// BookList renders a bootstrap list item
export function PostsList({ children }) {
  return (
    <ul className="list-group">{children}</ul>
  );
}

export class PostsListItem extends React.Component {

  render() {
    console.log(this.props)
      ; return (
        <div>
          <li>
            <Container >
              <Row>

                <Col size="xs-8 sm-9">
                  <h3>{this.props.title}<span><h5><a target="_blank" href={this.props.link}>{this.props.username}</a></h5></span></h3>
                  <p>
                    {this.props.body}
                  </p>
                </Col>
              </Row>
            </Container>
          </li>
        </div>
      );
  }
}