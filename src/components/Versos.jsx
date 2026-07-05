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
          versos.map((v) => (
            <div key={v.id} className="verso-card">
              {v.numero && <span className="verso-numero">{v.numero}</span>}
              <p className="verso-texto">{v.texto}</p>
              <p className="verso-cita">{v.cita}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Versos
