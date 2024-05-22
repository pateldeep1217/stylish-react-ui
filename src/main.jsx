import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GlobalStyles from "./components/GlobalStyles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
);
