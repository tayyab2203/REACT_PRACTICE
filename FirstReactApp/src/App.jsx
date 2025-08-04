import "./App.css";
import Title from "./title";
import Description from "./description";


function App() {
  return (
    <div>
      <h1>I am app component</h1>
      <button>Press Me</button>
      <p>i am paragraph</p>
      <h6>below is the title, that is a seperate component but we render title component in our app component</h6>
      <Title />
      <h6>below is the description , that is a seperate component but we render description component in our app component</h6>
      <Description/>
      <Title />
      <Description/>
    </div>
  );
}

export default App;
