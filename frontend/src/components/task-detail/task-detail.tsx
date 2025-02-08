import "./task-detail.css"

interface Task {
  id: string
  title: string
  completed: boolean
  description?: string
  startDate?: string
  status?: "completed" | "in-progress" | "pending"
}

interface TaskDetailProps {
  task: Task
  onClose: () => void
}

export function TaskDetail({ task, onClose }: TaskDetailProps) {
  return (
    <div className="task-detail">
      <div className="detail-header">
        <h3>{task.title}</h3>
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
      </div>

      <div className="detail-content">
        <div className="detail-section">
          <label>Descripción:</label>
          <p>{task.description || "Sin descripción"}</p>
        </div>

        {task.startDate && (
          <div className="detail-section">
            <label>Fecha de inicio:</label>
            <p>{task.startDate}</p>
          </div>
        )}

        <div className="detail-section">
          <label>Estado:</label>
          <p>{task.status || "Pendiente"}</p>
        </div>
      </div>
    </div>
  )
}

