import { useState } from "react";
import { initialTasks } from "./data/initialTasks";
import TaskList from "./components/TaskList";
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
