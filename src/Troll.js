"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Troll = void 0;
const Enemy_1 = require("./Enemy");
class Troll extends Enemy_1.Enemy {
    //Parameters that each enemy has
    canMoreDemageOnNight = false;
    resistAttacksBelow = 25;
    canStealGold = false;
    callForBackup = false;
    specialSkill = "regenerate life";
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
    regenerateLife() {
        let random = Math.floor(Math.random() * 21);
        if (random === 8) {
            this.Health += 25;
            console.log(`
                The TROLL just got health back, HAHAHHA`);
        }
        else if (random === 15) {
            this.Health += 25;
            console.log(`
                The TROLL just got health back, HAHAHHA`);
        }
        else {
        }
    }
}
exports.Troll = Troll;
