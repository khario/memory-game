document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 55,
            img: 'images/55.png',
        },
        {
            name: 55,
            img: 'images/55.png',
        },
        {
            name: 375,
            img: 'images/375.png',
        },
        {
            name: 375,
            img: 'images/375.png',
        },
        {
            name: 581,
            img: 'images/581.png',
        },
        {
            name: 581,
            img: 'images/581.png',
        },
        {
            name: 804,
            img: 'images/804.png',
        },
        {
            name: 804,
            img: 'images/804.png',
        },
        {
            name: 1028,
            img: 'images/1028.png',
        },
        {
            name: 1028,
            img: 'images/1028.png',
        },
        {
            name: 1068,
            img: 'images/1068.png',
        },
        {
            name: 1068,
            img: 'images/1068.png',
        }
    ]


    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    const messageDisplay = document.querySelector('#message');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    // create game board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // check for matches
    function checkForMatch() {
        let cards =  document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]){
            messageDisplay.textContent = 'You found a match!';
            setTimeout(clearMessage, 2000);
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionOneId].removeEventListener("click", flipCard); 
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].removeEventListener("click", flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            messageDisplay.textContent = 'Sorry, try again';
            setTimeout(clearMessage, 2000);
        }

        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = "Score: " + cardsWon.length;
        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = ' Congratulations! You found them all';
        }

    }

    // flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    // clear message displayed
    function clearMessage() {
        messageDisplay.textContent = "";
    }

    createBoard();
})