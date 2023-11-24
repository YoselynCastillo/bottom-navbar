import BottomNavbarV2 from "./BottomNavbarV2/BottomNavbar";
import BottomNavbarV4 from "./BottomNavbarV4/BottomNavbar";
import BottomNavbar from "./BottomNavbar/BottomNavbar";
import image from "./img/carmax.jpg";
import './App.css'
import { useState } from "react";

function App() {
  const [version, setVersion] = useState("V2")
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  // Función de devolución de llamada para manejar el cambio de active
  const handleActiveChange = (activeValue: any) => {
    setIsNavbarExpanded(activeValue);
    console.log("activeValue", isNavbarExpanded);
  };
  return (
    <div className="web ">
      <div className="versions">
        <button className={version === "V1" ? "activeVersion" : ""} onClick={() => setVersion("V1")}>Version 1</button>
        <button className={version === "V2" ? "activeVersion" : ""} onClick={() => setVersion("V2")}>Version 2</button>
        <button className={version === "V3" ? "activeVersion" : ""} onClick={() => setVersion("V3")}>Version 3</button>
        <button className={version === "V4" ? "activeVersion" : ""} onClick={() => setVersion("V4")}>Version 4</button>
      </div>

      {version === "V1" && <BottomNavbar />}
      {version === "V2" && <BottomNavbarV2 />}
      {version === "V3" && <BottomNavbarV2 />}
      {version === "V4" && <BottomNavbarV2 />}
      
      <div>
      <div className={`app-container ${isNavbarExpanded ? "blurred" : ""}`}>
        <img src={image} alt="dfasd" width={400} height={700} />
      </div>
      <BottomNavbar onActiveChange={handleActiveChange} />
      </div>
    </div>
  )
}

export default App;