import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";

function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  function addTask(title, category) {
    const newTask = { id: Date.now(), title, category, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function editTask(id, title) {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, title } : task)));
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function reorderTasks(draggedId, targetId) {
    const from = tasks.findIndex((task) => task.id === draggedId);
    const to = tasks.findIndex((task) => task.id === targetId);
    if (from === -1 || to === -1 || from === to) return;

    const updated = [...tasks];
    const [moved] = updated.splice(from, 1);
    updated.splice(to, 0, moved);
    setTasks(updated);
  }

  const completedCount = tasks.filter((task) => task.completed).length;
  const activeCount = tasks.length - completedCount;

  const visibleTasks = tasks.filter((task) => {
    const statusMatch =
      statusFilter === "all" ||
      (statusFilter === "active" ? !task.completed : task.completed);
    const categoryMatch =
      categoryFilter === "All" || task.category === categoryFilter;
    return statusMatch && categoryMatch;
  });

  return (
    <div className="app">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="container">
        <TaskForm addTask={addTask} />
        <FilterBar
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          activeCount={activeCount}
          completedCount={completedCount}
        />
        <TaskList
          tasks={visibleTasks}
          hasTasks={tasks.length > 0}
          toggleTask={toggleTask}
          editTask={editTask}
          deleteTask={deleteTask}
          reorderTasks={reorderTasks}
        />
      </main>
    </div>
  );
}

export default App;