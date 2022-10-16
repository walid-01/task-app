import Task from "./Task";
import TasksContext from "../TasksContext";
import { useContext } from "react";

const Tasks = () => {
  const { tasks } = useContext(TasksContext);

  return tasks.map((task) => <Task task={task} key={task.id} />);
};

export default Tasks;
