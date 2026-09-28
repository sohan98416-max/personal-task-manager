import { useState } from "react";

function TaskItem({ task, toggleTask, editTask, deleteTask, reorderTasks }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(task.title);
  const [isDragOver, setIsDragOver] = useState(false);

  function handleSave(e) {
    e.preventDefault();
    if (draft.trim() === "") return;

    editTask(task.id, draft.trim());
    setIsEditing(false);
  }

  function handleCancel() {
    setDraft(task.title);
    setIsEditing(false);
  }

  function handleDragStart(e) {
    e.dataTransfer.setData("text/plain", task.id);
    e.dataTransfer.effectAllowed = "move";
  }

  function handleDragOver(e) {
    e.preventDefault();
    setIsDragOver(true);
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDragOver(false);
    const draggedId = Number(e.dataTransfer.getData("text/plain"));
    reorderTasks(draggedId, task.id);
  }

  if (isEditing) {
    return (
      <li className="task-item">
        <form className="edit-form" onSubmit={handleSave}>
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            autoFocus
          />
          <button type="submit">Save</button>
          <button type="button" className="secondary" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </li>
    );
  }

  let className = "task-item";
  if (task.completed) className += " completed";
  if (isDragOver) className += " drag-over";

  return (
    <li
      className={className}
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={handleDrop}
    >
      <span className="drag-handle" aria-hidden="true">⠿</span>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        aria-label={`Mark "${task.title}" as complete`}
      />
      <span className="task-title">{task.title}</span>
      <span className={`badge badge-${task.category.toLowerCase()}`}>
        {task.category}
      </span>
      <button type="button" className="secondary" onClick={() => setIsEditing(true)}>
        Edit
      </button>
      <button type="button" className="danger" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;