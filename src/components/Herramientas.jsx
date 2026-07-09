import { useEffect } from 'react'
import { BookText, Smartphone, Globe, Play } from 'lucide-react'
import { useBack } from './navigation'
import './Herramientas.css'

const cards = [
  {
    icon: BookText,
    label: 'Diccionario Bíblico',
    desc: 'Página web',
    url: 'https://webstersdictionary1828.com/Dictionary/education',
    color: '#2c7a3e',
  },
  {
    icon: Smartphone,
    label: 'Comentario Bíblico',
    desc: 'Aplicación en Play Store',
    url: 'https://play.google.com/store/apps/details?id=com.enduringword.commentary',
    color: '#1565c0',
  },
  {
    icon: Globe,
    label: 'Página de Estudio',
    desc: 'Página web',
    url: 'https://www.indubiblia.org/estudio-de-la-biblia',
    color: '#8b6914',
  },
  {
    icon: Play,
    label: 'Canal de YouTube',
    desc: 'Proyecto Biblia',
    url: 'https://www.youtube.com/@ProyectoBibliaOficial/videos',
    color: '#c62828',
  },
]

function Herramientas() {
  const { registerBack, clearBack } = useBack()

  useEffect(() => {
    clearBack()
  }, [])

  return (
    <div className="herramientas-container">
      <h2 className="herramientas-title">Herramientas</h2>

      <div className="herramientas-grid">
        {cards.map((card) => (
          <div
            key={card.label}
            className="herramienta-card"
            style={{ borderColor: '#b8860b' }}
            role="button"
            tabIndex={0}
            onClick={() => window.open(card.url, '_blank', 'noopener,noreferrer')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                window.open(card.url, '_blank', 'noopener,noreferrer')
              }
            }}
          >
            <card.icon className="herramienta-icon" style={{ color: '#b8860b' }} />
            <div className="herramienta-info">
              <span className="herramienta-label">{card.label}</span>
              <span className="herramienta-desc">{card.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Herramientas