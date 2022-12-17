import logo from "../assets/JohnyGun.jpg"
import { UnitBase } from "./units/UnitBase";

export class Player {
    name: string;
    logo: typeof logo;
    turnOrder: number;
    units: UnitBase[]
    money: number;

    updateTrigger: () => void

    constructor(name: string, turnOrder: number){
        this.name = name;
        this.turnOrder = turnOrder;
        this.logo = logo;
        this.units = [];
        this.money = 0;
        this.updateTrigger = () => {console.log("default func")}
    }

    addUnit(unit: UnitBase){
        this.units.push(unit);
    }

    removeUnit(unit: UnitBase){
        let newUnits: UnitBase[] = [];

        this.units.map(item => {
            if(item.id !== unit.id) newUnits.push(item);
        })

        this.units = newUnits;
    }
}