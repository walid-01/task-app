import React from "react";

const Task = ({ task }) => {
  return (
    <>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <p>Reminder: {task.reminder ? "On" : "Off"}</p>
      {/* <button onClick={() => toggleReminder(task)}>test</button> */}
    </>
  );
};

export default Task;
