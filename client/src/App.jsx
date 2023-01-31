import { useState } from "react";
import { initialTasks } from "./data/initialTasks";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleChangeTask(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  return (
    <div className="App">
      <h1 className="title">Task App</h1>
      <p>Here are your tasks:</p>

      <TaskList tasks={tasks} onChangeTask={handleChangeTask} />
    </div>
  );
}

export default App;

export const TaskList = ({ tasks, onChangeTask }) => {
  return (
    <ul className="task__list">
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <Task task={task} onChange={onChangeTask} />
          </li>
        );
      })}
    </ul>
  );
};

export const Task = ({ task, onChange }) => {
  return (
    <div className="task">
      <input
        className="task__checkbox"
        type="checkbox"
        checked={task.completed}
        onChange={(e) => {
          onChange({
            ...task,
            completed: e.target.checked,
          });
        }}
      />
      <p className="task__text">{task.taskText}</p>
    </div>
  );
};
