import { useEffect, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { supabase } from '../supabase/client'
import { getCached, setCached } from '../utils/cache'
import './HimnoMes.css'

function HimnoMes({ onBack }) {
  const [himno, setHimno] = useState(() => getCached('himno_mes'))

  useEffect(() => {
    async function fetchHimno() {
      const { data } = await supabase
        .from('himno_mes')
        .select('*')
        .limit(1)
        .single()
      if (data) {
        setHimno(data)
        setCached('himno_mes', data)
      }
    }
    fetchHimno()
  }, [])

  return (
    <div className="himno-container">
      <button className="himno-back" onClick={onBack}>
        <ArrowLeft size={20} />
        <span>Volver</span>
      </button>

      {himno ? (
        <>
          <h2 className="himno-title">{himno.titulo}</h2>
          {himno.autor && <p className="himno-author">{himno.autor}</p>}

          <div className="himno-body">
            {Array.isArray(himno.estrofas) && himno.estrofas.map((estrofa, i) => {
              const romanos = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']
              return (
                <div key={i}>
                  <div className="himno-section">
                    <span className="himno-section-label">{romanos[i] || i + 1}</span>
                    <p className="himno-text">{estrofa.replace(/\\n/g, '\n')}</p>
                  </div>
                  {himno.coro && i === 0 && (
                    <div className="himno-section himno-coro-first">
                      <span className="himno-section-label">CORO</span>
                      <p className="himno-text himno-coro">{himno.coro.replace(/\\n/g, '\n')}</p>
                    </div>
                  )}
                  {himno.coro && i > 0 && (
                    <p className="himno-coro-repeat">Coro</p>
                  )}
                </div>
              )
            })}
          </div>
        </>
      ) : (
        <p className="himno-loading">Cargando himno...</p>
      )}
    </div>
  )
}

export default HimnoMes
