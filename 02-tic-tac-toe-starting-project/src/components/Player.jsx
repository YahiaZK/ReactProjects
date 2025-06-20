import { useState } from "react";
import React from 'react';

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = React.useState(false);


  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let editablePlayerNameInput = (
    <input type="text" required value={playerName} onChange={handleChange} />
  );

  return (
    <li>
      <span className="player">
        {isEditing ? editablePlayerNameInput : editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
