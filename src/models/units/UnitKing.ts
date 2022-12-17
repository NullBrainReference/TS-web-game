import { UnitBase } from "./UnitBase";
import logo from "../../assets/King.png";

export class UnitKing extends UnitBase {
    constructor(id: number){
        super(id);
        this.logo = logo;
        this.name = "King";
    }
}