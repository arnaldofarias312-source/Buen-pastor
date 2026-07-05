import { Home, Calendar, BookOpen, Heart, Church } from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Inicio', vista: 'home' },
  { icon: Calendar, label: 'Actividades', vista: 'actividades' },
  { icon: BookOpen, label: 'Biblioteca', vista: 'biblioteca' },
  { icon: Heart, label: 'Ayuda', vista: 'ayuda' },
  { icon: Church, label: 'Iglesia', vista: 'iglesia' },
]

function BottomNav({ activeVista, onNavigate }) {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <button
          key={item.vista}
          className={`nav-item${activeVista === item.vista ? ' active' : ''}`}
          onClick={() => onNavigate(item.vista)}
        >
          <item.icon className="nav-icon" />
          <span className="nav-label">{item.label}</span>
        </button>
      ))}
    </nav>
  )
}

export default BottomNav
