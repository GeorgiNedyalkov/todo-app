import { useState } from "react";

function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  return (
    <>
      <input
        className="addTask"
        type="text"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="btn"
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
}

export default AddTask;
