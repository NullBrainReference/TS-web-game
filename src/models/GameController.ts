import { BattleController } from "./BattleController";
import { Player } from "./Player";
import { TurnController } from "./TurnController";
import { UnitBase } from "./units/UnitBase";

export class GameController{
    turnController: TurnController;
    battleController: BattleController;
    players: Player[];
    isOver: boolean;
    winPrice: number;

    constructor(players: Player[], turn: number, slot_0: UnitBase | null, slot_1: UnitBase | null){
        this.turnController = new TurnController(turn);
        this.battleController = new BattleController(slot_0, slot_1);
        this.players = players;
        this.isOver = false;

        this.winPrice = 60;
    }

    checkConditions(): boolean {
        if(this.players.length < 2) return false;
        if(this.players[0].money > this.winPrice) {
            return true;
        }
        if(this.players[1].money > this.winPrice) {
            return true;
        }
        return false;
    }

    gameOver() {
        if(this.checkConditions()) this.isOver = true;
    }

    move() {
        this.turnController.addTurn();
    }

    getCurrentPlayer() {
        return this.players[this.turnController.turn];
    }
}