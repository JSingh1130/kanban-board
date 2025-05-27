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
- **Vite** for blazing-fast dev/build
- **LocalStorage** for data persistence

---

## 🏗️ Architecture & State Management

- State managed using `useState`
- `localStorage` used for task persistence across sessions
- Modal controlled using a simple boolean flag (`showModal`)
- Tasks are dynamically filtered and rendered into column components

> ❓ Why `useState`?
>
> The state is simple, localized, and doesn’t need global sharing — `useState` is fast, readable, and perfect for this use case.

---

## 📦 How to Run Locally

```bash
git clone https://github.com/JSingh1130/kanban-board.git
cd kanban-board
npm install
npm run dev
