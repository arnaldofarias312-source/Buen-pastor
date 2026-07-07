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
    desc: 'Google Maps',
    color: '#2c7a3e',
    url: 'https://maps.app.goo.gl/kvaXGq7X5AWaro9RA',
  },
  {
    icon: ScrollText,
    label: 'Historia',
    desc: 'Próximamente',
    color: '#8b6914',
  },
  {
    icon: Church,
    label: 'Reforma Protestante',
    desc: 'Historia y documentos',
    color: '#1565c0',
    subView: 'reforma',
  },
  {
    icon: CreditCard,
    label: 'Información Bancaria',
    desc: 'Ofrendas y diezmos',
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
        {cards.map((card) => (
          <div
            key={card.label}
            className="iglesia-card"
            style={{ borderColor: '#b8860b' }}
            role="button"
            tabIndex={0}
            onClick={() => {
              if (card.url) { window.open(card.url, '_blank', 'noopener,noreferrer') }
              else if (card.subView) { setSubVista(card.subView) }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                if (card.url) { window.open(card.url, '_blank', 'noopener,noreferrer') }
                else if (card.subView) { setSubVista(card.subView) }
              }
            }}
          >
            <card.icon className="iglesia-icon" style={{ color: card.color }} />
            <div className="iglesia-info">
              <span className="iglesia-label">{card.label}</span>
              <span className="iglesia-desc">{card.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Iglesia