import { useState, useRef } from "react";

export default function Player() {
  const plyaerName = useRef();

  const [enterdPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    setEnteredPlayerName(plyaerName.current.value);
    plyaerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enterdPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={plyaerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
