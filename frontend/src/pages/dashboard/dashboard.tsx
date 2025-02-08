import { Header } from "../../components/header/header"
import { Sidebar } from "../../components/sidebar/sidebar"
import { ProjectSection } from "../../components/project-section/project-section"
import { TaskSection } from "../../components/task-section/task-section"
import "./dashboard.css"

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header title="Dashboard" />
        <div className="dashboard-content">
          <div className="dashboard-grid">
            <ProjectSection />
            <TaskSection />
          </div>
        </div>
      </div>
    </div>
  )
}

