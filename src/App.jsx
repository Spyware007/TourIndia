import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Homepage } from "./pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
