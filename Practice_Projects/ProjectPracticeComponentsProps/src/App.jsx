import users from "./data/user.js"
import UserCard from "./components/UserCard.jsx"
import "./App.css"
function App() {
console.log(users)
return (
    <div className="card-container">
      {users.map((user) => (
        <UserCard 
        key={user.id}
        name={user.name}
        role={user.role}
        avatar={user.avatar}
        />
      ))}
    </div>
  );
}

export default App
