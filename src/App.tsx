import BottomNavbarV2 from "./BottomNavbarV2/BottomNavbar";
import BottomNavbar from "./BottomNavbar/BottomNavbar";
import './App.css'
import { useState } from "react";

function App() {
  const [version, setVersion] = useState("V2")

  return (
    <div className="web ">
      <div className="versions">
        <button onClick={() => setVersion("V1")}>Version 1</button>
        <button onClick={() => setVersion("V2")}>Version 2</button>
        <button onClick={() => setVersion("V3")}>Version 3</button>
        <button onClick={() => setVersion("V4")}>Version 4</button>
      </div>
      {version === "V1" && <BottomNavbar />}
      {version === "V2" && <BottomNavbarV2 />}
      {version === "V3" && <BottomNavbarV2 />}
      {version === "V4" && <BottomNavbarV2 />}
    </div>
  )
}

export default App
