export default function ProductCard(props){
    console.log()
    return(
        <div className="bg-red-900">
            <h1>{props.name}</h1>
            <h2>{props.description}</h2>
            <p>{props.Price}</p>
            <button>Add TO Catr</button>
        </div>
    )
}