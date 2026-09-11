"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Demon = void 0;
const Enemy_1 = require("./Enemy");
class Demon extends Enemy_1.Enemy {
    //Parameters that each enemy has
    canMoreDemageOnNight = true;
    resistAttacksBelow = 50;
    canStealGold = false;
    callForBackup = false;
    specialSkill = "dark magic";
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
    darkMagicToUse() {
        let random = Math.floor(Math.random() * 4);
        if (random === 0) {
            return `disappear`;
        }
        else if (random === 1) {
            return `invisibility`;
        }
        else if (random === 2) {
            return `half a life`;
        }
        else if (random === 3) {
            return `take an item out of the inventory`;
        }
        else {
            return ``;
        }
    }
}
exports.Demon = Demon;
