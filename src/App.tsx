// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import WorkInfoPage from "./components/WorkInfoPage";
import ContactsPage from "./components/ContactsPage";
import TechSkillsPage from "./components/TechSkillsPage";
import SnakePage from "./components/SnakePage";
import EducationPage from "./components/EducationPage";

function App() {
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
            <Route path="/work-experience" element={<WorkInfoPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/tech-skills" element={<TechSkillsPage />} />
            <Route path="/snake-game" element={<SnakePage />} />
            <Route path="/education" element={<EducationPage />} />
          </Routes>
        </Box>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
