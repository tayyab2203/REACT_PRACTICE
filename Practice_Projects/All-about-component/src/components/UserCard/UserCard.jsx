import "./UserCard.css"
function UserCard ({image, name, bio}){
    return(
        <>
        <div className="UserCard">
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>{bio}</p>
        </div>
        </>
    );
}
export default UserCard;