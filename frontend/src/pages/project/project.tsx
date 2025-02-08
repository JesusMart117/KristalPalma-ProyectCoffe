import { Header } from "../../components/header/header"
import { Sidebar } from "../../components/sidebar/sidebar"
import { TaskColumn } from "../../components/task-column/task-column"
import "./project.css"

interface Task {
  id: string
  title: string
  completed: boolean
}

interface TeamMember {
  id: string
  name: string
  tasks: Task[]
}

export default function Project() {
  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "MELCHOR OJEDA",
      tasks: [
        { id: "1", title: "Interfaces", completed: false },
        { id: "2", title: "Diagrama de clases UML", completed: false },
        { id: "3", title: "Desarrollo BD", completed: false },
        { id: "4", title: "Realizar cronograma", completed: false },
      ],
    },
    {
      id: "2",
      name: "VICTOR CHAY",
      tasks: [
        { id: "5", title: "Diagrama BD", completed: false },
        { id: "6", title: "Desarrollo UX", completed: false },
        { id: "7", title: "Desarrollo M.", completed: false },
        { id: "8", title: "Desarrollo dashboard", completed: false },
      ],
    },
  ]

  return (
    <div className="project-container">
      <Sidebar />
      <div className="main-content">
        <Header title="PROYECTO 1" />
        <div className="project-content">
          {teamMembers.map((member) => (
            <TaskColumn key={member.id} memberName={member.name} tasks={member.tasks} />
          ))}
        </div>
      </div>
    </div>
  )
}
