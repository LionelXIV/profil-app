import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

/* [bleu] point d'entrée : React "monte" le composant <App /> dans #root du HTML */
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
