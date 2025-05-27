# 🧩 Mini Kanban Board - Frontend Engineer Trainee Assignment

This is a **Mini Kanban Board** built using **React + TypeScript + Tailwind CSS** as part of the take-home assignment for the **Frontend Engineer Trainee** role at **Vectrum Technologies**.

---

## 🚀 Features

- 📝 Add new tasks via a modal
- 📦 Organize tasks into 3 columns: `Backlog`, `In Progress`, `Done`
- 🔁 Move tasks between columns using ← → buttons
- 💾 Tasks are saved in `localStorage` — they persist after refresh
- 📱 Fully responsive (mobile-first design)
- 🎨 Utility-first styling with Tailwind CSS (no UI libraries)
- ♿️ Basic accessibility with ARIA roles and keyboard navigation

---

## 🧠 Tech Stack

- **React** (Functional components only)
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **Vite** for fast development and build
- **LocalStorage** for persistence

---

## 🏗️ Architecture & State Management

- Tasks are managed with `useState`
- Data is persisted in the browser using `localStorage`
- Modal state is managed with a boolean (`showModal`)
- Columns are rendered dynamically based on task `status`

> ❓ Why `useState`?
>
> The app has simple, localized state and doesn't require complex state management. `useState` keeps the code clean and fast.

---

## 📦 How to Run Locally

```bash
git clone https://github.com/JSingh1130/kanban-board.git
cd kanban-board
npm install
npm run dev
