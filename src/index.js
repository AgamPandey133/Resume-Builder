import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Find the root element from public/index.html
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render App component inside it
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
