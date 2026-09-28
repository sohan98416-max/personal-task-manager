# My Task Manager

A personal task manager built with React and Vite. Add tasks, sort them into categories, tick them off, and come back later: everything is saved in your browser.

**Live demo:** _add your Vercel/Netlify link here_

## Features

- Add, edit, delete, and mark tasks as complete
- Categories: Work, Personal, Urgent (colour-coded badges)
- Filter by status (All / Active / Completed) and by category
- Live count of remaining and completed tasks
- Tasks persist in `localStorage` (survive a page refresh)
- Responsive layout for desktop and mobile

## Technologies

- React 19 (functional components and hooks: `useState`, `useEffect`, custom `useLocalStorage` hook)
- Vite
- Plain CSS

## Setup

```bash
git clone <your-repo-url>
cd personal-task-manager
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

## Project structure

```
src/
  components/   Header, TaskForm, FilterBar, TaskList, TaskItem
  hooks/        useLocalStorage.js
  constants.js  category and filter lists
  App.jsx       holds the tasks state and all handlers
```

## Screenshots

_Add 2-3 screenshots here (empty state, tasks with categories, filtered view / mobile)._

## Known limitations

- No due dates, drag-and-drop, or dark mode (stretch goals not implemented)
- Categories are fixed (cannot create custom ones)
