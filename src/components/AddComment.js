import React from "react";

function AddComment(props) {
  const [commentText, setCommentText] = React.useState("");
  const characterLimit = 280;

  function handleCommentChange(event) {
    if (characterLimit - event.target.value.length >= 0) {
      setCommentText(event.target.value);
    }
  }

  function handleCommentClick() {
    if (commentText.trim().length > 0) {
      props.handleAddComment(props.id, commentText);
      setCommentText("");
    }
  }
  return (
    <div className="add--comment">
      <textarea
        cols="100"
        rows="10"
        placeholder="Type to add a comment..."
        value={commentText}
        onChange={handleCommentChange}
      ></textarea>
      <div className="comment--footer">
        <small>{characterLimit - commentText.length} Remaining</small>
        <button className="save" onClick={handleCommentClick}>
          Post
        </button>
      </div>
    </div>
  );
}

export default AddComment;
