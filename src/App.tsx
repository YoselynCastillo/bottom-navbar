import BottomNavbar from "./BottomNavbar/BottomNavbar";
import "./App.css";
import { useState } from "react";
import image from './assets/icons/IMG_3845 (1).jpg';
function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="App">
      <div className={drawerOpen ? 'blur-background' : ''}>
        <img src={image} alt="dfasd" width={400} height={700} />
      </div>
      <BottomNavbar setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen}/>
    </div>
  );
}

export default App;
