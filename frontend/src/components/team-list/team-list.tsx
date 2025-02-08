import "./team-list.css"

interface TeamMember {
  id: number
  name: string
  role?: string
}

interface TeamListProps {
  members: TeamMember[]
  onSelectMember?: (member: TeamMember) => void
}

export function TeamList({ members, onSelectMember }: TeamListProps) {
  return (
    <div className="team-list">
      {members.map((member) => (
        <div key={member.id} className="team-member" onClick={() => onSelectMember?.(member)}>
          <div className="member-avatar">{member.name.charAt(0)}</div>
          <div className="member-info">
            <div className="member-name">{member.name}</div>
            {member.role && <div className="member-role">{member.role}</div>}
          </div>
        </div>
      ))}
    </div>
  )
}

