import { useCallback, useEffect, useRef, useState } from 'react'
import HomePage from './components/Home'
import Actividades from './components/Actividades'
import Herramientas from './components/Herramientas'
import Iglesia from './components/Iglesia'
import BottomNav from './components/BottomNav'
import { supabase } from './supabase/client'
import { setCached } from './utils/cache'
import { BackContext } from './components/navigation'
import './App.css'

function App() {
  const [vista, setVista] = useState('home')
  const historial = useRef(['home'])
  const backHandler = useRef([])
  const prefetched = useRef(false)

  const registerBack = useCallback((handler) => {
    backHandler.current.push(handler)
  }, [])

  const clearBack = useCallback(() => {
    backHandler.current = []
  }, [])

  function navegar(nuevaVista) {
    if (nuevaVista === vista) return
    backHandler.current = []
    historial.current.push(nuevaVista)
    window.history.pushState(null, '')
    setVista(nuevaVista)
  }

  useEffect(() => {
    function volver() {
      if (backHandler.current.length > 0) {
        backHandler.current.pop()()
      } else if (historial.current.length > 1) {
        historial.current.pop()
        setVista(historial.current[historial.current.length - 1])
      }
    }
    window.addEventListener('popstate', volver)
    return () => window.removeEventListener('popstate', volver)
  }, [])

  useEffect(() => {
    if (prefetched.current) return
    prefetched.current = true

    async function prefetch() {
      const [anuncios, semana, lema, plan] = await Promise.allSettled([
        supabase.from('anuncios').select('*').order('id'),
        supabase.from('semana_actual').select('*').limit(1).single(),
        supabase.from('lema_anual').select('*').limit(1).single(),
        supabase.from('plan_espiritual').select('*').order('numero'),
      ])

      if (anuncios.status === 'fulfilled' && anuncios.value.data) {
        setCached('anuncios', anuncios.value.data)
      }
      if (semana.status === 'fulfilled' && semana.value.data) {
        setCached('semana_actual', semana.value.data)
      }
      if (lema.status === 'fulfilled' && lema.value.data) {
        setCached('lema_anual', lema.value.data)
      }
      if (plan.status === 'fulfilled' && plan.value.data?.length > 0) {
        setCached('plan_espiritual', plan.value.data)
      }
    }

    prefetch()
  }, [])

  return (
    <BackContext.Provider value={{ registerBack, clearBack }}>
      {vista === 'home' && <HomePage />}
      {vista === 'actividades' && <Actividades />}
      {vista === 'herramientas' && <Herramientas />}
      {vista === 'iglesia' && <Iglesia />}
      <BottomNav activeVista={vista} onNavigate={navegar} />
    </BackContext.Provider>
  )
}

export default App
