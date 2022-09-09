import { Component } from "react";
import { Spinner } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";


class CommentsArea extends Component {
  render() {
    return (
      <>
        {this.props.asin ? (
          <div className="stickyComments">
            <AddComment comment={this.props.asin} />
            <CommentsList commentsList={this.props.asin} />
          </div>
        ) : (
          <div className="stickyComments">
            
            <h2>Clicca sul pulsante <code>Commenti</code> di un libro a tua scelta</h2>

            <Spinner animation="grow" variant="warning" />
          </div>
        )}
      </>
    );
  }
}

export default CommentsArea;
