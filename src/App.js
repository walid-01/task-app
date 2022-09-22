import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState(null);
  // const [tasks, setTasks] = useState([
  //   {
  //     id: 0,
  //     text: "This is the first task",
  //     day: "Feb 5th at 2:30pm",
  //     reminder: true,
  //   },
  //   {
  //     id: 1,
  //     text: "Second task do it",
  //     day: "Feb 7th at 8:00am",
  //     reminder: true,
  //   },
  //   {
  //     id: 2,
  //     text: "This task is the third task",
  //     day: "Feb 6th at 6:00pm",
  //     reminder: false,
  //   },
  // ]);

  //Loading tasks from json
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  //Fetch Tasks
  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:8000/tasks");
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }

    // fetch("http://localhost:8000/tasks")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setTasks(data);
    //   });
  };

  //Fetch a Single Task
  const fetchTask = async (id) => {
    try {
      const res = await fetch(`http://localhost:8000/tasks/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }

    // fetch("http://localhost:8000/tasks")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setTasks(data);
    //   });
  };

  //Add Task
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:8000/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);

    // setTasks([
    //   ...tasks,
    //   {
    //     id: Math.floor(Math.random() * 10000) + 1,
    //     ...task,
    //   },
    // ]);
  };

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
    });
    console.log("deleted : " + id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );

    console.log("toggled : " + id);
  };

  return (
    <div className="container">
      <Header toggleAdd={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks && (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      )}
    </div>
  );
}

export default App;
