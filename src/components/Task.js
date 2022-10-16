import TasksContext from "../TasksContext";
import { useContext } from "react";

const Task = ({ task }) => {
  const { deleteTask, toggleReminder } = useContext(TasksContext);
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => toggleReminder(task.id)}
    >
      <div>
        <h3>{task.text}</h3>
        <p>{task.day}</p>
        <p>Reminder: {task.reminder ? "On" : "Off"}</p>
      </div>
      <button className="close" onClick={() => deleteTask(task.id)}>
        X
      </button>
    </div>
  );
};

export default Task;
