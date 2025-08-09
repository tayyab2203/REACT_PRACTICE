import "./WelcomeCard.css"

function welcomeCard({name, message}){
    return(
        <>
        <div className="welcome-card">
            <h2>Hello, {name}</h2>
            <p>{message}</p>
        </div>
        </>
    )

}
export default welcomeCard;