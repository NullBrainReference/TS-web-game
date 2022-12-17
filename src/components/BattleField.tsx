import React, { useEffect, useRef, useState } from "react";
import { GameController } from "../models/GameController";
import { UnitBase } from "../models/units/UnitBase";
import UnitCard from "./UnitCard";

interface BattleProps{
    slot_0: UnitBase | null;
    slot_1: UnitBase | null;
    setSlot_0: (unit: UnitBase | null) => void;
    setSlot_1: (unit: UnitBase | null) => void;
    gameController: GameController;
}

const BattleField: React.FC<BattleProps> = ({slot_0, slot_1, setSlot_0, setSlot_1, gameController}) => {
    const init = true;
    const [time, setTime] = useState(0);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)

    function startTimer() {
        if (timer.current) {
            clearInterval(timer.current)
        }
        const callback = incrementTime;
        timer.current = setInterval(callback, 1000)
    }

    useEffect(() => {
        startTimer();
    }, [init])

    useEffect(() => {
        cleanSlots();
    }, [slot_0?.isDead, slot_1?.isDead])

    useEffect(() => {
        if(time % 5 === 0) gameController.battleController.fight();
        console.log("fight " + gameController.battleController.fighter_0 + " | " + gameController.battleController.fighter_1)
    }, [time])

    const incrementTime = () => {
        setTime(prev => prev + 1)
    }

    const cleanSlots = () => {
        if(slot_0?.isDead) setSlot_0(null);
        if(slot_1?.isDead) setSlot_1(null);
    }

    const click_0 = () => {
        if(gameController.turnController.turn === 0) {
            if(!slot_0) return;
            gameController.battleController.fighter_0 = null;
            setSlot_0(null);
        }
    }
    const click_1 = () => {
        if(gameController.turnController.turn === 1) {
            if(!slot_1) return;
            gameController.battleController.fighter_1 = null;
            setSlot_1(null);
        }
    }

    return(
        <div className="BattleField">
            <UnitCard id="bu_0" unit={slot_0} click={click_0}/>
            <UnitCard id="bu_1" unit={slot_1} click={click_1}/>
        </div>
    )
}

export default BattleField