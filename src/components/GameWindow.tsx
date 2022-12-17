import React, { useEffect, useState } from "react";
import BattleField from "./BattleField";
import PlayerCard from "./PlayerCard";
import PlayerWindow from "./PlayerWindow";
import { Player } from "../models/Player";
import { GameController } from "../models/GameController";
import { UnitBase } from "../models/units/UnitBase";

interface GameProps{
    players: Player[];
}

export const Context = React.createContext(null);

const GameWindow: React.FC<GameProps> = ({players}) => {
    const init = true;
    const [slot_0, setSlot_0] = useState<UnitBase | null>(null)
    const [slot_1, setSlot_1] = useState<UnitBase | null>(null)

    let [gameController, setController] = useState(
        new GameController(players, 0, slot_0, slot_1)
    )

    const [isWin, setWin] = useState(false);

    const callWinWindow = () => {
        setWin(true);
    }

    function move() {
        gameController.turnController.addTurn();
        const newController = new GameController(
            gameController.players,
            gameController.turnController.turn,
            slot_0,
            slot_1
        );
        setController(newController);
        console.log(gameController.getCurrentPlayer())
    }

    useEffect(() => {
        const newController = new GameController(
            gameController.players,
            gameController.turnController.turn,
            slot_0,
            slot_1
        );
        setController(newController);
    }, [slot_0, slot_1])

    return(
        <div className="GameWindowLayout" onClick={() => move()}>
            <div className="TurnText">{gameController.getCurrentPlayer().name}</div>
            {isWin ?
                <div>Win</div>
                :
                <div className="GameWindow"
                >
                    <PlayerWindow player={players[0]} slot={slot_0} setSlot={setSlot_0} gameController={gameController}/>
                        <div>
                            <BattleField 
                                slot_0={slot_0} 
                                slot_1={slot_1} 
                                setSlot_0={setSlot_0} setSlot_1={setSlot_1}
                                gameController={gameController}
                                />
                            <div className="PlayerLayout">
                                <PlayerCard player={players[0]}/>
                                <PlayerCard player={players[1]}/>
                            </div>
                        </div>
                    <PlayerWindow player={players[1]} slot={slot_1} setSlot={setSlot_1} gameController={gameController}/>
                </div>
            }
        </div>
    )
}

export default GameWindow