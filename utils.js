import {
    dataFriend
} from "./data.js"

const gradients = {
    friend: "linear-gradient(to right, #36C1F7, #87B0DD, #FFF)",
    enemy: "linear-gradient(to right, #ff2121, #f7d61d)",
    fight: "linear-gradient(to right, #FF0000, #FF3D3D, #FF7F7F)",
    draw: "linear-gradient(to right, #989898, #C0C0C0, #E8E8E8)"
}

/*** Loader ***/

let fullyLoaded = false
let timeoutExpired = false

window.addEventListener('load', function() {
    fullyLoaded = true;
    hideLoader();
})

setTimeout(function() {
    timeoutExpired = true;
    hideLoader();
}, 4000)

function hideLoader() {
    if (fullyLoaded && timeoutExpired) {
        const loader = document.getElementById('loading-animation');
        loader.style.display = 'none';
    }
}

/****** Functions  ******/

function getMatchedCard(uuid) {
    return dataFriend.filter((card) => {
        return uuid === card.uuid
    })[0]
}

function getMainMenuHtml() {
    return `
        <div id="main-menu">
            <img id="logo" src="logo/logo.webp">
            <a id="start" class="btn">Start</a>
        </div>
    `
}

const rules = document.getElementById('rules')

function renderRules(currRule) {
    rules.style.display = "block"
    rules.innerHTML = getRulesHtml(currRule)
}

function getRulesHtml(currRule) {
    if (currRule === 1) {
        return `
        <p class="rules-title-1">Welcome to<br>Battle Buddies</p>
        <div id="rules-container">
            <p class="rules-title-2">Rules Are Straight Forward</p>
            <div class="rules-inner-container">
                <div class="rule">
                    <p>1- You get a deck of cards with a random star level, attribute and frame each match.</p>
                    <img src="./assets/1.webp">
                </div>
                <div class="rule">
                    <p>2- The higher the card level, the more attack and defense it has.</p>
                    <img src="./assets/2.webp">
                </div>
            </div>
            <div class="rules-btns">
                <a id="skip-btn" class="btn">Skip</a>
                <div class="rules-indicator">
                    <span class="rule-active"></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <a id="next-btn" class="btn">Next</a>
            </div>
        </div>
    `
    } else if (currRule === 2) {
        return `
          <p class="rules-title-1">Welcome to<br>Battle Buddies</p>
          <div id="rules-container">
              <div class="rules-inner-container">
                  <div class="rule">
                      <p>3- There are four different card attributes. Each attribute gives the card a 20% chance of applying critical hit to it's counter-attribute as follows:</p>
                      <img class="img-3" src="./assets/3.webp">
                  </div>
              </div>
              <div class="rules-btns">
                  <a id="back-btn" class="btn">Back</a>
                  <div class="rules-indicator">
                      <span></span>
                      <span class="rule-active"></span>
                      <span></span>
                      <span></span>
                  </div>
                  <a id="next-btn" class="btn">Next</a>
              </div>
          </div>
        `
    } else if (currRule === 3) {
        return `
    <p class="rules-title-1">Welcome to<br>Battle Buddies</p>
          <div id="rules-container">
              <div class="rules-inner-container">
                <div class="rule">
                    <p>4- There are also 6 different colored card frames, each indicating the rarity level of the card.</p>
                    <div class="rules-card-grid flexFont">
                      <div class="rule-card">
                        <p class="rule-card-type">Effect<p>
                        <p class="rule-card-rarity">40% / Common<p>
                        <img src="./assets/card/frames/Effect.webp">
                      </div>
                      <div class="rule-card">
                        <p class="rule-card-type">Normal<p>
                        <p class="rule-card-rarity">28% / Uncommon<p>
                        <img src="./assets/card/frames/Normal.webp">
                      </div>
                      <div class="rule-card">
                        <p class="rule-card-type">Fusion<p>
                        <p class="rule-card-rarity">15% / Rare<p>
                        <img src="./assets/card/frames/Fusion.webp">
                      </div>
                      <div class="rule-card">
                        <p class="rule-card-type">Ritual<p>
                        <p class="rule-card-rarity">10% / Super Rare<p>
                        <img src="./assets/card/frames/Ritual.webp">
                      </div>
                      <div class="rule-card">
                        <p class="rule-card-type">Synchro<p>
                        <p class="rule-card-rarity">5% / Ultra Rare<p>
                        <img src="./assets/card/frames/Synchro.webp">
                      </div>
                      <div class="rule-card">
                        <p class="rule-card-type">Xyz<p>
                        <p class="rule-card-rarity">2% / Secret Rare<p>
                        <img src="./assets/card/frames/Xyz.webp">
                      </div>
                    </div>
                </div>
              </div>
              <div class="rules-btns">
                  <a id="back-btn" class="btn">Back</a>
                  <div class="rules-indicator">
                      <span></span>
                      <span></span>
                      <span class="rule-active"></span>
                      <span></span>
                  </div>
                  <a id="next-btn" class="btn">Next</a>
              </div>
          </div>
          
        `
    } else if (currRule === 4) {
        return `
          <p class="rules-title-1">UI Controls</p>
          <div id="rules-container">
              <div class="rules-inner-container">
                  <div class="rule">
                      <p>5- Slide the deck to see all your cards</p>
                      <img src="./assets/slide.gif">
                  </div>
                  <div class="rule">
                      <p>5- Double click the cards in the deck or in the slot to view them in full size</p>
                      <img src="./assets/dblclick.gif" class="dblclick">
                  </div>
              </div>
              <div class="rules-btns">
                  <a id="back-btn" class="btn">Back</a>
                  <div class="rules-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span class="rule-active"></span>
                  </div>
                  <a id="skip-btn" class="btn">Start</a>
              </div>
          </div>
          `
    }
}

function getFightScreenHtml() {
    return `
        <div id="deck-enemy"></div>

        <div id="interaction">
          <div class="slot flexFont">
              <img class="frame" src="./assets/card/frames/frame.webp">
              <p id="damage-enemy" class="damage-text"></p>
              <p id="score-enemy">0</p>
              <div id="card-slot-enemy" class="card-slot"></div>
          </div>
          <img id="vs" src="./assets/vs.webp"></img>
          <div class="slot flexFont">
              <img class="frame" src="./assets/card/frames/frame.webp">
              <p id="damage-friend" class="damage-text"></p>
              <p id="score-friend">0</p>
              <div id="card-slot" class="card-slot"></div>
              <a id="select" class="btn">Select</a>
          </div>
        </div>
        
        <div id="deck"></div>
    `
}

function cardsLeft() {
    const matchedArr = dataFriend.filter((card) => {
        return !card.used
    })
    return matchedArr.length
}

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

const getPercentage = (remainingHealth, maximumHealth) =>
    (100 * remainingHealth) / maximumHealth

/****** Keep font size ******/

window.addEventListener('resize', flexFont);

function onElementChanged() {
    flexFont()
}
const targetNode = document.body;
const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
            onElementChanged();
            break;
        }
    }
});
const config = {
    attributes: true,
    childList: true,
    subtree: true
};
observer.observe(targetNode, config);

function flexFont() {
    let divs = document.getElementsByClassName("flexFont");
    document.getElementsByClassName("flexFont");
    for (let i = 0; i < divs.length; i++) {
        let relFontsize = divs[i].offsetWidth * 0.05;
        divs[i].style.fontSize = relFontsize + 'px';
    }
}

export {
    getMatchedCard,
    getFightScreenHtml,
    getMainMenuHtml,
    delay,
    renderRules,
    getPercentage,
    cardsLeft,
    gradients
}