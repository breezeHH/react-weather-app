import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://de.linkedin.com/in/kathrin-hesse-0b6215129"
            target="_blank"
            rel="noreferrer"
          >
            Kathrin
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/breezeHH/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
