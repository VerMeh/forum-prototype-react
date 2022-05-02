import React from "react";
import "./Thread.css";
import Comment from "./Comment";
import AddComment from "./AddComment";

function Thread(props) {
  return (
    <div className="thread">
      <div className="thread--profile">
        <img src="./assets/user.png" alt="user logo" />
        <div className="thread--profile--text">
          <span className="username">{props.username}</span>
          <span className="karma">{props.karma}</span>
        </div>
      </div>
      <p className="thread--text">{props.text}</p>
      <div className="thread--footer">
        <img src="./assets/like.svg" alt="like" onClick={props.handleLike} />
        <img
          src="./assets/dislike.svg"
          alt="dislike"
          onClick={props.handleDislike}
        />
        <span className="total--likes">{props.likes - props.dislikes}</span>
      </div>
      {console.log(props.id)}
      {props.comments.map((comment) =>
        comment.parentID === props.id ? (
          <Comment
            key={comment.id}
            commentUsername={comment.commentUsername}
            commentKarma={comment.commentKarma}
            commentText={comment.commentText}
            commentLikes={comment.commentLikes}
            commentDislikes={comment.commentDislikes}
            handleLike={() => props.handleCommentLike(comment.id)}
            handleDislike={() => props.handleCommentDislike(comment.id)}
          />
        ) : (
          ""
        )
      )}

      <AddComment
        threadId={props.id}
        handleAddComment={props.handleAddComment}
      />
    </div>
  );
}

export default Thread;
