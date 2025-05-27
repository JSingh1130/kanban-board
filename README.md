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
- ♿️ Basic accessibility (keyboard + ARIA-friendly layout)

---

## 🧠 Tech Stack

- **React** (Functional components only)
- **TypeScript** for type safety
- **Tailwind CSS** for fast UI styling
- **Vite** for fast dev and build
- **LocalStorage** for persistence

---

## 🏗️ Architecture & State Management

- Tasks are stored in a local `useState` hook
- Task data is persisted using `localStorage`
- Modal component is managed with boolean `showModal` state
- Columns are dynamically rendered based on task status

> ❓ Why `useState`?
>
> Since this app has simple, local UI state, `useState` is ideal — lightweight, readable, and performant.

---

## 📦 How to Run Locally

```bash
git clone https://github.com/your-username/kanban-board.git
cd kanban-board
npm install
npm run dev
