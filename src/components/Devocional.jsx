import { useEffect, useState } from 'react'
import { ArrowLeft, Download } from 'lucide-react'
import { supabase } from '../supabase/client'
import './Devocional.css'

function Devocional({ onBack }) {
  const [dev, setDev] = useState(null)

  useEffect(() => {
    async function fetchDev() {
      const { data } = await supabase
        .from('devocional')
        .select('*')
        .limit(1)
        .single()
      if (data) setDev(data)
    }
    fetchDev()
  }, [])

  async function handleDownload() {
    if (!dev) return
    try {
      const res = await fetch(dev.imagen_url)
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'devocional.jpg'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch {
      window.open(dev.imagen_url, '_blank')
    }
  }

  return (
    <div className="devocional-container">
      <button className="devocional-back" onClick={onBack}>
        <ArrowLeft size={20} />
        <span>Volver</span>
      </button>

      {dev ? (
        <div className="devocional-card">
          <span className="devocional-label">DEVOCIONAL TIEMPO CON DIOS</span>
          <img
            src={dev.imagen_url}
            alt="Devocional"
            className="devocional-img"
          />
          <button className="devocional-download" onClick={handleDownload}>
            <Download size={18} />
            Descargar Imagen
          </button>
        </div>
      ) : (
        <p className="devocional-loading">Cargando devocional...</p>
      )}
    </div>
  )
}

export default Devocional
