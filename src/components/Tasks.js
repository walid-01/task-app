import Task from "./Task";

const Tasks = ({ tasks }) => {
  return tasks.map((task) => (
    <div className="task reminder" key={task.id}>
      <Task task={task} />
    </div>
  ));
};

export default Tasks;
