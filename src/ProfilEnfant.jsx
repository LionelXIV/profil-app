import React from "react";

/*
*[bleu] ProfilEnfant = ENFANT qui reçoit des props depuis le parent.
*[rose] Props reçues : nom (string), age (number), onAgeUp (function).
*/
export default function ProfilEnfant({ nom, age, onAgeUp }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: 12,
      borderRadius: 6,
      background: "#fafafa"
    }}>
      <h2>Composant Enfant</h2>

      {/* *[vert] affichage des props (lecture seule) */}
      <p>Nom : <strong>{nom}</strong></p>
      <p>Âge : <strong>{age}</strong></p>

      {/* *[jaune] bouton qui appelle la fonction fournie par le parent */}
      <button onClick={onAgeUp}>Augmenter l'âge (appelle setAge du parent)</button>

      {/* *[gris] remarque : l'enfant n'a pas son propre state dans cet exemple */}
    </div>
  );
}
