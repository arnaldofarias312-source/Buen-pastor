import { useEffect, useState } from 'react'
import { supabase } from '../supabase/client'
import './Home.css'

function HomePage() {
  const [lema, setLema] = useState(null)
  const [plan, setPlan] = useState([])
  const [planAnio, setPlanAnio] = useState(null)

  useEffect(() => {
    async function fetchLema() {
      const { data } = await supabase
        .from('lema_anual')
        .select('*')
        .limit(1)
        .single()
      if (data) setLema(data)
    }
    async function fetchPlan() {
      const { data } = await supabase
        .from('plan_espiritual')
        .select('*')
        .order('numero')
      if (data && data.length > 0) {
        setPlan(data)
        setPlanAnio(data[0].anio)
      }
    }
    fetchLema()
    fetchPlan()
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
        <span className="card-label">TEXTO LEMA {lema?.anio || '2026'}</span>
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
        <span className="card-label">PLAN ESPIRITUAL {planAnio || '2026'}</span>
        <div className="plan-content">
          {plan.length > 0 ? plan.map((item) => (
            <div key={item.id} className="plan-item">
              <span className="plan-numero">{item.numero}.</span>
              <span className="plan-texto">{item.texto}</span>
            </div>
          )) : (
            <>
              <div className="plan-item">
                <span className="plan-numero">1.</span>
                <span className="plan-texto">Buscar a Dios primeramente todos los días.</span>
              </div>
              <div className="plan-item">
                <span className="plan-numero">2.</span>
                <span className="plan-texto">Guardar nuestro corazón.</span>
              </div>
              <div className="plan-item">
                <span className="plan-numero">3.</span>
                <span className="plan-texto">Servir con amor.</span>
              </div>
              <div className="plan-item">
                <span className="plan-numero">4.</span>
                <span className="plan-texto">Predicar el evangelio.</span>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default HomePage
