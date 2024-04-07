const CardStructure = (props) => {
    return (
        <div className="card">
        <img src={props.image} alt="image" />
        <h3> {props.title} </h3>
        <p>{props.price}</p>
        <p> {props.description} </p>
    </div>
    )
}

export default CardStructure;