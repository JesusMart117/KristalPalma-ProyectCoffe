import { useState } from "react"
import { Bell, Settings, LogOut } from "lucide-react"
import "./header.css"

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <header className="admin-header">
      <div className="header-left">
        <h1>{title}</h1>
      </div>

      <div className="header-right">
        <div className="notifications">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </div>

        <div className="admin-info">
          <div className="admin-profile" onClick={() => setShowDropdown(!showDropdown)}>
            <span className="admin-role">Admin</span>
            <div className="admin-avatar">A</div>
          </div>

          {showDropdown && (
            <div className="admin-dropdown">
              <button className="dropdown-item">
                <Settings size={16} />
                Configuración
              </button>
              <button className="dropdown-item">
                <LogOut size={16} />
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
