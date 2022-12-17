import React, { useEffect, useState } from "react";
import UnitCard from "./UnitCard";
import { UnitBase } from "../models/units/UnitBase";
import { UnitMage } from "../models/units/UnitMage";
import { PlayerSetter } from "../models/PlayerSetter";
import { UnitChaser } from "../models/units/UnitChaser";
import { UnitSniper } from "../models/units/UnitSniper";
import { UnitKing } from "../models/units/UnitKing";

interface ChooserProps {
    playerSetter: PlayerSetter;
    endChoosing: () => void;
}

const UnitChooser: React.FC<ChooserProps> = ({playerSetter, endChoosing}) => {
    const [units, setUnits] = useState([
        new UnitMage(0),
        new UnitChaser(1),
        new UnitSniper(2),
        new UnitKing(3),
        new UnitMage(4),
        new UnitBase(5)
    ])

    useEffect(() => {
        
    })

    function setGameWindow(){
        playerSetter.endSetting();
        playerSetter.players.map(player => {player.units.map(unit => {unit.setPlayer(player)})});
        endChoosing();
    }

    function click(unit: UnitBase | null) : void{
        console.log("Clicked");
        if(!unit) return;

        playerSetter.addUnit(unit);
        console.log(playerSetter.getCurrPlayer().units);

        if(units.length <= 1){
            setUnits([]);
            setGameWindow()
            return;
        }

        const index = units.indexOf(unit, 0);

        if(index === -1) return;

        let unitsCopy: UnitBase[] = [];

        for(let i = 0; i < units.length; i++){
            if(i !== index){
                unitsCopy.push(units[i]);
            }
        }
        console.log(unitsCopy);
        setUnits(unitsCopy);
        
    }

    return(
        <div className="ChooserLayout">
            {units.map(unit => 
                <UnitCard key={unit.id} id={"u_"+unit.id} unit={unit} click={(e) => click(e)}/>
            )}
        </div>
    )
}

export default UnitChooser