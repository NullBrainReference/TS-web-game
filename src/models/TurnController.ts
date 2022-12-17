

export class TurnController{
    turn: number;

    constructor(turn: number) {
        this.turn = turn;
    }

    addTurn(){
        this.turn++;
        if(this.turn > 1) {
            this.turn = 0;
        }
    }
}