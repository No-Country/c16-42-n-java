import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './views/landing/landing';
import Login from './views/Login/login';
//Importamos las vistas
import Banner from './components/Banner'
import { Navbar } from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Testing</h1>
    </>
  )
}

export default App
