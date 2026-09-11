export class Enemy{
    protected Name : string;
    protected Health : number;
    protected Attack : number;
    protected Defense : number;

	constructor(Name: string, Health: number, Attack: number, Defense: number) {
		this.Name = Name;
		this.Health = Health;
		this.Attack = Attack;
		this.Defense = Defense;
	}
    
    public getName(): string {
        return this.Name;
    }

    public setName(newName: string) : void{
        this.Name = newName;
    }

    public getHealth(): number {
        return this.Health;
    }

    public setHealth(newHealth: number) : void{
        if(newHealth < 0 || newHealth > 100){
            console.log(`
===============================================================
The life you try to apply is less than zero or greater than 100
===============================================================`)
        } else{
            this.Health = newHealth;
        }
    }

    public getAttack(): number {
        return this.Attack;
    }

    public setAttack(newAttack: number) : void{
        if(newAttack < 0 || newAttack > 100){
            console.log(`
===============================================================
The life you try to apply is less than zero or greater than 100
===============================================================`)
        } else{
            this.Attack = newAttack;
        }
    }

    public getDefense(): number {
        return this.Defense;
    }

    public setDefense(newDefense: number) : void{
        if(newDefense < 0 || newDefense > 100){
            console.log(`
===============================================================
The life you try to apply is less than zero or greater than 100
===============================================================`)
        } else{
            this.Defense = newDefense;
        }
    }
}