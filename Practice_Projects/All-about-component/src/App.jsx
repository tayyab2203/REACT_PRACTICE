import UserCard from './components/UserCard/UserCard.jsx'
import image from "./assets/test.webp"
import WelcomeCard from './components/WelcomeCard'
import Button from './components/Button/Button'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer.jsx'
import './App.css'

function App() {
  return (
   <>
   <Header title="React Component Practice" subTitle="Learning props and Reusable UI" />
   <WelcomeCard name="Tayyab" message="Welcome to react component practice"/>

   <div className="user-container">
   <UserCard image={image} name="Tayyab Sajjad" bio="Frontend Developer, who love React!!!!!" />
   <UserCard image={image} name="Fazal Abbas" bio="Frontend Developer, who also love React!!!!!" />
   <UserCard image={image} name="Irfan Khan" bio="Frontend Developer, who love React!!!!!" />
   </div>
   <Button label="click Me"/>

   <Footer text="Created By Tayyab -" year={2025}/>
   </> 
  )
}

export default App
