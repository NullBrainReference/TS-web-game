import React, { useEffect, useState } from "react";
import { Player } from "../models/Player";

interface PlayerCardProps{
    player: Player | null;
}

const PlayerCard: React.FC<PlayerCardProps> = ({player}) => {

    const [money, setMoney] = useState(player?.money);

    const updateTrigger = () => {
        setMoney(player?.money);
        console.log("update trigger")
    }

    useEffect(() => {
        console.log("USED ON PLAYER")
        if(player) player.updateTrigger = updateTrigger;
    }, [player])

    useEffect(() => {
        
    }, [money])

    return(
        <div className="UnitCard">
            {
                player?
                <img className="UnitImg" src={player?.logo? player.logo : ""} alt=""/> 
                :
                <div className="UnitSlot"/>
            }
            {
                player?
                <div className="UnitName">{player.name}</div>
                :
                <div className="UnitName">WHO?</div>
            }
            {
                player?
                <div className="PlayerScore">{"Points: " + money}</div>
                :
                <div className="PlayerScore">WHAT?</div>
            }
        </div>
    )
}

export default PlayerCard