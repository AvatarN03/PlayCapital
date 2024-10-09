const selectors = {
    boardContainer: document.querySelector('.board-container'),
    board: document.querySelector('.board'),
    moves: document.querySelector('.moves'),
    timer: document.querySelector('.timer'),
    start: document.querySelector('button'),
    win: document.querySelector('.win')
}

const state = {
    gameStarted: false,
    flippedCards: 0,
    totalFlips: 0,
    totalTime: 0,
    loop: null
}

const definitions = [
    {"Asset" : "Something valuable that provides future benefit"},
    {"Liability": "Financial debts owed to another party"},
    {"Income": "Money received, especially regularly, from work or investments"},
    {"Profit": "Financial gain when revenue exceeds expenses"},
    {"Revenue": "Income from selling goods or services before deducting expenses"},
    {"Stock": "Share of ownership in a corporation"},
    {"Mortgage": "A mortgage is a property-buying loan. If not repaid, the lender can take the property."},
    {"Depreciation": "Decrease in an asset's value over time"},
];

const words = ["Asset","Liability","Income","Profit","Revenue", "Stock","Mortgage","Depreciation"];
const meanings = [
    "Something valuable that provides future benefit",
    "Financial debts owed to another party",
    "Money received, especially regularly, from work or investments",
    "Financial gain when revenue exceeds expenses",
    "Income from selling goods or services before deducting expenses",
    "Share of ownership in a corporation",
    "A mortgage is a property-buying loan. If not repaid, the lender can take the property.",
    "Decrease in an asset's value over time"
]

function shuffleStringArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const generateGame = () => {
    const dimensions = selectors.board.getAttribute('data-dimension');

    if (dimensions % 2 !== 0) {
        throw new Error("The dimension of the board must be an even number.");
    }

    let htmlArray = [];
    for (let i = 0; i < 8; i++) {
        htmlArray.push(`
        <div class="card" data-type="word" data-word="${words[i]}">
            <div class="card-front"></div>
            <div class="card-back">
                ${words[i]}
            </div>
        </div>`);

        htmlArray.push(`
        <div class="card" data-type="definition" data-word="${words[i]}">
            <div class="card-front"></div>
            <div class="card-back">
                ${meanings[i]}
            </div>
        </div>`);
    }

    htmlArray = shuffleStringArray(htmlArray);
    selectors.board.innerHTML = htmlArray.join('');
}

const startGame = () => {
    state.gameStarted = true;
    selectors.start.classList.add('disabled');

    state.loop = setInterval(() => {
        state.totalTime++;

        selectors.moves.innerText = `${state.totalFlips} moves`;
        selectors.timer.innerText = `Time: ${state.totalTime} sec`;
    }, 1000);
}

const flipBackCards = () => {
    document.querySelectorAll('.card:not(.matched)').forEach(card => {
        card.classList.remove('flipped');
    });

    state.flippedCards = 0;
}

const flipCard = card => {
    if (card.classList.contains('flipped') || card.classList.contains('matched')) {
        // Prevent flipping a card that's already flipped or matched
        return;
    }

    state.flippedCards++;
    state.totalFlips++;

    if (!state.gameStarted) {
        startGame();
    }

    if (state.flippedCards <= 2) {
        card.classList.add('flipped');
    }

    if (state.flippedCards === 2) {
        const flippedCards = document.querySelectorAll('.flipped:not(.matched)');

        const firstCard = flippedCards[0];
        const secondCard = flippedCards[1];

        const firstWord = firstCard.getAttribute('data-word');
        const secondWord = secondCard.getAttribute('data-word');

        if (firstWord === secondWord) {
            // Cards match, mark them as matched
            firstCard.classList.add('matched');
            secondCard.classList.add('matched');
        }

        setTimeout(() => {
            flipBackCards();
        }, 1000);
    }

    if (!document.querySelectorAll('.card:not(.flipped)').length) {
        setTimeout(() => {
            selectors.boardContainer.classList.add('flipped');
            selectors.win.innerHTML = `
                <span class="win-text">
                    You won!<br />
                    with <span class="highlight">${state.totalFlips}</span> moves<br />
                    under <span class="highlight">${state.totalTime}</span> seconds
                </span>
            `;

            clearInterval(state.loop);
        }, 1000);
    }
}

const attachEventListeners = () => {
    document.addEventListener('click', event => {
        const eventTarget = event.target;
        const eventParent = eventTarget.parentElement;

        if (eventTarget.className.includes('card') && !eventParent.className.includes('flipped')) {
            flipCard(eventParent);
        } else if (eventTarget.nodeName === 'BUTTON' && !eventTarget.className.includes('disabled')) {
            startGame();
        }
    });
}

generateGame();
attachEventListeners();
