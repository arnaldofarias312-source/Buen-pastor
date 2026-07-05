import { useEffect, useState } from 'react'
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

  const grouped = versos.reduce((acc, v) => {
    if (!acc[v.cita]) acc[v.cita] = []
    acc[v.cita].push(v)
    return acc
  }, {})

  return (
    <div className="versos-container">
      <button className="versos-back" onClick={onBack}>
        <ArrowLeft size={20} />
        <span>Volver</span>
      </button>

      <h2 className="versos-title">Versos a Memorizar</h2>

      <div className="versos-list">
        {Object.keys(grouped).length === 0 ? (
          <p className="versos-vacio">No hay versos aún</p>
        ) : (
          Object.entries(grouped).map(([cita, vs]) => (
            <div key={cita} className="verso-card">
              <p className="verso-cita">{cita}</p>
              {vs.map((v) => (
                <p key={v.id} className="verso-linea">
                  <span className="verso-numero">{v.numero}</span>
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
