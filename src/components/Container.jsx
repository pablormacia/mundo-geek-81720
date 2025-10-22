import { useState, useEffect } from "react"
import Card from "./Card"

function Container() {
    const [categories, setCategories] = useState([])
    const [datosActualizados, setDatosActualizados] = useState(false)

    const fetchCategories = () => {
        const categoriesFromFakeDB = [ //Esto es un mock de datos
            {
                id: 1,
                name: "Consolas"
            },
            {
                id: 2,
                name: "Gadgets"
            },
            {
                id: 3,
                name: "comics"
            }
        ]

        console.log("Trayendo las categorias desde algún lugar lejano...")

        return new Promise((resolve, reject) => {
            setTimeout(() => { resolve(categoriesFromFakeDB) }, 2000)
        })
    }

    //Estructura para resolver una función que devuelve una promesa:

    /* fetchCategories()
        .then()
        .catch(error)
        .finally() */

    /* fetchCategories()
        .then((response)=>setCategories(response)) Cuidado con dejar este tipo de funciones sueltas en el componente*/

    useEffect(() => {
        fetchCategories()
            .then((response) => setCategories(response))
            .catch(error=>console.log(error))
            .finally(()=>console.log("Fetch finalizado"))
    }, [datosActualizados])

    return (
        <div>
        <ul>
            {categories.map((category, index) => <Card key={index}><li>{category.name}</li></Card>)}
        </ul>
        <button onClick={()=>setDatosActualizados(!datosActualizados)}>Actualizar datos</button>
        </div>
    )
}

export default Container