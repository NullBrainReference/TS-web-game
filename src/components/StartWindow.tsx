import React, { useState } from "react";
import { Player } from "../models/Player";
import { PlayerSetter } from "../models/PlayerSetter";
import UnitChooser from "./UnitChooser";

interface StartWindowProps {
    start: () => void
    setPlayers: (players: Player[]) => void
}

const StartWindow: React.FC<StartWindowProps> = ({start, setPlayers}) => {
    let [playerSetter, setPlayerSetter] = useState(
        new PlayerSetter([new Player("player_Vasya", 0), new Player("player_Petya", 1)], 0)
    )

    function endChoosing(){
        setPlayers(playerSetter.players);
        start();
    }

    return(
        <div>
            <UnitChooser playerSetter={playerSetter} endChoosing={endChoosing}/>
        </div>
    )
}

export default StartWindow