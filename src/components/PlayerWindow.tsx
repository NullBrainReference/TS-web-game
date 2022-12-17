import React, { useEffect, useState } from "react";
import UnitCard from "./UnitCard";
import { UnitBase } from "../models/units/UnitBase";
import { Player } from "../models/Player";
import { GameController } from "../models/GameController";

interface PlayerProps{
    player: Player;
    slot: UnitBase | null;
    setSlot: (unit: UnitBase | null) => void;
    gameController: GameController;
}

const PlayerWindow: React.FC<PlayerProps> = ({player, slot, setSlot, gameController}) => {
    const [units, setUnits] = useState<(UnitBase | null)[]>(player.units)

    const click = (unit: UnitBase | null) => {
        if(!unit) return;
        if(slot) return;
        setSlot(unit);
        gameController.battleController.placeFighter(gameController.turnController.turn, unit);
        console.log("fighter from click " + gameController.battleController.fighter_0)
        console.log(gameController.battleController.fighter_0)
        replaceUnit(unit.id);
    }

    function replaceUnit(id: number) {
        let newUnits = []
        for (let i = 0; i < units.length; i++) {
            if(units[i] === null) return;
            if(id === units[i]?.id) newUnits.push(null);
            else newUnits.push(units[i]);
        }
        setUnits(newUnits);
    }

    function switchOnSlotNull(){
        if(slot === null){
            let unitsCopy = []
            for (let i = 0; i < 3; i++) {
                if(player.units.length < i) unitsCopy.push(null);
                else unitsCopy.push(player.units[i])                
            }
            console.log(unitsCopy);
            setUnits(unitsCopy);
        }
    }

    useEffect(() => {
        switchOnSlotNull();
    }, [slot])

    return(
        <div className="PlayerWindow">
            {units.map(unit => 
                <UnitCard 
                    key={"card_" + unit?.id} 
                    id={"c_" + unit?.id} unit={unit} 
                    click={e => click(e)}
                />
            )}
        </div>
    )
}

export default PlayerWindow