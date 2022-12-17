import logo from "../../assets/Assasin.png";
import { Player } from "../Player";

export class UnitBase{
    id: number;
    name: string;
    logo: typeof logo | null;
    health: number;
    damage: number;
    player: Player | null;
    isDead: boolean

    constructor(id: number){
        this.id = id
        this.name = "base";
        this.logo = logo;
        this.player = null;
        this.isDead = false;

        this.health = 40;
        this.damage = 10;
    }

    setPlayer(player: Player) {
        this.player = player;
    }

    getRndAttack(): boolean {
        const rnd = Math.random()
        if(rnd>= 0.5) return true;
        return false
    }

    die() {
        if(this.health <= 0) {
            this.isDead = true;
            this.player?.removeUnit(this);
        }
    }
}