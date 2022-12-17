import { Player } from "./Player";
import { TurnController } from "./TurnController";
import { UnitBase } from "./units/UnitBase";

export class PlayerSetter {
    players: Player[];
    turnController: TurnController;
    isEnded: boolean;

    constructor(players: Player[], turn: number){
        this.players = players;
        this.turnController = new TurnController(turn);
        this.isEnded = false;
    }

    addUnit = (unit: UnitBase | null) => {
        if(!unit) return;
        this.players[this.turnController.turn].addUnit(unit);
        this.turnController.addTurn();
    }

    getCurrPlayer = (): Player => {
        return this.players[this.turnController.turn];
    }

    endSetting = () => {
        this.isEnded = true;
    }
}