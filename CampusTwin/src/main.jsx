import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import  "./styles/layout.css";
import  "./styles/dashboard.css";
import  "./styles/responsive.css";
ReactDom.createRoot(document.getElementById("root")).render(<React.StrictMode>
  <App />
</React.StrictMode>
);