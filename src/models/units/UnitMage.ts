import { UnitBase } from "./UnitBase";
import logo from "../../assets/Mage.png";

export class UnitMage extends UnitBase {
    constructor(id: number){
        super(id);
        this.logo = logo;
        this.name = "Mage";
    }
}