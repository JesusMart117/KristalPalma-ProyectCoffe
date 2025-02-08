import "./task-section.css"

interface Task {
  id: string
  title: string
  completed: boolean
}

export function TaskSection() {
  const tasks: Task[] = [
    { id: "1", title: "Realizar cronograma", completed: false },
    { id: "2", title: "Realizar cronograma", completed: false },
    { id: "3", title: "Realizar cronograma", completed: false },
    { id: "4", title: "Realizar cronograma", completed: false },
    { id: "5", title: "Realizar cronograma", completed: false },
  ]

  return (
    <div className="task-section">
      <h2>Mis tareas</h2>
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
