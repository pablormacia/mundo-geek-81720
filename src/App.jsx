import './App.css'
import Navbar from './components/NavBar'
import Container from './components/Container'
import { useState } from 'react'

function App() {
  console.log("Componente App montado")
  const [nombre, setNombre] = useState("Pablo")
  
  return (
    <>
      <Container handleChangeName={()=>setNombre("Fulano")}  />
      <p>Mi nombre es : {nombre}</p>
    </>
  )
}

export default App
