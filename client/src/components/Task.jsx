import { useState } from "react";
import "../App.css";

const Task = ({ task, onChange, onDelete }) => {
  const [isEditting, setIsEditing] = useState(false);
  let taskContent;

  if (isEditting) {
    taskContent = (
      <>
        <input
          value={task.taskText}
          onChange={(e) => {
            onChange({
              ...task,
              taskText: e.target.value,
            });
          }}
        />
        <button className="btn" onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.taskText}
        <button className="btn edit" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  return (
    <div className="task">
      <input
        className={
          task.completed === true ? "task__checkbox" : "task__checkbox-checked"
        }
        type="checkbox"
        checked={task.completed}
        onChange={(e) => {
          onChange({
            ...task,
            completed: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button className="btn delete" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default Task;
