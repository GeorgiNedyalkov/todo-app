import Task from "./Task";

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <ul className="task__list">
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
