import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Loading } from "./components/common";
import { Navbar, Footer } from "./components";
import { Aboutpage, Blogspage, Explorepage, Homepage, Testing } from "./pages";
import Contactpage from "./pages/Contactpage";

const App = () => {
  const [loading, setLoading] = useState(false); // Make this true
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log(location);
  }, [location]);

  setTimeout(() => setLoading(false), 2000);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/explore" element={<Explorepage />} />
            <Route path="/blogs" element={<Blogspage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/testing" element={<Testing />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
