import { useEffect, useState } from 'react'
import { ArrowLeft, Gem } from 'lucide-react'
import { supabase } from '../supabase/client'
import './Tesoros.css'

const tesorosList = [
  { id: 1, label: 'Primer Tesoro Bíblico', tabla: 'tesoro_uno' },
  { id: 2, label: 'Segundo Tesoro Bíblico', tabla: 'tesoro_dos' },
]

function Tesoros({ onBack }) {
  const [tesoroActivo, setTesoroActivo] = useState(null)
  const [versos, setVersos] = useState([])
  const info = tesoroActivo ? tesorosList[tesoroActivo - 1] : null

  useEffect(() => {
    if (!info) return
    async function fetchVersos() {
      const { data } = await supabase
        .from(info.tabla)
        .select('*')
        .order('id')
      if (data) setVersos(data)
    }
    fetchVersos()
  }, [info])

  if (tesoroActivo) {
    const grupos = {}
    for (const v of versos) {
      const key = (v.cita || '').trim()
      if (!grupos[key]) grupos[key] = []
      grupos[key].push(v)
    }
    const entries = Object.entries(grupos)

    return (
      <div className="tesoros-container">
        <button className="tesoros-back" onClick={() => setTesoroActivo(null)}>
          <ArrowLeft size={20} />
          <span>Volver</span>
        </button>

        <h2 className="tesoros-title">{info.label}</h2>

        <div className="tesoros-contenido">
        <div className="tesoros-versos">
          {entries.length === 0 ? (
            <p className="tesoros-placeholder">No hay versos aún</p>
          ) : (
            entries.map(([cita, lista]) => (
              <div key={cita} className="tesoro-verso-card">
                <span className="tesoro-verso-numero">{lista[0].orden}</span>
                <p className="tesoro-verso-cita">{cita}</p>
                {lista.map((v) => (
                  <p key={v.id} className="tesoro-verso-texto">
                    {v.numero != null && <span className="tesoro-verso-id">{v.numero}</span>}
                    {v.texto}
                  </p>
                ))}
              </div>
            ))
          )}
        </div>
        </div>
      </div>
    )
  }

  return (
    <div className="tesoros-container">
      <button className="tesoros-back" onClick={onBack}>
        <ArrowLeft size={20} />
        <span>Volver</span>
      </button>

      <div className="tesoros-centered">
      <h2 className="tesoros-title">Tesoros Bíblicos</h2>

      <div className="tesoros-contenido">
      <div className="tesoros-grid">
        {tesorosList.map((t) => (
          <button
            key={t.id}
            className="tesoro-card"
            onClick={() => setTesoroActivo(t.id)}
          >
            <Gem className="tesoro-icon" />
            <span className="tesoro-label">{t.label}</span>
          </button>
        ))}
      </div>
      </div>
      </div>
    </div>
  )
}

export default Tesoros