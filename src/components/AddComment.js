import React from "react";

function AddComment() {
  const [commentText, setCommentText] = React.useState("");
  const characterLimit = 280;

  function handleCommentChange(event) {
    if (characterLimit - event.target.value.length >= 0) {
      setCommentText(event.target.value);
    }
  }

  function handleCommentClick() {
    if (commentText.trim().length > 0) {
      props.handleAddComment(commentText);
      setCommentText("");
    }
  }
  return <div>AddComment</div>;
}

export default AddComment;
