"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enemy = void 0;
class Enemy {
    Name;
    Health;
    Attack;
    Defense;
    constructor(Name, Health, Attack, Defense) {
        this.Name = Name;
        this.Health = Health;
        this.Attack = Attack;
        this.Defense = Defense;
    }
    getName() {
        return this.Name;
    }
    setName(newName) {
        this.Name = newName;
    }
    getHealth() {
        return this.Health;
    }
    setHealth(newHealth) {
        if (newHealth < 0 || newHealth > 100) {
            console.log(`
===============================================================
The life you try to apply is less than zero or greater than 100
===============================================================`);
        }
        else {
            this.Health = newHealth;
        }
    }
    getAttack() {
        return this.Attack;
    }
    setAttack(newAttack) {
        if (newAttack < 0 || newAttack > 100) {
            console.log(`
===============================================================
The life you try to apply is less than zero or greater than 100
===============================================================`);
        }
        else {
            this.Attack = newAttack;
        }
    }
    getDefense() {
        return this.Defense;
    }
    setDefense(newDefense) {
        if (newDefense < 0 || newDefense > 100) {
            console.log(`
===============================================================
The life you try to apply is less than zero or greater than 100
===============================================================`);
        }
        else {
            this.Defense = newDefense;
        }
    }
}
exports.Enemy = Enemy;
