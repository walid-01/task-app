import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "This is the first task",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Second task do it",
      day: "Feb 7th at 8:00am",
      reminder: true,
    },
    {
      id: 3,
      text: "This task is the third task",
      day: "Feb 6th at 6:00pm",
      reminder: false,
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
