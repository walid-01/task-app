const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div>
        <h3>{task.text}</h3>
        <p>{task.day}</p>
        <p>Reminder: {task.reminder ? "On" : "Off"}</p>
      </div>
      <button className="close" onClick={() => onDelete(task.id)}>
        X
      </button>
    </div>
  );
};

export default Task;
