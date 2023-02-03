import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Pads } from "./components/Pads";
import { FnPads } from "./components/FnPads";

function App() {
  const [chewie, setChewie] = useState(false);

  const handleChewie = () => {
    if (chewie) {
      setChewie(false);
    } else {
      setChewie(true);
    }
  };

  // Returns App
  return (
    <main>
      <div id="casing">
        <h1>Party time!!</h1>
        {chewie ? (
          <img src="https://github.com/vladdjpg/drum-machine/blob/main/src/resources/chewie.png?raw=true" alt="Chewie!" className="chewie" />
        ) : (
          <div></div>
        )}
        <Pads />
        <FnPads handleChewie={handleChewie} />
      </div>
      <div id="footer"><a href="https://frolov.cz">I'm sorry</a></div>
    </main>
  );
}

// Renders App to root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
