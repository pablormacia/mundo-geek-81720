function Container({handleChangeName}) {
    console.log("Componente Container montado")
    return (
        <div>
            <button onClick={handleChangeName}>Cambiar nombre</button>
        </div>
    )
}

export default Container