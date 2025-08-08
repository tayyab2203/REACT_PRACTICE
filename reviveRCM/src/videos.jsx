import "./videos.css"

function Videos ({title, description}){
    return(
        <div className="videos">
        <h4>{title}</h4>
        <p>{description}</p>
        </div>
    )
}
export default Videos