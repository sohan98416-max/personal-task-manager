import { useState } from "react";
import { CATEGORIES } from "../constants";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() === "") return;

    addTask(title.trim(), category);
    setTitle("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        aria-label="Task category"
      >
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <button type="submit">+ Add Task</button>
    </form>
  );
}

export default TaskForm;
