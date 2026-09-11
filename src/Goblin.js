"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Goblin = void 0;
const Enemy_1 = require("./Enemy");
class Goblin extends Enemy_1.Enemy {
    //Parameters that each enemy has
    canMoreDemageOnNight = true;
    resistAttacksBelow = 15;
    canStealGold = true;
    callForBackup = true;
    specialSkill = "to run away with little health";
    constructor(Name, Health, Attack, Defense) {
        super(Name, Health, Attack, Defense);
    }
    //Methods only to parameters for each enemy
    getCanMoreDemageOnNight() {
        return this.canMoreDemageOnNight;
    }
    getResistAttacksBelow() {
        return this.resistAttacksBelow;
    }
    getCanStealGold() {
        return this.canStealGold;
    }
    getCallForBackup() {
        return this.callForBackup;
    }
    getSpecialSkill() {
        return this.specialSkill;
    }
}
exports.Goblin = Goblin;
