import "./project-section.css"

interface Project {
  id: string
  name: string
}

interface Team {
  id: string
  name: string
}

export function ProjectSection() {
  const projects: Project[] = [{ id: "1", name: "Proyecto de proyectos" }]

  const teams: Team[] = [
    { id: "1", name: "Equipo Jekeis" },
    { id: "2", name: "Equipo 1" },
  ]

  return (
    <div className="project-section">
      <div className="section-content">
        <h2>Mis proyectos</h2>
        <div className="project-list">
          {projects.map((project) => (
            <div key={project.id} className="list-item">
              {project.name}
            </div>
          ))}
        </div>
      </div>

      <div className="section-content">
        <h2>Mis equipos</h2>
        <div className="team-list">
          {teams.map((team) => (
            <div key={team.id} className="list-item">
              {team.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}