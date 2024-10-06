// import logo from './logo.svg';
import "./App.css";
import Comentario from "./components/Comentario.jsx";
import todosComentarios from "./constants/TodosComentarios.js";
import Header from "./components/Header.jsx";
import MainPage from "./components/MainPage.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage.jsx";
import { Box } from "@mui/material";
import Footer from "./components/Footer.jsx";

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

  return (
    <Router>
      <div
        className="App fixed-background"
        style={{
          flexDirection: "column",
          display: "flex",
          minHeight: "100vh",
        }}
      >
        <Header></Header>
        <Box
          style={{
            flex: 1,
          }}
        >
          <Routes>
            <Route path="/personal-page" element={<MainPage />} />
            <Route path="/notFoundPage" element={<NotFoundPage />} />
          </Routes>{" "}
        </Box>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
