import { useCallback, useEffect, useRef, useState } from 'react'
import HomePage from './components/Home'
import Actividades from './components/Actividades'
import Herramientas from './components/Herramientas'
import Iglesia from './components/Iglesia'
import BottomNav from './components/BottomNav'
import { BackContext } from './components/navigation'
import './App.css'

function App() {
  const [vista, setVista] = useState('home')
  const historial = useRef(['home'])
  const backHandler = useRef([])

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
