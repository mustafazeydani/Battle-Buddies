import {
    dataFriend,
    dataEnemy,
    resetData
} from "./data.js"
import Character from "./character.js"
import {
    getMatchedCard,
    getFightScreenHtml,
    getMainMenuHtml,
    delay,
    renderRules,
    cardsLeft,
    gradients
} from "./utils.js"

const content = document.getElementById('content')
const rules = document.getElementById('rules')
const viewCard = document.getElementById('view-card-container')
const turn = document.getElementById("turn-p")

let myTurn = Math.random() < 0.5

let deck, deckEnemy, slot, slotEnemy, currSlot, currSlotEnemy, viewCardstatus // elements to be defined after render
let uuid = null,
    toggledCard = null,
    fighting = null,
    currRule = 1,
    friendScr = 0,
    enemyScr = 0
let friendlyCard = {},
    enemyCard = {}

renderMainMenu()

document.addEventListener('click', (e) => {
    if (e.detail === 2) { // Double Click
        if (e.target.closest('[data-uuid]')) {
            uuid = e.target.closest('[data-uuid]').dataset.uuid
            viewCard.innerHTML = getCardHtml(uuid)
            viewCard.parentNode.style.display = "block"
            viewCardstatus = true
        } else if (e.target.closest("#card-slot-enemy") && slotEnemy.innerHTML) {
            viewCard.innerHTML = constructHtml(currSlotEnemy)
            viewCard.parentNode.style.display = "block"
            viewCardstatus = true
        } else if (e.target.closest("#card-slot") && slot.innerHTML) {
            viewCard.innerHTML = constructHtml(currSlot)
            viewCard.parentNode.style.display = "block"
            viewCardstatus = true
        } else if (e.target.closest('#view-card-container')) {
            viewCard.parentNode.style.display = "none"
            viewCardstatus = false
        }
    }
    if (e.target.id === "start") {
        renderFightScreen()
        if (currRule)
            renderRules(currRule)
        else
            startGame()
    } else if (e.target.id === "next-btn") {
        currRule++
        renderRules(currRule)
    } else if (e.target.id === "skip-btn") {
        rules.style.display = "none"
        currRule = 0
        startGame()
    } else if (e.target.id === "back-btn") {
        currRule--
        renderRules(currRule)
    } else if (e.target.closest('[data-uuid]') && myTurn && !fighting) { // Toggle on click
        uuid = e.target.closest('[data-uuid]').dataset.uuid
        if (!getMatchedCard(uuid).used) {
            slot.innerHTML = getCardHtml(uuid)
            currSlot = friendlyCard
            toggleCard(uuid)
        }
    } else if (e.target.id === "select" && toggledCard && !fighting) {
        if (slotEnemy.innerHTML) { // Enemy already chose, Fight! myTurn === true
            fighting = true
            renderPopup()
            setTimeout(() => {
                startFight()
            }, 1500)
        } else { // I chose first
            myTurn = false
            renderPopup()
            setTimeout(() => {
                slotEnemy.innerHTML = getEnemyCardHtml()
                setTimeout(() => {
                    fighting = true
                    renderPopup()
                    setTimeout(() => {
                        startFight()
                    }, 1500)
                }, 1000)
            }, 2000)
        }
    }
})

async function startFight() {
    friendlyCard.used = enemyCard.used = true
    const scoreEnemy = document.getElementById("score-enemy")
    const scoreFriend = document.getElementById("score-friend")
    const lastTurn = myTurn // if true, last time enemy picked first. If false, then I picked first
    const friend = new Character(friendlyCard),
        enemy = new Character(enemyCard)

    scoreEnemy.style.display = "none"
    scoreFriend.style.display = "none"

    slot.innerHTML = constructHtml(friendlyCard, "friend")
    slotEnemy.innerHTML = constructHtml(enemyCard, "enemy")
    friend.setHealthBar("friend")
    enemy.setHealthBar("enemy")

    const roundResult = await fight()

    async function fight() {
        while (!friend.dead && !enemy.dead) {
            const friendAtk = friend.setDamage(enemy.cardAttribute)
            const enemyAtk = enemy.setDamage(friend.cardAttribute)
            friend.takeDamage(enemyAtk)
            enemy.takeDamage(friendAtk)
            displayDmg(friendAtk, "enemy", friend.crit)
            await displayDmg(enemyAtk, "friend", enemy.crit)
            friend.crit = enemy.crit = false
        }
        if (friend.dead && enemy.dead)
            return "draw"
        else if (friend.dead) {
            enemyScr++
            return "enemy"
        } else {
            friendScr++
            return "friend"
        }
    }
    async function displayDmg(playerAtk, side, crit) {
        const damageText = document.getElementById(`damage-${side}`)
        damageText.textContent = "- " + playerAtk
        if (crit)
            damageText.classList.add("critical-hit")
        await delay(200)
        void damageText.offsetWidth;
        damageText.style.opacity = 1;
        damageText.style.visibility = "visible";
        await delay(750)
        side === "friend" ? friend.setHealthBar(side) : enemy.setHealthBar(side)
        playAnimation(side)
        damageText.style.opacity = 0
        damageText.style.transform = "translate(-50%, -120%)"
        await delay(750)
        damageText.style.visibility = "hidden"
        damageText.style.opacity = 0
        damageText.style.transform = "translate(-50%, 35%)"
        if (crit)
            damageText.classList.remove("critical-hit")
    }
    await delay(1000)
    if (roundResult === "friend")
        scoreFriend.textContent = friendScr
    else if (roundResult === "enemy")
        scoreEnemy.textContent = enemyScr
    await renderPopup(roundResult)
    scoreEnemy.style.display = "block"
    scoreFriend.style.display = "block"
    await delay(1000)
    fighting = false
    resetSlots()
    if (cardsLeft()) { // Continue
        lastTurn ? myTurn = true : myTurn = false // if last turn was not my turn (lastTurn==true) then it is my turn to pick first
        await renderPopup()
        if (!myTurn) {
            await delay(500)
            slotEnemy.innerHTML = getEnemyCardHtml()
            await delay(1000)
            myTurn = true
            renderPopup()
        }
    } else { // End Game
        renderEndGame(friendScr, enemyScr)
    }
}

function startGame() {
    renderPopup()
    setTimeout(() => {
        if (!myTurn) {
            setTimeout(() => {
                slotEnemy.innerHTML = getEnemyCardHtml()
                setTimeout(() => {
                    myTurn = true
                    renderPopup()
                }, 1000)
            }, 500)
        }
    }, 1500)
}

function renderEndGame(friendScr, enemyScr) {
    const endGameResult = document.getElementById('end-game-result')
    document.getElementById('end-game-score').textContent = `${enemyScr} : ${friendScr}`

    if (friendScr > enemyScr) {
        endGameResult.textContent = "You Won!"
        endGameResult.style.background = gradients.friend
    } else if (friendScr < enemyScr) {
        endGameResult.textContent = "You Lost!"
        endGameResult.style.background = gradients.enemy
    } else {
        endGameResult.textContent = "Draw"
        endGameResult.style.background = gradients.draw
    }

    document.getElementById('end-game').style.display = 'flex'
    document.addEventListener('click', (e) => {
        if (e.target.id === "rematch-btn") {
            document.getElementById('end-game').style.display = 'none'
            renderFightScreen()
            startGame()
        } else if (e.target.id === "return-btn") {
            document.getElementById('end-game').style.display = 'none'
            renderMainMenu()
        }
    })
}

function resetGame() {
    myTurn = Math.random() < 0.5
    friendScr = 0
    enemyScr = 0
    resetData()
}

function resetSlots() {
    toggledCard.classList.remove("card-active")
    toggledCard = null
    slot.innerHTML = ""
    slotEnemy.innerHTML = ""
    deck.innerHTML = getDeckHtml(dataFriend)
    deckEnemy.innerHTML = getDeckHtml(dataEnemy, "enemy")
}

function renderFightScreen() {
    resetGame()
    content.innerHTML = getFightScreenHtml()
    deck = document.getElementById('deck')
    deckEnemy = document.getElementById('deck-enemy')
    slot = document.getElementById('card-slot')
    slotEnemy = document.getElementById('card-slot-enemy')

    deck.innerHTML = getDeckHtml(dataFriend)
    deckEnemy.innerHTML = getDeckHtml(dataEnemy, "enemy")
}

function renderMainMenu() {
    content.innerHTML = getMainMenuHtml()
}

async function renderPopup(result) {
    if (viewCardstatus) {
        viewCard.parentNode.style.display = "none"
        viewCardstatus = false
    }

    if (result) {
        if (result === "enemy") {
            turn.textContent = "Enemy Wins!"
            turn.parentNode.style.background = gradients.enemy
        } else if (result === "friend") {
            turn.textContent = "You Win!"
            turn.parentNode.style.background = gradients.friend
        } else {
            turn.textContent = "Draw"
            turn.parentNode.style.background = gradients.draw
        }
    } else {
        if (fighting) {
            turn.textContent = "Fight!"
            turn.parentNode.style.background = gradients.fight
        } else if (!myTurn) {
            turn.textContent = "Enemey's Turn"
            turn.parentNode.style.background = gradients.enemy
        } else {
            turn.textContent = "Your Turn"
            turn.parentNode.style.background = gradients.friend
        }
    }
    turn.parentNode.parentNode.style.display = "flex"
    await delay(1500)
    turn.parentNode.parentNode.style.display = "none"
}

function getEnemyCardHtml() {
    const unusedArr = dataEnemy.filter(card => !card.used)
    if (!slot.innerHTML) // If opponent didn't choose, choose a random card. 
        enemyCard = unusedArr[Math.floor(Math.random() * unusedArr.length)]
    else {
        let matchedArr = unusedArr.filter((card) => { // Choose a card that has a higher level than opponent
            return card.level > friendlyCard.level
        })
        if (!matchedArr.length) { // If there are no higher level cards, choose a card that is the same level or one level below (It should be a counter-attribute card)
            matchedArr = unusedArr.filter((card) => {
                return ((card.level === friendlyCard.level || card.level === friendlyCard.level - 1) &&
                    ((card.cardAttribute.name === "Water" && friendlyCard.cardAttribute.name === "Fire") ||
                        (card.cardAttribute.name === "Fire" && friendlyCard.cardAttribute.name === "Wind") ||
                        (card.cardAttribute.name === "Wind" && friendlyCard.cardAttribute.name === "Light") ||
                        (card.cardAttribute.name === "Light" && friendlyCard.cardAttribute.name === "Water")))
            })
        }
        if (matchedArr.length > 1) { // Found more than one card
            enemyCard = matchedArr.reduce((prev, curr) => {
                return prev.level < curr.level && (prev.atk > friendlyCard.atk || prev.def > friendlyCard.def) ? prev : curr
            })
        } else if (matchedArr.length === 1) { // Found only one card
            enemyCard = matchedArr[0]
        } else { // No matched card (Choose weakest card)
            enemyCard = dataEnemy.reduce((prev, curr) => prev.level < curr.level ? prev : curr)
        }
    }
    currSlotEnemy = enemyCard
    return constructHtml(enemyCard)
}

function getCardHtml(uuid) {
    friendlyCard = getMatchedCard(uuid)
    return constructHtml(friendlyCard)
}

function getDeckHtml(data, side) {
    let deckHtml = ""
    if (side === "enemy") {
        data.forEach((card) => {
            deckHtml += `
            <div class="deck-card ${card.used?"grayscale":""}">
                <div class="card-container">
                    <img class="card-template" src=${card.back}>
                </div>
            </div>
            `
        })
    } else {
        data.forEach(card => {
            deckHtml += `<div class="deck-card ${card.used?"grayscale":""}" data-uuid="${card.uuid}">`
            deckHtml += constructHtml(card)
            deckHtml += "</div>"
        })
    }
    return deckHtml
}


function constructHtml(card, side) {
    function getInFaceHtml() {
        return `<div id="health-bar">
                    <div id="bar-${side}" class="bar"></div>
                    <p id="health-${side}" class="health"></p>
                </div>
                <div class="animation">
                    <div id=sprite-${side} class="sprite"></div>
                </div>
                `
    }
    const {
        cardType,
        title,
        cardAttribute,
        level,
        face,
        charType,
        description,
        atk,
        def
    } = card
    const {
        srcAttr
    } = cardAttribute
    const {
        name,
        srcType
    } = cardType
    let cardHtml = `
        <div class="card-container flexFont">
            <img class="card-template" src=${srcType}>
            <div class="card-header">
                <nobr class="card-title ${name==="Xyz"?"white":""}">${title}</nobr>
                <img class="card-type" src=${srcAttr}>
            </div>
            
            <div class="card-star ${name==="Xyz"?"flex-start":""}">
            `
    for (let i = 0; i < level; i++) {
        cardHtml += `<img class="card-star-level" 
                                  src="${name==="Xyz"?
                                  "./assets/card/rank-star.webp":
                                  "./assets/card/star.webp"}">
                            </img>`
    }
    cardHtml +=
        `
            </div>
            <img class="card-face" src=${face}>
            ${side?getInFaceHtml():""}
            <div class="card-description">
                <p class="card-monster-type">${charType}</p>
                <p class="card-monster-description">${description}</p>
            </div>
            <p class="card-monster-atk">${atk}</p>
            <p class="card-monster-def">${def}</p>
        </div>
    `
    return cardHtml
}

function toggleCard(uuid) {
    if (toggledCard)
        toggledCard.classList.remove("card-active")
    toggledCard = document.querySelector(`[data-uuid="${uuid}"]`)
    toggledCard.classList.add("card-active")
}

function playAnimation(side) {
    const sprite = document.getElementById(`sprite-${side}`);
    let typeObj = {}
    if (side === "friend") {
        typeObj = enemyCard.cardAttribute
    } else {
        typeObj = friendlyCard.cardAttribute
    }
    sprite.style.backgroundImage = `url(${typeObj.animation})`
    sprite.style.backgroundPosition = typeObj.frame * 100 + "% 0"
    sprite.style.backgroundSize = typeObj.frame * 100 + "%"
    sprite.style.animation = `play ${typeObj.duration}s steps(${typeObj.frame})`
    sprite.classList.add('animate');
    sprite.addEventListener('animationend', () => {
        sprite.classList.remove('animate');
        sprite.style.backgroundImage = ""
        sprite.style.animation = ""
    });
}