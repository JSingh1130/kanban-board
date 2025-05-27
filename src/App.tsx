import { useState, useEffect } from "react"

type TaskStatus = "Backlog" | "In Progress" | "Done"

type Task = {
  id: number
  title: string
  status: TaskStatus
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks")
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, title: "Setup project", status: "Backlog" },
          { id: 2, title: "Write components", status: "In Progress" },
          { id: 3, title: "Test Kanban board", status: "Done" },
        ]
  })

  const [showModal, setShowModal] = useState(false)
  const statuses: TaskStatus[] = ["Backlog", "In Progress", "Done"]

  const addTask = (title: string, status: TaskStatus) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      status,
    }
    setTasks((prev) => [...prev, newTask])
  }

  const moveTask = (id: number, direction: "left" | "right") => {
    const order: TaskStatus[] = ["Backlog", "In Progress", "Done"]
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          const currentIndex = order.indexOf(task.status)
          const newIndex =
            direction === "left" ? currentIndex - 1 : currentIndex + 1
          if (newIndex >= 0 && newIndex < order.length) {
            return { ...task, status: order[newIndex] }
          }
        }
        return task
      })
    )
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">🧩 Kanban Board</h1>

      <div className="flex justify-end mb-6">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
          onClick={() => setShowModal(true)}
        >
          + Add Task
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statuses.map((status) => (
          <div
            key={status}
            className="bg-gray-50 rounded-xl shadow-md p-4 min-h-[300px] border"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">{status}</h2>
            <div className="space-y-4">
              {tasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <div
                    key={task.id}
                    tabIndex={0}
                    className="bg-white border rounded-lg p-4 shadow-sm space-y-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    <div className="text-gray-800 font-medium">{task.title}</div>
                    <div className="flex justify-between">
                      <button
                        className="text-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-40"
                        onClick={() => moveTask(task.id, "left")}
                        disabled={task.status === "Backlog"}
                        aria-label="Move task left"
                      >
                        ←
                      </button>
                      <button
                        className="text-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-40"
                        onClick={() => moveTask(task.id, "right")}
                        disabled={task.status === "Done"}
                        aria-label="Move task right"
                      >
                        →
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <AddTaskModal
          onAdd={addTask}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}

function AddTaskModal({
  onAdd,
  onClose,
}: {
  onAdd: (title: string, status: TaskStatus) => void
  onClose: () => void
}) {
  const [title, setTitle] = useState("")
  const [status, setStatus] = useState<TaskStatus>("Backlog")

  const handleSubmit = () => {
    if (title.trim()) {
      onAdd(title, status)
      onClose()
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-task-title"
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div className="bg-white p-6 rounded shadow w-full max-w-sm">
        <h2 id="add-task-title" className="text-xl font-semibold mb-4">
          Add New Task
        </h2>

        <input
          aria-label="Task title"
          className="border border-gray-300 p-2 w-full mb-2 rounded"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          aria-label="Task status"
          className="border border-gray-300 p-2 w-full mb-4 rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value as TaskStatus)}
        >
          <option value="Backlog">Backlog</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 px-4 py-1 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
