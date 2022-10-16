import { useState, useContext } from "react";
import TasksContext from "../TasksContext";

const AddTask = () => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const { addTask } = useContext(TasksContext);

  const onSubmit = (e) => {
    //Prevents the page from reloading
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    addTask({ text, day, reminder, id: Math.floor(Math.random() * 10000) + 1 });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task: </label>
        <input
          type="text"
          placeholder="Add New Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day and Time: </label>
        <input
          type="text"
          placeholder="Set date and time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-check">
        <label>Reminder: </label>
        <input
          type="checkbox"
          checked={reminder}
          className="checkbox-input"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="task-submit" />
    </form>
  );
};

export default AddTask;
