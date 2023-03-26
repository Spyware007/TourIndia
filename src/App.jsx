import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Loading } from "./components/common";
import { Navbar, Footer } from "./components";
import { Homepage } from "./pages";

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log(location);
  }, [location]);

  setTimeout(() => setLoading(false), 3900);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
