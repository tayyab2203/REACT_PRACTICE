function UserCard({ name, role, avatar, id}) {
  return (
    <>
      <div className="card">
        <h4>{id}</h4>
        <img src={avatar} alt={name} />
        <h2>{name}</h2>
        <p>{role}</p>
      </div>
    </>
  );
}

export default UserCard;
