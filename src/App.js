import logo from "./logo.svg";
import "./App.css";

import { useState, useEffect } from "react";
import Home from "./pages/Home";
function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="App">
     <div>
<Home/>


     </div>
    </div>
  );
}

export default App;
