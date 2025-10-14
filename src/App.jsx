import './App.css'
import { useState } from 'react'

function App() {
  const [counter,setCounter] = useState(0)
  const [nombre, setNombre] = useState("Pablo")

  //console.log("counter:", counter)
  return (
    <>
      <p>Contador: {counter}</p>
      <p>Nombre: {nombre}</p>
      <button onClick={()=>setCounter(counter+1)}>Incrementar</button>
      <button onClick={()=>setNombre("Rodolfo")}>Cambiar nombre</button>
      {/* <a href="/otrapagina">Ir a otra página</a> */}
    </>
  )
}

export default App
