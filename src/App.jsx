import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import SummaryResport from "./components/SummaryResport";
import SideMenu from "./components/SideMenu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div data-theme="cupcake" className="h-screen">
      <div className="h-screen flex flex-row basis-1">
          <SideMenu />
        <div className="flex flex-col  w-full h-full">
          <Navbar />
          <SummaryResport />
        </div>
      </div>
    </div>
  );
}

export default App;
