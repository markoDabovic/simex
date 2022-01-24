import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbars from "./NavBarComp";
import useDeviceDetect from "./useDeviceDetect";
import KalkulacijaDuzineTable from "./KalkulacijaDuzineTable";
import KalkulacijaTezineTable from "./KalkulacijaTezineTable";

import Home from "./Home";
function App() {
  const { isMobile } = useDeviceDetect();
  return (
    <Router>
      {/* {!isMobile && <Navbar />} */}
      <Navbars />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/duzinaTable" element={<KalkulacijaDuzineTable />} />
        <Route path="/tezinaTable" element={<KalkulacijaTezineTable />} />
        <Route path="/annual" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
