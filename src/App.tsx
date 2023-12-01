import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"; // Asegúrate de importar 'Routes'

import BottomNavbar from "./BottomNavbar/BottomNavbar";
import BottomNavbarV2 from "./BottomNavbarV2/BottomNavbar";
import BottomNavbarV3 from "../src/BottomNavbar/BottomNavbarV3/BottomNavbarV3";
import "./App.css";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Router>
      <div className="web">
        <Routes>
          <Route path="/v1" element={<BottomNavbar />} />
          <Route path="/v2" element={<BottomNavbarV2 />} />
          <Route
            path="/v3"
            element={
              <BottomNavbarV3
                setDrawerOpen={setDrawerOpen}
                drawerOpen={drawerOpen}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
