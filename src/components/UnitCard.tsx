import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { UnitBase } from "../models/units/UnitBase";

interface UnitProps{
    unit: UnitBase | null;
    id: string;
    click: (unit: UnitBase | null) => void
}

const UnitCard: React.FC<UnitProps> = ({unit, id, click}) => {
    const [isOccupied, setOccupied] = useState(false)

    useEffect(() => {

    }, [unit])

    function onClick(unit : UnitBase | null){
        if(!unit) return;
        click(unit);
        setOccupied(!isOccupied);
    }

    return(
        <button className="UnitCard" id={id} onClick={() => onClick(unit? unit : null)}>
            {
                unit?
                <img className="UnitImg" src={unit?.logo? unit.logo : ""} alt=""/> 
                :
                <div className="UnitSlot"/>
            }
            <div className="UnitStats">
                {unit? <div className="HealthIcon">{unit.health}</div> : ""}
                {
                    unit?
                    <div className="UnitName">{unit.name}</div>
                    :
                    <div className="UnitName">Free slot</div>
                }
                {unit? <div className="HealthIcon">{unit.damage}</div> : ""}
            </div>
        </button>
    )
}

export default UnitCard