import { useState } from 'react'
import { Music, Megaphone, Gem, BookMarked, BookHeart } from 'lucide-react'
import HimnoMes from './HimnoMes'
import Devocional from './Devocional'
import Anuncios from './Anuncios'
import Versos from './Versos'
import Tesoros from './Tesoros'
import './Actividades.css'

const cards = [
  { id: 'anuncios', icon: Megaphone, label: 'Anuncios de la Semana', color: '#8b6914' },
  { id: 'himno', icon: Music, label: 'Himno del Mes', color: '#d4a853' },
  { id: 'devocional', icon: BookHeart, label: 'Devocional Tiempo con Dios', color: '#a08030' },
  { id: 'tesoros', icon: Gem, label: 'Tesoros Bíblicos', color: '#b8860b' },
  { id: 'versos', icon: BookMarked, label: 'Versos a Memorizar', color: '#c4a35a' },
]

function Actividades() {
  const [subVista, setSubVista] = useState(null)

  if (subVista === 'himno') {
    return <HimnoMes onBack={() => setSubVista(null)} />
  }

  if (subVista === 'devocional') {
    return <Devocional onBack={() => setSubVista(null)} />
  }

  if (subVista === 'anuncios') {
    return <Anuncios onBack={() => setSubVista(null)} />
  }

  if (subVista === 'versos') {
    return <Versos onBack={() => setSubVista(null)} />
  }

  if (subVista === 'tesoros') {
    return <Tesoros onBack={() => setSubVista(null)} />
  }

  return (
    <div className="actividades">
      <h2 className="actividades-title">Actividades</h2>
      <div className="actividades-grid">
        {cards.map((card) => (
          <button
            key={card.id}
            className="actividad-card"
            style={{ borderColor: card.color }}
            onClick={() => setSubVista(card.id)}
          >
            <card.icon className="actividad-icon" style={{ color: card.color }} />
            <span className="actividad-label">{card.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Actividades
