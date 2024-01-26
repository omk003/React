import { useState } from "react"

export default function Player({initialName, symbol, isActive, onChangeName}){
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    
    function handleEditing(){
        setIsEditing((editing) => !editing);
        if(isEditing){
            onChangeName(symbol, playerName);
        }
    }
    function handleChange(event){
        console.log(event)
        setPlayerName(event.target.value);
    }

    let span = <span className="player-name">{playerName}</span>
    let btnCaption = "Edit"
    if(isEditing){
        span = <input type="text" required value={playerName} onChange={handleChange}></input>
        btnCaption="Save"
    }

    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {span}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditing}>{btnCaption}</button>
          </li>
    )
}