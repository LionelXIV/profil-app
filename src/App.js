import React from "react";
import ProfilParent from "./ProfilParent";

/* *[bleu] App = composant racine. Il importe et affiche le composant Parent. */
export default function App() {
  return (
    <div className="app">
      <h1 className="header">Exemple : Profil d'utilisateur (Parent → Enfant)</h1>
      <ProfilParent />
    </div>
  );
}
