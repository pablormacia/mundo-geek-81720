import CartWidget from "./CartWidget"

function Navbar() {
  return (
    <div >
      <div>
        <ul>
          <li>Categorías</li>
          <li>Contacto</li>
        </ul>
      </div>
      <div>
        <CartWidget />
      </div>
    </div>
  )
}

export default Navbar