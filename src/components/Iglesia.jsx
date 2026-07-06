import { useEffect, useState } from 'react'
import { MapPin, ScrollText, Church, CreditCard } from 'lucide-react'
import ReformaProtestante from './ReformaProtestante'
import InfoBancaria from './InfoBancaria'
import { useBack } from './navigation'
import './Iglesia.css'

const cards = [
  {
    icon: MapPin,
    label: 'Ubicación',
    color: '#2c7a3e',
    url: 'https://maps.app.goo.gl/kvaXGq7X5AWaro9RA',
  },
  {
    icon: ScrollText,
    label: 'Historia',
    color: '#8b6914',
  },
  {
    icon: Church,
    label: 'Reforma Protestante',
    color: '#1565c0',
    subView: 'reforma',
  },
  {
    icon: CreditCard,
    label: 'Información Bancaria',
    color: '#c62828',
    subView: 'bancaria',
  },
]

function Iglesia() {
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

  if (subVista === 'reforma') {
    return <ReformaProtestante onBack={cerrarSubVista} />
  }

  if (subVista === 'bancaria') {
    return <InfoBancaria onBack={cerrarSubVista} />
  }

  return (
    <div className="iglesia-container">
      <h2 className="iglesia-title">Iglesia</h2>
      <div className="iglesia-grid">
        {cards.map((card) =>
          card.url ? (
            <a
              key={card.label}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className="iglesia-card"
              style={{ borderColor: card.color }}
            >
              <card.icon className="iglesia-icon" style={{ color: card.color }} />
              <span className="iglesia-label">{card.label}</span>
            </a>
          ) : (
            <button
              key={card.label}
              className="iglesia-card"
              style={{ borderColor: card.color }}
              onClick={() => card.subView && setSubVista(card.subView)}
            >
              <card.icon className="iglesia-icon" style={{ color: card.color }} />
              <span className="iglesia-label">{card.label}</span>
            </button>
          )
        )}
      </div>
    </div>
  )
}

export default Iglesia