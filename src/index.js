import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar.jsx";

ReactDOM.render(
  <React.StrictMode>
    <SearchBar />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
