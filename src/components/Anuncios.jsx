import { useEffect, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { supabase } from '../supabase/client'
import './Anuncios.css'

const ordenDias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

function Anuncios({ onBack }) {
  const [anuncios, setAnuncios] = useState([])
  const [semanaInfo, setSemanaInfo] = useState(null)

  useEffect(() => {
    async function fetchAnuncios() {
      const { data } = await supabase
        .from('anuncios')
        .select('*')
        .order('id')
      if (data) setAnuncios(data)
    }
    async function fetchSemana() {
      const { data } = await supabase
        .from('semana_actual')
        .select('*')
        .limit(1)
        .single()
      if (data) setSemanaInfo(data)
    }
    fetchAnuncios()
    fetchSemana()
  }, [])

  const especiales = anuncios.filter(a => a.tipo === 'especial')
  const normales = ordenDias.map(dia => ({
    dia,
    items: anuncios.filter(a => a.dia === dia && a.tipo !== 'especial')
  }))

  return (
    <div className="anuncios-container">
      <button className="anuncios-back" onClick={onBack}>
        <ArrowLeft size={20} />
        <span>Volver</span>
      </button>

      <h2 className="anuncios-title">Anuncios de la Semana</h2>
      <p className="anuncios-semana">
        {semanaInfo ? `semana del ${semanaInfo.dia_inicio}/${semanaInfo.mes_inicio} al ${semanaInfo.dia_fin}/${semanaInfo.mes_fin}` : 'semana del —/— al —/—'}
      </p>

      {especiales.length > 0 && (
        <div className="anuncios-especiales">
          <span className="anuncios-especiales-label">AVISOS ESPECIALES</span>
          {especiales.map((item) => (
            <div key={item.id} className="anuncios-item especial">
              {item.titulo && <strong className="anuncios-titulo">{item.titulo}</strong>}
              <p className="anuncios-texto">{item.contenido}</p>
            </div>
          ))}
        </div>
      )}

      <div className="anuncios-list">
        {normales.map(({ dia, items }) => (
          <div key={dia} className="anuncios-dia">
            <span className="anuncios-dia-label">{dia}</span>
            {items.length === 0 ? (
              <p className="anuncios-vacio">—</p>
            ) : (
              items.map((item) => (
                <div key={item.id} className="anuncios-item">
                  {item.titulo && <strong className="anuncios-titulo">{item.titulo}</strong>}
                  <p className="anuncios-texto">{item.contenido}</p>
                </div>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Anuncios
