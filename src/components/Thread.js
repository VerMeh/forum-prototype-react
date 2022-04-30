import React from "react";
import "./Thread.css";

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
        <img src="./assets/dislike.svg" alt="dislike" />
        <span className="like ratio">{props.likes / props.dislikes}</span>
      </div>
    </div>
  );
}

export default Thread;
