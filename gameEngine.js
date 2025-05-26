
let score = 0;
let startMatch;
let matchTimeResult;
let isRunning = false;
let flippedCards = [];
let flippedValues = [];
let attemps = 0;
const MAX_SCORE = 8;

// Elements
const gameStartBtn = document.querySelector('#gameStart');
const header = document.querySelector('#header');
const gameDescription = document.querySelector('.game__description');
const gameTutorial = document.querySelector('.game__tutorial');
const cardsGrid = document.querySelector('#cards__grid');
const gameReset = document.querySelector('#gameReset');
const gameScore = document.querySelector('#game__score');
const winScreen = document.querySelector('#winningScreen');
const gameAttemps = document.querySelector('#gameAttemps');
const gameTime = document.querySelector('#gameTime');

//gameState
function newGame() {
    hideElements([gameStartBtn, gameDescription, gameTutorial]);
    header.classList.add('header--align');
    showElements([cardsGrid, gameReset, gameScore]);

    createCards();
    cardListeners();
    matchTime();
}
function createCards() {
    const cardImages = [
        ["./images/cards/caitlyn.png", "cait"],
        ["./images/cards/caitlyn.png", "cait"],
        ["./images/cards/ekko.png", "ekko"],
        ["./images/cards/ekko.png", "ekko"],
        ["./images/cards/jayce.png", "jayce"],
        ["./images/cards/jayce.png", "jayce"],
        ["./images/cards/jinx.png", "jinx"],
        ["./images/cards/jinx.png", "jinx"],
        ["./images/cards/mel.png", "mel"],
        ["./images/cards/mel.png", "mel"],
        ["./images/cards/viktor.png", "viktor"],
        ["./images/cards/viktor.png", "viktor"],
        ["./images/cards/vi.png", "vi"],
        ["./images/cards/vi.png", "vi"],
        ["./images/cards/poro.png", "poro"],
        ["./images/cards/poro.png", "poro"]
    ];

    let shuffledCards = cardImages.sort(() => (Math.random() > 0.5 ? 2 : -1));
    for (let i = 0; i < shuffledCards.length; i++) {
        let cardHTML = `<div class="card" data-card-value="${shuffledCards[i][1]}">
            <div class="card__content">
                <div class="card__front"></div>
                <img class="card__back" src="${shuffledCards[i][0]}">
                </div>
            </div>
        </div>`;
        cardsGrid.insertAdjacentHTML("beforeend", cardHTML);
    }
}
function cardListeners() {
    let cards = document.querySelectorAll('.card');
    for(let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', () => {
            if (flippedCards.length < 2) {
                cards[i].classList.add('flipped');
                flippedCards.push(cards[i]);
                flippedValues.push(cards[i].getAttribute('data-card-value'));

                if (flippedCards.length === 2) {
                    setTimeout(scoreLogic(flippedCards, flippedValues), 500);
                }
            }
        });
    };
}
function scoreLogic(flippedCards, flippedValues) {
    if (flippedValues[0] !== flippedValues[1]) {
        console.log("Different!");
        attemps++;
        setTimeout(() => {
            flippedCards[0].classList.remove('flipped');
            flippedCards[1].classList.remove('flipped');
            resetState();
        }, 700)
    } else {
        console.log("Match!");
        attemps++;
        score++;
        gameScore.innerText = `${score}/8`;
        resetState();
        winState();
    }
}

function resetState() {
    flippedCards = [];
    flippedValues = [];
}
function winState() {
    if(score == MAX_SCORE) {
        setTimeout(() => {
            console.log("You won!");
            matchTime();
            header.classList.remove('header--align');
            hideElements([cardsGrid, gameScore]);
            showElements([winScreen]);
            gameAttemps.textContent += attemps;
            gameTime.textContent += `${matchTimeResult} seconds.`;
            gameReset.classList.add('margin-top');
            gameReset.textContent = "Play again?";
        }, 2000);

    }
    
}
function matchTime() {
    if(isRunning == false) {
        startMatch = Date.now();
        isRunning = true;
        console.log("Match started!");
    } else {
        let endMatch = Date.now();
        matchTimeResult = ((endMatch - startMatch) / 1000).toFixed(2);
        console.log(matchTimeResult);
        isRunning = false;
    }
}
function hideElements(array) {
    array.forEach(element => {
        element.classList.add('hidden');
    });
}
function showElements(array) {
    array.forEach(element => {
        element.classList.remove('hidden');
    });
}