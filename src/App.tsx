import BottomNavbar from "./BottomNavbar/BottomNavbar";
import BottomNavbarV2 from "./BottomNavbarV2/BottomNavbar";
import BottomNavbarV3 from "../src/BottomNavbar/BottomNavbarV3/BottomNavbarV3";
// import BottomNavbarV4 from "./BottomNavbarV4/BottomNavbar";
// import image from './assets/icons/IMG_3845 (1).jpg';
import './App.css'
import { useState } from "react";

function App() {
  const [version, setVersion] = useState("V2")
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Función de devolución de llamada para manejar el cambio de active
  const handleActiveChange = (activeValue: any) => {
    setIsNavbarExpanded(activeValue);
    console.log("activeValue", isNavbarExpanded);
  };
  return (
    <div className="web ">

      {/* <div className={drawerOpen ? 'blur-background' : ''}>
        <img src={image} alt="dfasd" width={400} height={750} />
      </div> */}
      <div className="versions">
        <button className={version === "V1" ? "activeVersion" : ""} onClick={() => setVersion("V1")}>Version 1</button>
        <button className={version === "V2" ? "activeVersion" : ""} onClick={() => setVersion("V2")}>Version 2</button>
        <button className={version === "V3" ? "activeVersion" : ""} onClick={() => setVersion("V3")}>Version 3</button>
        {/* <button className={version === "V4" ? "activeVersion" : ""} onClick={() => setVersion("V4")}>Version 4</button> */}
      </div>

      {version === "V1" && <BottomNavbar />}
      {version === "V2" && <BottomNavbarV2 />}
      {version === "V3" && <BottomNavbarV3 setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen}/>}
      {/* {version === "V4" && <BottomNavbarV2 />} */}
    </div>
  )
}

export default App;