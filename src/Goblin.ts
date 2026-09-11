import { Enemy } from "./Enemy";

export class Goblin extends Enemy{
    //Parameters that each enemy has
    private canMoreDemageOnNight : boolean = true;
    private resistAttacksBelow : number = 15;
    private canStealGold : boolean = true;
    private callForBackup : boolean = true;
    private specialSkill : string = "to run away with little health";

    constructor(Name: string, Health: number, Attack: number, Defense: number) {
		super(Name,Health,Attack,Defense)

	}

    //Methods only to parameters for each enemy
    public getCanMoreDemageOnNight():boolean{
        return this.canMoreDemageOnNight
    }

    public getResistAttacksBelow():number{
        return this.resistAttacksBelow
    }

    public getCanStealGold():boolean{
        return this.canStealGold
    }

    public getCallForBackup():boolean{
        return this.callForBackup
    }

    public getSpecialSkill():string{
        return this.specialSkill
    }
}