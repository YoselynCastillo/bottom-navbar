import React, { useState } from "react";
import BottomNavbar from "./BottomNavbarV4/BottomNavbar";
import "./App.css"; // Asegúrate de importar el archivo CSS aquí
import image from "./img/carmax.jpg";

function App() {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  // Función de devolución de llamada para manejar el cambio de active
  const handleActiveChange = (activeValue: any) => {
    setIsNavbarExpanded(activeValue);
    console.log("activeValue", isNavbarExpanded);
  };

  return (
      <div>
      <div className={`app-container ${isNavbarExpanded ? "blurred" : ""}`}>
        <img src={image} alt="dfasd" width={400} height={700} />
      </div>
      <BottomNavbar onActiveChange={handleActiveChange} />
      </div>
    
  );
}

export default App;
