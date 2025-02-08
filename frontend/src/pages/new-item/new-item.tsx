import { useState } from "react"
import { Header } from "../../components/admin-header/header"
import { Sidebar } from "../../components/admin-sidebar/sidebar"
import "./new-item.css"

interface Member {
  id: string
  name: string
  role: string
  initial: string
}

export default function NewProject() {
  const [activeTab, setActiveTab] = useState<"project" | "team">("project")
  const [selectedMembers, setSelectedMembers] = useState<string[]>([])

  const members: Member[] = [
    { id: "I", name: "Ideny Lopez", role: "Encargado", initial: "I" },
    { id: "K", name: "Kristal Palma", role: "Desarrollador", initial: "K" },
    { id: "B", name: "Berenice Sanchez", role: "Diseñador", initial: "B" },
    { id: "M", name: "Melchor Ojeda", role: "Desarrollador", initial: "M" },
    { id: "V", name: "Victor Alvarado", role: "Analista", initial: "V" },
  ]

  const toggleMember = (memberId: string) => {
    setSelectedMembers((prev) => (prev.includes(memberId) ? prev.filter((id) => id !== memberId) : [...prev, memberId]))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para crear el proyecto
    console.log("Crear proyecto", {
      selectedMembers,
    })
  }

  return (
    <div className="new-project-container">
      <Sidebar />
      <div className="main-content">
        <Header title="Nuevo Proyecto" />
        <div className="new-project-content">
          <div className="tab-buttons">
            <button
              className={`tab-button ${activeTab === "project" ? "active" : ""}`}
              onClick={() => setActiveTab("project")}
            >
              Proyecto
            </button>
            <button
              className={`tab-button ${activeTab === "team" ? "active" : ""}`}
              onClick={() => setActiveTab("team")}
            >
              Equipo
            </button>
          </div>

          <form onSubmit={handleSubmit} className="project-form">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" placeholder="Nombre del proyecto" className="form-input" />
            </div>

            <div className="form-group">
              <label htmlFor="description">Descripción</label>
              <textarea id="description" placeholder="Descripción del proyecto" className="form-input" rows={4} />
            </div>

            <div className="form-group">
              <label>Seleccionar Miembros</label>
              <div className="members-grid">
                {members.map((member) => (
                  <div
                    key={member.id}
                    className={`member-item ${selectedMembers.includes(member.id) ? "selected" : ""}`}
                    onClick={() => toggleMember(member.id)}
                  >
                    <div className="member-avatar">{member.initial}</div>
                    <div className="member-info">
                      <span className="member-name">{member.name}</span>
                      <span className="member-role">{member.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button type="submit" className="submit-button">
              Crear Proyecto
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
