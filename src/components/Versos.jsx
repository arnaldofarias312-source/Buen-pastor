import { useEffect, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { supabase } from '../supabase/client'
import { getCached, setCached } from '../utils/cache'
import './Versos.css'

function Versos({ onBack }) {
  const [versos, setVersos] = useState(() => getCached('versos_memorizar') || [])

  useEffect(() => {
    async function fetchVersos() {
      const { data } = await supabase
        .from('versos_memorizar')
        .select('*')
        .order('id')
      if (data) {
        setVersos(data)
        setCached('versos_memorizar', data)
      }
    }
    fetchVersos()
  }, [])

  const grupos = {}
  for (const v of versos) {
    const key = v.cita || ''
    if (!grupos[key]) grupos[key] = []
    grupos[key].push(v)
  }
  const entries = Object.entries(grupos)

  return (
    <div className="versos-container">
      <button className="versos-back" onClick={onBack}>
        <ArrowLeft size={20} />
        <span>Volver</span>
      </button>

      <h2 className="versos-title">Versos a Memorizar</h2>

      <div className="versos-list">
        {entries.length === 0 ? (
          <p className="versos-vacio">No hay versos aún</p>
        ) : (
          entries.map(([cita, lista]) => (
            <div key={cita} className="verso-card">
              <p className="verso-cita">{cita}</p>
              {lista.map((v) => (
                <p key={v.id} className="verso-texto">
                  {v.numero != null && <span className="verso-numero">{v.numero}</span>}
                  {v.texto}
                </p>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Versos
