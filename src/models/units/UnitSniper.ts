import { UnitBase } from "./UnitBase";
import logo from "../../assets/Sniper.png";

export class UnitSniper extends UnitBase {
    constructor(id: number){
        super(id);
        this.logo = logo;
        this.name = "Sniper";
    }
}