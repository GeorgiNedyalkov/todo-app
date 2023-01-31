import { useState } from "react";
import { initialTasks } from "./data/initialTasks";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import "./App.css";

let nextId = 4;

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        taskText: text,
        completed: false,
      },
    ]);
  }

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

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return (
    <div className="App">
      <h1 className="title">Task App</h1>
      <p className="description">Here are your tasks:</p>

      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
