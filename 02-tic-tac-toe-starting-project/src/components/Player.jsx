import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(!isEditing);
  }

  let playerName = <span className="player-name">{name}</span>;
  let playerNameInput = <input type="text" required />;

  return (
    <li>
      <span className="player">
        {isEditing ? playerNameInput : playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}
