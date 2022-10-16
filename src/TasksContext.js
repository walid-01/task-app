import { createContext, useState, useEffect } from "react";

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  //Fetch Tasks
  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:8000/tasks");
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
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
  };

  //Loading tasks from json
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  //Add Task
  const addTask = async (task) => {
    console.log(task.id);
    const res = await fetch(`http://localhost:8000/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);

    setTasks([...tasks, { ...task }]);
  };

  //Delete Task
  const deleteTask = async (id) => {
    console.log(id);
    await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
    });
    console.log("deleted : " + id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = async (id) => {
    console.log(id);
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
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        fetchTasks,
        toggleReminder,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
