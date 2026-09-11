import { Enemy } from "./Enemy";

export class Demon extends Enemy{
    //Parameters that each enemy has
    private canMoreDemageOnNight : boolean = true;
    private resistAttacksBelow : number = 50;
    private canStealGold : boolean = false;
    private callForBackup : boolean = false;
    private specialSkill : string = "dark magic";

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

    public darkMagicToUse():string{
        let random : number =  Math.floor(Math.random() * 4)
        
        if(random === 0){
            return `disappear`
        }else if(random === 1){
            return `invisibility`
        } else if(random === 2){
            return `half a life`
        } else if(random === 3){
            return `take an item out of the inventory`
        } else{
            return ``
        }
    }

}