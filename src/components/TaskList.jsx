import TaskItem from "./TaskItem";

function TaskList({ tasks, hasTasks, toggleTask, editTask, deleteTask, reorderTasks }) {
  if (tasks.length === 0) {
    return (
      <p className="empty-message">
        {hasTasks
          ? "No tasks match your filters."
          : "No tasks yet. Add your first task!"}
      </p>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          editTask={editTask}
          deleteTask={deleteTask}
          reorderTasks={reorderTasks}
          
        />
      ))}
    </ul>
  );
}

export default TaskList;
