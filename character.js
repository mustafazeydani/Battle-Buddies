import {
    getPercentage
} from "./utils.js"

class Character {
    constructor(data) {
        Object.assign(this, data)
        this.maxHealth = this.health
    }

    setDamage(oppAttr) {
        if ((this.cardAttribute.name === "Water" && oppAttr.name === "Fire") ||
            (this.cardAttribute.name === "Fire" && oppAttr.name === "Wind") ||
            (this.cardAttribute.name === "Wind" && oppAttr.name === "Light") ||
            (this.cardAttribute.name === "Light" && oppAttr.name === "Water")) {
            const randomNum = Math.floor(Math.random() * 100) + 1
            if (randomNum <= 20) {
                this.crit = true
                return this.atk * 2 + Math.floor(Math.random() * 51)
            }
        }
        return this.atk + Math.floor(Math.random() * 51)
    }

    takeDamage(attackDmg) {
        this.health -= attackDmg
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }
    }

    setHealthBar(side) {
        const percent = getPercentage(this.health, this.maxHealth)
        const bar = document.getElementById(`bar-${side}`)
        const health = document.getElementById(`health-${side}`)
        health.textContent = `${this.health} / ${this.maxHealth}`
        if (percent > 25 && percent <= 75)
            bar.style.background = 'rgb(215, 167, 23)'
        else if (percent <= 25)
            bar.style.background = 'rgb(215, 23, 23)'
        bar.style.width = percent + "%"
    }
}

export default Character