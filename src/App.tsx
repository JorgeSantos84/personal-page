// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import { Box } from "@mui/material";
import Footer from "./components/Footer";

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
            <Route path="/notFoundPage" element={<NotFoundPage />} />
          </Routes>{" "}
        </Box>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
