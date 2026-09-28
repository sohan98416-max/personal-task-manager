function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <h1>My Task Manager</h1>
      <p>Organize your day, one task at a time.</p>
      <button type="button" className="secondary" onClick={toggleTheme}>
        {theme === "light" ? "☀️ Light mode" : "🌙 Dark mode"}
      </button>
    </header>
  );
}

export default Header;
