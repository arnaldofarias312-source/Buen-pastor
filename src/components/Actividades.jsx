import { useEffect, useState } from 'react'
import { Music, Megaphone, BookHeart } from 'lucide-react'
import HimnoMes from './HimnoMes'
import Devocional from './Devocional'
import Anuncios from './Anuncios'
import { useBack } from './navigation'
import './Actividades.css'

const cards = [
  { id: 'anuncios', icon: Megaphone, label: 'Anuncios de la Semana', color: '#8b6914' },
  { id: 'himno', icon: Music, label: 'Himno del Mes', color: '#d4a853' },
  { id: 'devocional', icon: BookHeart, label: 'Devocional Tiempo con Dios', color: '#a08030' },
]

function Actividades() {
  const [subVista, setSubVista] = useState(null)
  const { registerBack, clearBack } = useBack()

  function cerrarSubVista() {
    setSubVista(null)
    clearBack()
  }

  useEffect(() => {
    if (subVista) {
      window.history.pushState(null, '')
      registerBack(cerrarSubVista)
    }
  }, [subVista])

  if (subVista === 'himno') {
    return <HimnoMes onBack={cerrarSubVista} />
  }

  if (subVista === 'devocional') {
    return <Devocional onBack={cerrarSubVista} />
  }

  if (subVista === 'anuncios') {
    return <Anuncios onBack={cerrarSubVista} />
  }

  return (
    <div className="actividades">
      <h2 className="actividades-title">Actividades</h2>
      <div className="actividades-grid">
        {cards.map((card) => (
          <button
            key={card.id}
            className="actividad-card"

            onClick={() => setSubVista(card.id)}
          >
            <card.icon className="actividad-icon" />
            <span className="actividad-label">{card.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Actividades
