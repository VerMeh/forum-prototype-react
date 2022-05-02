import React from "react";
import "./Thread.css";

function Comment(props) {
  return (
    <div className="thread">
      <div className="thread--profile">
        <img src="./assets/user.png" alt="user logo" />
        <div className="thread--profile--text">
          <span className="username">{props.commentUsername}</span>
          <span className="karma">{props.commentKarma}</span>
        </div>
      </div>
      <p className="thread--text">{props.commentText}</p>
      <div className="thread--footer">
        <img src="./assets/like.svg" alt="like" onClick={props.handleLike} />
        <img
          src="./assets/dislike.svg"
          alt="dislike"
          onClick={props.handleDislike}
        />
        <span className="like-ratio">
          {props.commentLikes - props.commentDislikes}
        </span>
      </div>
    </div>
  );
}

export default Comment;
