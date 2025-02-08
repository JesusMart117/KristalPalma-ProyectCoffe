import { useState } from "react"
import { Header } from "../../../components/admin-header/header"
import { Sidebar } from "../../../components/admin-sidebar/sidebar"
import { TaskList } from "../../../components/task-list/task-list"
import { TaskDetail } from "../../../components/task-detail/task-detail"
import "./project-view.css"

interface Task {
  id: string
  title: string
  completed: boolean
  description?: string
  startDate?: string
  status?: "completed" | "in-progress" | "pending"
}

export default function ProjectViewAdmin() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)

  const melchorTasks: Task[] = [
    {
      id: "1",
      title: "Interfaces",
      completed: false,
      description: "Realizar las interfaces de todas las páginas",
      startDate: "12/07/2024",
      status: "in-progress",
    },
    {
      id: "2",
      title: "Diagrama de clases UX",
      completed: false,
    },
    {
      id: "3",
      title: "Desarrollo BD",
      completed: true,
    },
    {
      id: "4",
      title: "Realizar cronograma",
      completed: false,
    },
  ]

  const victorTasks: Task[] = [
    {
      id: "5",
      title: "Diagrama BD",
      completed: true,
    },
    {
      id: "6",
      title: "Desarrollo UX",
      completed: false,
    },
    {
      id: "7",
      title: "Desarrollo M.",
      completed: false,
    },
    {
      id: "8",
      title: "Desarrollo dashboard",
      completed: false,
    },
  ]

  return (
    <div className="project-container">
      <Sidebar />
      <div className="main-content">
        <Header title="PROYECTO 1" />
        <div className="project-content">
          <div className="tasks-grid">
            <TaskList assignee="MELCHOR OJEDA" tasks={melchorTasks} onTaskClick={setSelectedTask} />
            <TaskList assignee="VICTOR CHAY" tasks={victorTasks} onTaskClick={setSelectedTask} />
          </div>
          {selectedTask && <TaskDetail task={selectedTask} onClose={() => setSelectedTask(null)} />}
        </div>
      </div>
    </div>
  )
}
