import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div className="App">
      <h1 className="title">Task App</h1>
      <p>Here are your tasks:</p>
      {/* Tasklist */}
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;

export const TaskList = ({ tasks }) => {
  return (
    <ul className="task__list">
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <Task taskText={task.taskText} completed={task.completed} />
          </li>
        );
      })}
    </ul>
  );
};

export const Task = ({ taskText, completed }) => {
  return (
    <div className="task">
      <input className="task__checkbox" type="checkbox" checked={completed} />
      <p className="task__text">{taskText}</p>
    </div>
  );
};

const initialTasks = [
  { id: 1, taskText: "Create a Task component", completed: false },
  { id: 2, taskText: "Create a Task List component", completed: false },
  { id: 3, taskText: "Create an Add Task component", completed: true },
];
