import { UnitBase } from "./UnitBase";
import logo from "../../assets/ChaseTroops.png";

export class UnitChaser extends UnitBase {
    constructor(id: number){
        super(id);
        this.logo = logo;
        this.name = "Chaser";
    }
}