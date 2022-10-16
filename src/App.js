import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useContext, useState } from "react";
import TasksContext, { TasksProvider } from "./TasksContext";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const { tasks } = useContext(TasksContext);

  return (
    <div className="container">
      <TasksProvider>
        <Header toggleAdd={() => setShowAddTask(!showAddTask)} />
        {showAddTask && <AddTask />}
        {tasks && <Tasks />}
      </TasksProvider>
    </div>
  );
}

export default App;
