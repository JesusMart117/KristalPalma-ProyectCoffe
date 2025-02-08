import "./header.css";


interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <div className="user-profile">
        <span className="user-icon">👤</span>
      </div>
    </header>
  )
}

