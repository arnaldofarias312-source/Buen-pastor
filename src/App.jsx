import { useState } from 'react'
import HomePage from './components/Home'
import Actividades from './components/Actividades'
import BottomNav from './components/BottomNav'
import './App.css'

function App() {
  const [vista, setVista] = useState('home')

  return (
    <>
      {vista === 'home' && <HomePage />}
      {vista === 'actividades' && <Actividades />}
      <BottomNav activeVista={vista} onNavigate={setVista} />
    </>
  )
}

export default App
