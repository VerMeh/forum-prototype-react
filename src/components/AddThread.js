import React from "react";
import "./AddThread.css";

function AddThread(props) {
  const [threadText, setThreadText] = React.useState("");
  const characterLimit = 280;

  function handleChange(event) {
    if (characterLimit - event.target.value.length >= 0) {
      setThreadText(event.target.value);
    }
    console.log(threadText);
  }

  function handleSaveClick() {
    if (threadText.trim().length > 0) {
      props.handleAddThread(threadText);
      setThreadText("");
    }
  }
  return (
    <div className="add--thread">
      <textarea
        cols="100"
        rows="10"
        placeholder="Type to add a thread..."
        value={threadText}
        onChange={handleChange}
      ></textarea>
      <div className="thread--footer">
        <small>{characterLimit - threadText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Post
        </button>
      </div>
    </div>
  );
}

export default AddThread;
