import { Enemy } from "./Enemy";

export class Troll extends Enemy{
    //Parameters that each enemy has
    private canMoreDemageOnNight : boolean = false;
    private resistAttacksBelow : number = 25;
    private canStealGold : boolean = false;
    private callForBackup : boolean = false;
    private specialSkill : string = "regenerate life";

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

    public regenerateLife():void{
        let random : number =  Math.floor(Math.random() * 21)
        if(random === 8){
            this.Health += 25
            console.log(`
                The TROLL just got health back, HAHAHHA`)
        } else if(random === 15){
            this.Health += 25
            console.log(`
                The TROLL just got health back, HAHAHHA`)
        } else{
    
        }
    }
}