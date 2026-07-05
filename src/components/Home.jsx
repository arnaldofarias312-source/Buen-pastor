import { useEffect, useState } from 'react'
import { supabase } from '../supabase/client'
import { Home, Calendar, BookOpen, Heart, Church } from 'lucide-react'
import './Home.css'

const navItems = [
  { icon: Home, label: 'Inicio' },
  { icon: Calendar, label: 'Actividades' },
  { icon: BookOpen, label: 'Biblioteca' },
  { icon: Heart, label: 'Ayuda' },
  { icon: Church, label: 'Iglesia' },
]

function HomePage() {
  const [lema, setLema] = useState(null)

  useEffect(() => {
    async function fetchLema() {
      const { data } = await supabase
        .from('lema_anual')
        .select('*')
        .limit(1)
        .single()
      if (data) setLema(data)
    }
    fetchLema()
  }, [])

  return (
    <div className="home">
      <header className="card">
        <span className="card-label">NUESTRA IGLESIA</span>
        <div className="church-logo-wrap">
          <img src="/logo-iglesia.png" alt="Iglesia El Buen Pastor" className="church-logo" />
        </div>
      </header>

      <section className="card">
        <span className="card-label">TEXTO LEMA 2026</span>
        {lema ? (
          <>
            <p className="verse-text">{lema.texto}</p>
            <p className="verse-ref">{lema.cita}</p>
            <p className="verse-version">{lema.version}</p>
          </>
        ) : (
          <>
            <p className="verse-text">Regocijaos en el Señor siempre. Otra vez digo: ¡Regocijaos!</p>
            <p className="verse-ref">Filipenses 4:4</p>
            <p className="verse-version">Reina-Valera 1960</p>
          </>
        )}
      </section>

      <section className="card">
        <span className="card-label">SERVICIOS</span>
        <div className="services-content">
          <div className="service-row">
            <span className="service-day">Domingos</span>
            <span className="service-time">9:00am - 11:00am</span>
          </div>
          <div className="service-row">
            <span className="service-day">Miércoles</span>
            <span className="service-time">5:30pm - 7:00pm</span>
          </div>
        </div>
      </section>

      <nav className="bottom-nav">
        {navItems.map((item, i) => (
          <button key={item.label} className={`nav-item${i === 0 ? ' active' : ''}`}>
            <item.icon className="nav-icon" />
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}

export default HomePage
