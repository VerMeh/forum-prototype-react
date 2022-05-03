import React from "react";

function AddComment(props) {
  const [commentText, setCommentText] = React.useState("");
  const characterLimit = 280;

  function handleCommentChange(event) {
    if (characterLimit - event.target.value.length >= 0) {
      setCommentText(event.target.value);
    }
    // console.log(commentText);
  }

  function handleCommentClick() {
    if (commentText.trim().length > 0) {
      console.log(props.id);
      props.handleAddComment(props.id, commentText);
      console.log({ commentText });
      setCommentText("");
    }
  }
  return (
    <div className="add--comment" style={{ marginLeft: 67 }}>
      <textarea
        cols="90"
        rows="10"
        placeholder="Type to add a comment..."
        value={commentText}
        onChange={handleCommentChange}
      ></textarea>
      <div className="comment--footer">
        <small>{characterLimit - commentText.length} Remaining</small>
        <button
          className="save"
          onClick={() => {
            handleCommentClick(props.id, commentText);
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default AddComment;
