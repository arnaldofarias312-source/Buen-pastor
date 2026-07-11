import { useEffect, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { supabase } from '../supabase/client'
import { getCached, setCached } from '../utils/cache'
import SkeletonLoader from './SkeletonLoader'
import './HimnoMes.css'

function HimnoMes({ onBack }) {
  const [himno, setHimno] = useState(() => getCached('himno_mes'))
  const [loading, setLoading] = useState(!getCached('himno_mes'))

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
      setLoading(false)
    }
    fetchHimno()
  }, [])

  return (
    <div className="himno-container">
      <div className="himno-top">
        <button className="himno-back" onClick={onBack}>
          <ArrowLeft size={20} />
          <span>Volver</span>
        </button>
        {himno?.mes && <span className="himno-top-mes">{himno.mes}.</span>}
      </div>

      {loading ? (
        <SkeletonLoader type="himno" />
      ) : himno ? (
        <>
          <h2 className="himno-title">Himno del Mes</h2>
          <p className="himno-nombre">{himno.titulo}</p>
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
      ) : null}
    </div>
  )
}

export default HimnoMes
