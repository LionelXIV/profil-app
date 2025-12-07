import React, { useState } from "react";
import ProfilEnfant from "./ProfilEnfant";

/*
*[bleu] ProfilParent = PARENT qui contient l'état (state).
*[orange] Ici on crée le state 'age' avec useState(18).
*[orange] age = valeur actuelle ; setAge = fonction pour modifier age.
*/
export default function ProfilParent() {
  const [age, setAge] = useState(18); // *[orange] state local au parent, initialisé à 18*

  // *[violet] fonction que l'on passera en prop à l'enfant pour demander la mise à jour*
  const augmenterAge = () => setAge(prev => prev + 1);

  // *[violet] fonction pour diminuer (exemple)*
  const diminuerAge = () => setAge(prev => Math.max(prev - 1, 0));

  // *[gris] ici on envoie 3 props à l'enfant : nom, age, onAgeUp*
  return (
    <div>
      {/* *[vert] zone d'information dans le parent* */}
      <p>Parent : ici se trouve le state <strong>age</strong>.</p>
      <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
        {/* *[jaune] boutons dans le parent qui modifient aussi le state directement* */}
        <button onClick={augmenterAge}>+1 (Parent)</button>
        <button onClick={diminuerAge}>-1 (Parent)</button>
      </div>

      {/* *[rose] Enfant reçoit des props : nom, age, onAgeUp* */}
      <ProfilEnfant nom="Lionel" age={age} onAgeUp={augmenterAge} />
    </div>
  );
}
