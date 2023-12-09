let firstCard;
let secondCard;
let cards = [];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
console.log(cards);
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    // i am gona assign A card a number of 11 as well because it also has a value of 1 and jack queen and kind a value of 10;
    if(randomNumber > 10) {
        return 10;
    } else if(randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    // i just define the values here as if defined at the top then before showing on the screen it shows on console what numbers a randomNumber() going to guess
    isAlive = true
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame();
}
function renderGame() {
    cardsEl.textContent = "Cards: " ;

    for(let i = 0;i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    if(sum < 21) {
        message = "Do you want to draw a new card?"
    }

    else if(sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true;
    }

    else {
        message = "You're out of the game!"
        isAlive = false;
    }
    sumEl.textContent = "Sum: " + " " + sum;
    messageEl.textContent = message
}

function newCard() {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
}