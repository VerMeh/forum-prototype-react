import React from "react";
import Thread from "./Thread";

function ThreadsList(props) {
  return (
    <div className="thread--list">
      {props.threads.map((thread) => (
        <Thread
          id={thread.id}
          key={thread.id}
          username={thread.username}
          karma={thread.karma}
          text={thread.text}
          likes={thread.likes}
          dislikes={thread.dislikes}
          handleLike={props.clickHandler(props.id)}
        />
      ))}
    </div>
  );
}

export default ThreadsList;
