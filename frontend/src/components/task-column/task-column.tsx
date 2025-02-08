import "./task-column.css"

interface Task {
  id: string
  title: string
  completed: boolean
}

interface TaskColumnProps {
  memberName: string
  tasks: Task[]
}

export function TaskColumn({ memberName, tasks }: TaskColumnProps) {
  return (
    <div className="task-column">
      <h2 className="member-name">{memberName}</h2>
      <div className="tasks-list">
        {tasks.map((task) => (
          <div key={task.id} className="task-item">
            <div className={`task-status ${task.completed ? "completed" : ""}`} />
            <span className="task-title">{task.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

