#My Task Manager

A personal task manager built with React and Vite. Add tasks, sort them into categories, tick them off, reorder them by dragging, and come back later: everything is saved in your browser.

**Live demo:** _add your Vercel link here after deploying_

##Features

- Add, edit, delete, and mark tasks as complete
- Categories: Work, Personal, Urgent (colour-coded badges)
- Filter by status (All / Active / Completed) and by category
- Live count of remaining and completed tasks
- Tasks persist in `localStorage` (survive a page refresh)
- Drag-and-drop reordering of tasks (stretch goal)
- Dark/light theme toggle, remembered between visits (stretch goal)
- Responsive layout for desktop and mobile

#Technologies

- React 19 (functional components and hooks: `useState`, `useEffect`, custom `useLocalStorage` hook)
- Vite
- Plain CSS (CSS variables for theming)
- HTML5 drag-and-drop API

##Setup

```bash
git clone https://github.com/sohan98416-max/personal-task-manager.git
cd personal-task-manager
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

##Project structure

```
src/
  components/   Header, TaskForm, FilterBar, TaskList, TaskItem
  hooks/        useLocalStorage.js
  constants.js  category and filter lists
  App.jsx       holds the tasks and theme state and all handlers
```

##Screenshots

![Light mode](screenshots/light-mode.png)
![Dark mode](screenshots/dark-mode.png)
![Mobile view](screenshots/mobile.png)

##Known limitations

- Drag-and-drop works with a mouse on desktop but not with touch on phones
- No due dates or overdue indicators (stretch goal not implemented)
- Categories are fixed (cannot create custom ones)