import Task from "./Task";

const TaskList = ({ tasks, onChangeTask }) => {
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

export default TaskList;
