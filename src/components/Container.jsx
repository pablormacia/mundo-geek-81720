function Container(props) {
    console.log("Props de Container", props)
    return (
        <p>{props.saludo}</p>
    )
}

export default Container