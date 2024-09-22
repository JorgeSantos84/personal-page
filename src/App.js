// import logo from './logo.svg';
import { useEffect } from "react";
import "./App.css";
import Comentario from "./components/Comentario.jsx";
import ContadorExercicio from "./components/ContadorExercicio";
import todosComentarios from "./constants/TodosComentarios.js";

function App() {
  const apresentarComentarios = () => {
    return todosComentarios.map((coment) => (
      <Comentario
        key={coment.id} // Add a unique key prop for each element
        user={coment.userId} // Adjust if you need to convert to string
        userId={coment.userId}
        titulo={coment.title}
        corpo={coment.body}
      />
    ));
  };

  // useEffect(() => {
  //   fetch("http://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a> */}

        <ContadorExercicio />
        {apresentarComentarios()}
        <Comentario></Comentario>
      </header>
    </div>
  );
}

export default App;
