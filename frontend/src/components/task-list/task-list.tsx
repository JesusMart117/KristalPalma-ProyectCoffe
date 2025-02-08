import "./task-list.css"

interface Task {
  id: string
  title: string
  completed: boolean
  description?: string
  startDate?: string
  status?: "completed" | "in-progress" | "pending"
}

interface TaskListProps {
  assignee: string
  tasks: Task[]
  onTaskClick: (task: Task) => void
}

export function TaskList({ assignee, tasks, onTaskClick }: TaskListProps) {
  return (
    <div className="task-column">
      <h3 className="assignee-name">{assignee}</h3>
      <div className="tasks-container">
        {tasks.map((task) => (
          <div key={task.id} className="task-item" onClick={() => onTaskClick(task)}>
            <div className={`task-status ${task.completed ? "completed" : ""}`} />
            <span className="task-title">{task.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
