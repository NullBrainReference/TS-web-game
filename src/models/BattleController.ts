import { UnitBase } from "./units/UnitBase";


export class BattleController{
    fighter_0: UnitBase | null;
    fighter_1: UnitBase | null;

    win: () => void;

    constructor(slot_0: UnitBase | null, slot_1: UnitBase | null){
        this.fighter_0 = slot_0;
        this.fighter_1 = slot_1;
        this.win = () => {};
    }

    fight() {
        if(!this.fighter_0 && this.fighter_1) this.dig(this.fighter_1);
        else if(this.fighter_0 && !this.fighter_1) this.dig(this.fighter_0);

        if (!this.fighter_0) return;
        if (!this.fighter_1) return;

        if(this.fighter_1.getRndAttack()) {
            this.fighter_0.health -= this.fighter_1.damage;
            this.fighter_0.die();
        }
        if(this.fighter_0.getRndAttack()) {
            this.fighter_1.health -= this.fighter_0.damage;
            this.fighter_1.die();
        }
    }

    dig(slot: UnitBase){
        if(!slot.player) return;

        slot.player.money += 5;
        slot.player.updateTrigger();
        console.log(slot.player.money);
    }

    placeFighter(slot: number, unit: UnitBase | null){
        if(slot === 0) this.fighter_0 = unit;
        else if(slot === 1) this.fighter_1 = unit;
    }
}