import { useEffect, useState } from 'react'
import { ArrowLeft, Download, Play } from 'lucide-react'
import { supabase } from '../supabase/client'
import { getCached, setCached } from '../utils/cache'
import SkeletonLoader from './SkeletonLoader'
import './Devocional.css'

function Devocional({ onBack }) {
  const [dev, setDev] = useState(() => getCached('devocional'))
  const [loading, setLoading] = useState(!getCached('devocional'))

  useEffect(() => {
    async function fetchDev() {
      const { data } = await supabase
        .from('devocional')
        .select('*')
        .limit(1)
        .single()
      if (data) {
        setDev(data)
        setCached('devocional', data)
      }
      setLoading(false)
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

      {loading ? (
        <div className="devocional-cargando">
          <SkeletonLoader type="text" count={3} />
        </div>
      ) : dev ? (
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
      ) : null}

      <a
        href="https://www.youtube.com/@elbuenpastorsur2025/videos"
        target="_blank"
        rel="noopener noreferrer"
        className="devocional-youtube"
      >
        <Play size={22} />
        <span>Reflexiones el Buen Pastor</span>
      </a>
    </div>
  )
}

export default Devocional
