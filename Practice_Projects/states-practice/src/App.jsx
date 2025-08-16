
import './App.css'
import Counter from './components/counter/count'
import LikeBtn from './components/likeButton/LikeButton'
import LearnMap from './components/learnMap'
import MapPractice from './components/MapPractice'
import StudentMapPractice from './components/studentMapPractice'
import TodoListMapPractice from './components/TodoListMapPractice'

function App() {
  
  return (
    <>

     {/* <Counter /> */}
     <LikeBtn />
     {/* <LearnMap /> */}
     <MapPractice />
     <StudentMapPractice />
     <TodoListMapPractice />
    </>
  )
}

export default App
