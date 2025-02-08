import { useState } from "react"
import { Header } from "../../components/header/header"
import { Sidebar } from "../../components/sidebar/sidebar"
import { TeamList } from "../../components/team-list/team-list"
import "./equipos.css"

interface TeamMember {
  id: number
  name: string
  role: string
}

export default function Equipos() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  const teamMembers: TeamMember[] = [
    { id: 1, name: "Ideny Lopez", role: "Encargado" },
    { id: 2, name: "Kristal Palma", role: "Desarrollador" },
    { id: 3, name: "Berenice Sanchez", role: "Diseñador" },
    { id: 4, name: "Melchor Ojeda", role: "Desarrollador" },
    { id: 5, name: "Victor Alvarado", role: "Analista" },
  ]

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header title="Equipos" />
        <div className="content-grid">
          <div className="team-section">
            <h2>Equipo 1</h2>
            <TeamList members={teamMembers} onSelectMember={setSelectedMember} />
          </div>
          {selectedMember && (
            <div className="member-detail">
              <div className="detail-header">
                <h3>{selectedMember.name}</h3>
                <button className="close-button" onClick={() => setSelectedMember(null)}>
                  ✕
                </button>
              </div>
              <div className="detail-content">
                <p>
                  <strong>Rol:</strong> {selectedMember.role}
                </p>
                <div className="detail-actions">
                  <button>Ver tareas</button>
                  <button>Ver proyectos</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
