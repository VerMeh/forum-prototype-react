import "./Thread.css";
import Comment from "./Comment";
import AddComment from "./AddComment";
import { nanoid } from "nanoid";
import { useState } from "react";

function Thread(props) {
  const [comments, setComments] = useState([
    {
      id: nanoid(),
      parentID: 1,
      commentUsername: "Vivek Anand",
      commentKarma: 42,
      commentText:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis hic cumque reprehenderit magni maiores consequatur commodi eaque nostrum asperiores voluptas. Minus aspernatur odio nobis maxime veniam. Natus ratione veniam possimus",
      commentLikes: 3,
      commentDislikes: 2,
    },
    {
      id: nanoid(),
      parentID: 1,
      commentUsername: "Shagufta Iqbal",
      commentKarma: 21.2,
      commentText:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis hic cumque reprehenderit magni maiores consequatur commodi eaque nostrum asperiores voluptas. Minus aspernatur odio nobis maxime veniam. Natus ratione veniam possimus",
      commentLikes: 12,
      commentDislikes: 2,
    },
    {
      id: nanoid(),
      parentID: 3,
      commentUsername: "Mehul Verma",
      commentKarma: 12.1,
      commentText:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis hic cumque reprehenderit magni maiores consequatur commodi eaque nostrum asperiores voluptas. Minus aspernatur odio nobis maxime veniam. Natus ratione veniam possimus",
      commentLikes: 12,
      commentDislikes: 0,
    },
    {
      id: nanoid(),
      parentID: 3,
      commentUsername: "Sarthak Malhotra",
      commentKarma: 0.21,
      commentText:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis hic cumque reprehenderit magni maiores consequatur commodi eaque nostrum asperiores voluptas. Minus aspernatur odio nobis maxime veniam. Natus ratione veniam possimus",
      commentLikes: 2,
      commentDislikes: 5,
    },
  ]);
  function handleCommentLike(id) {
    setComments((prevComment) => {
      return prevComment.map((comment) => {
        return comment.id === id
          ? { ...comment, commentLikes: comment.commentLikes + 1 }
          : comment;
      });
    });
  }
  function handleCommentDislike(id) {
    setComments((prevComment) => {
      return prevComment.map((comment) => {
        return comment.id === id
          ? { ...comment, commentLikes: comment.commentLikes - 1 }
          : comment;
      });
    });
  }
  function handleAddComment(parentID, text = "no text was passed") {
    console.log(text);
    const newComment = {
      id: nanoid(),
      parentID: parentID,
      commentUsername: props.generateName(),
      commentKarma: Math.floor(Math.random() * 100),
      commentText: text,
      commentLikes: 0,
      commentDislikes: 0,
    };

    const newComments = [...comments, newComment];
    setComments(newComments);
  }
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
      {/* {console.log(props.id)} */}

      {comments.map((comment) =>
        comment.parentID === props.id ? (
          <Comment
            key={comment.id}
            commentUsername={comment.commentUsername}
            commentKarma={comment.commentKarma}
            commentText={comment.commentText}
            commentLikes={comment.commentLikes}
            commentDislikes={comment.commentDislikes}
            handleLike={() => handleCommentLike(comment.id)}
            handleDislike={() => handleCommentDislike(comment.id)}
          />
        ) : (
          ""
        )
      )}

      <AddComment handleAddComment={handleAddComment} id={props.id} />
    </div>
  );
}

export default Thread;
