import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { supabase } from '../supabase/client'
import './Versos.css'

function Versos({ onBack }) {
  const [versos, setVersos] = useState([])

  useEffect(() => {
    async function fetchVersos() {
      const { data } = await supabase
        .from('versos_memorizar')
        .select('*')
        .order('id')
      if (data) setVersos(data)
    }
    fetchVersos()
  }, [])

  const grouped = useMemo(() => {
    const map = {}
    for (const v of versos) {
      const key = v.cita || '—'
      if (!map[key]) map[key] = []
      map[key].push(v)
    }
    return map
  }, [versos])

  return (
    <div className="versos-container">
      <button className="versos-back" onClick={onBack}>
        <ArrowLeft size={20} />
        <span>Volver</span>
      </button>

      <h2 className="versos-title">Versos a Memorizar</h2>

      <div className="versos-list">
        {versos.length === 0 ? (
          <p className="versos-vacio">No hay versos aún</p>
        ) : (
          Object.values(grouped).map((grupo) => (
            <div key={grupo[0].cita || '—'} className="verso-card">
              <p className="verso-cita">{grupo[0].cita}</p>
              {grupo.map((v) => (
                <p key={v.id} className="verso-linea">
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
