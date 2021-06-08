// HTMML ELEMENTS

const nextDiv = document.querySelector('.next');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');
const newDiv = document.querySelector('.new');
const xxSDiv = document.querySelector('.xxS');
const ooSDiv = document.querySelector('.ooS');
const extraDiv = document.querySelector('.extra');

// game constants

const xSymbol = 'X';
const oSymbol = 'O';


// game variables

let gameIsAlive = true;
let xIsNext = true;
let oIsNext = false;
let xScore = 0;
let oScore = 0;
var winner;
let play_board = ["","","","","","","","","","","","","","","","","","","","","","","","",""];
extraDiv.innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
document.getElementById("re").style.color = "burlywood";
document.getElementById("ne").style.color = "burlywood";
document.getElementById("re").style.backgroundColor = "blue";
document.getElementById("ne").style.backgroundColor = "blue";
document.getElementById("re").style.border = "none";
document.getElementById("ne").style.border = "none";
document.getElementById("re").style.width = "48%";
document.getElementById("ne").style.width = "268%";
document.getElementById("re").style.fontSize = "120%";
document.getElementById("ne").style.fontSize = "120%";

// functions
const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;


const handleWin = (letter) => {
    gameIsAlive = false;
    if (letter === 'x') {
        document.getElementById("col").style.color = "green";
        nextDiv.innerHTML = `<strong>${letterToSymbol(letter)} has won!!!</strong>`;
        xScore = xScore + 1 ;
        document.getElementById("xxS").innerHTML = xScore;
    }else{
        extraDiv.innerHTML = `<strong><span style="color:green;">${letterToSymbol(letter)} has won!!!</span></strong>`;
        oScore = oScore + 1 ;
        document.getElementById("ooS").innerHTML = oScore;
    }

}

const checkGameStatus = () => {
    const oneTopLeft = cellDivs[0].classList[1];
    const oneTopLeftMiddle = cellDivs[1].classList[1];
    const oneTopMiddle = cellDivs[2].classList[1];
    const oneTopRightMiddle = cellDivs[3].classList[1];
    const oneTopRight = cellDivs[4].classList[1];
    const twoTopLeft = cellDivs[5].classList[1];
    const twoTopLeftMiddle = cellDivs[6].classList[1];
    const twoTopMiddle = cellDivs[7].classList[1];
    const twoTopRightMiddle = cellDivs[8].classList[1];
    const twoTopRight = cellDivs[9].classList[1];
    const threeMiddleLeft = cellDivs[10].classList[1];
    const threeMiddleLeftMiddle = cellDivs[11].classList[1];
    const threeMiddleMiddle = cellDivs[12].classList[1];
    const threeMiddleRightMiddle = cellDivs[13].classList[1];
    const threeMiddleRight = cellDivs[14].classList[1];
    const fourBottomLeft = cellDivs[15].classList[1];
    const fourBottomLeftMiddle = cellDivs[16].classList[1];
    const fourBottomMiddle = cellDivs[17].classList[1];
    const fourBottomRightMiddle = cellDivs[18].classList[1];
    const fourBottomRight = cellDivs[19].classList[1];
    const fiveBottomLeft = cellDivs[20].classList[1];
    const fiveBottomLeftMiddle = cellDivs[21].classList[1];
    const fiveBottomMiddle = cellDivs[22].classList[1];
    const fiveBottomRightMiddle = cellDivs[23].classList[1];
    const fiveBottomRight = cellDivs[24].classList[1];


    // check winner

    if (oneTopLeft && oneTopLeft === oneTopLeftMiddle && oneTopLeft === oneTopMiddle && oneTopLeft === oneTopRightMiddle && oneTopLeft === oneTopRight) {
        winner = handleWin(oneTopLeft);
        cellDivs[0].classList.add('won');
        cellDivs[1].classList.add('won');
        cellDivs[2].classList.add('won');
        cellDivs[3].classList.add('won');
        cellDivs[4].classList.add('won');
    }
    else if (twoTopLeft && twoTopLeft === twoTopLeftMiddle && twoTopLeft === twoTopMiddle && twoTopLeft === twoTopRightMiddle && twoTopLeft === twoTopRight) {
        winner = handleWin(twoTopLeft);
        cellDivs[5].classList.add('won');
        cellDivs[6].classList.add('won');
        cellDivs[7].classList.add('won');
        cellDivs[8].classList.add('won');
        cellDivs[9].classList.add('won');
    }
    else if (threeMiddleLeft && threeMiddleLeft === threeMiddleLeftMiddle && threeMiddleLeft === threeMiddleMiddle && threeMiddleLeft === threeMiddleRight && threeMiddleLeft === threeMiddleRightMiddle) {
        winner = handleWin(threeMiddleLeft);
        cellDivs[10].classList.add('won');
        cellDivs[11].classList.add('won');
        cellDivs[12].classList.add('won');
        cellDivs[13].classList.add('won');
        cellDivs[14].classList.add('won');
    }
    else if (fourBottomLeft && fourBottomLeft === fourBottomLeftMiddle && fourBottomLeft === fourBottomMiddle && fourBottomLeft === fourBottomRightMiddle && fourBottomLeft === fourBottomRight) {
        winner = handleWin(fourBottomLeft);
        cellDivs[15].classList.add('won');
        cellDivs[16].classList.add('won');
        cellDivs[17].classList.add('won');
        cellDivs[18].classList.add('won');
        cellDivs[19].classList.add('won');
    }
    else if (fiveBottomLeft && fiveBottomLeft === fiveBottomLeftMiddle && fiveBottomLeft === fiveBottomMiddle && fiveBottomLeft === fiveBottomRightMiddle && fiveBottomLeft === fiveBottomRight) {
        winner = handleWin(fiveBottomLeft);
        cellDivs[20].classList.add('won');
        cellDivs[21].classList.add('won');
        cellDivs[22].classList.add('won');
        cellDivs[23].classList.add('won');
        cellDivs[24].classList.add('won');
    }
    else if (oneTopLeft && oneTopLeft === twoTopLeft && oneTopLeft === threeMiddleLeft && oneTopLeft === fourBottomLeft && oneTopLeft === fiveBottomLeft) {
        winner = handleWin(oneTopLeft);
        cellDivs[0].classList.add('won');
        cellDivs[5].classList.add('won');
        cellDivs[10].classList.add('won');
        cellDivs[15].classList.add('won');
        cellDivs[20].classList.add('won');
    }
    else if (oneTopLeftMiddle && oneTopLeftMiddle === twoTopLeftMiddle && oneTopLeftMiddle === threeMiddleLeftMiddle && oneTopLeftMiddle === fourBottomLeftMiddle && oneTopLeftMiddle === fiveBottomLeftMiddle) {
        winner = handleWin(oneTopLeftMiddle);
        cellDivs[1].classList.add('won');
        cellDivs[6].classList.add('won');
        cellDivs[11].classList.add('won');
        cellDivs[16].classList.add('won');
        cellDivs[21].classList.add('won');
    }
    else if (oneTopMiddle && oneTopMiddle === twoTopMiddle && oneTopMiddle === threeMiddleMiddle && oneTopMiddle === fourBottomMiddle && oneTopMiddle === fiveBottomMiddle) {
        winner = handleWin(oneTopMiddle);
        cellDivs[2].classList.add('won');
        cellDivs[7].classList.add('won');
        cellDivs[12].classList.add('won');
        cellDivs[17].classList.add('won');
        cellDivs[22].classList.add('won');
    }
    else if (oneTopRightMiddle && oneTopRightMiddle === twoTopRightMiddle && oneTopRightMiddle === threeMiddleRightMiddle && oneTopRightMiddle === fourBottomRightMiddle && oneTopRightMiddle === fiveBottomRightMiddle) {
        winner = handleWin(oneTopRightMiddle);
        cellDivs[3].classList.add('won');
        cellDivs[8].classList.add('won');
        cellDivs[13].classList.add('won');
        cellDivs[18].classList.add('won');
        cellDivs[23].classList.add('won');
    }
    else if (oneTopRight && oneTopRight === twoTopRight && oneTopRight === threeMiddleRight && oneTopRight === fourBottomRight && oneTopRight === fiveBottomRight) {
        winner = handleWin(oneTopRight);
        cellDivs[4].classList.add('won');
        cellDivs[9].classList.add('won');
        cellDivs[14].classList.add('won');
        cellDivs[19].classList.add('won');
        cellDivs[24].classList.add('won');
    }
    else if (oneTopLeft && oneTopLeft === twoTopLeftMiddle && oneTopLeft === threeMiddleMiddle && oneTopLeft === fourBottomRightMiddle && oneTopLeft === fiveBottomRight) {
        winner = handleWin(oneTopLeft);
        cellDivs[0].classList.add('won');
        cellDivs[6].classList.add('won');
        cellDivs[12].classList.add('won');
        cellDivs[18].classList.add('won');
        cellDivs[24].classList.add('won');
    }
    else if (oneTopRight && oneTopRight === twoTopRightMiddle && oneTopRight === threeMiddleMiddle && oneTopRight === fourBottomLeftMiddle && oneTopRight === fiveBottomLeft) {
        winner = handleWin(oneTopRight);
        cellDivs[4].classList.add('won');
        cellDivs[8].classList.add('won');
        cellDivs[12].classList.add('won');
        cellDivs[16].classList.add('won');
        cellDivs[20].classList.add('won');
    }
    else if (oneTopLeft && oneTopLeftMiddle && oneTopMiddle && oneTopRightMiddle && oneTopRight && twoTopLeft && twoTopLeftMiddle && twoTopMiddle && twoTopRightMiddle && twoTopRight && threeMiddleLeft && threeMiddleLeftMiddle && threeMiddleMiddle && threeMiddleRightMiddle && threeMiddleRight && fourBottomLeft && fourBottomLeftMiddle && fourBottomMiddle && fourBottomRightMiddle && fourBottomRight && fiveBottomLeft && fiveBottomLeftMiddle && fiveBottomMiddle && fiveBottomRightMiddle && fiveBottomRight) {
        gameIsAlive = false;
        document.getElementById("col").style.color = "red";
        document.getElementById("ele").style.color = "red";
        nextDiv.innerHTML = `<strong>Game is tied!!!</strong>`;
        extraDiv.innerHTML = `<strong>Game is tied!!!</strong>`;
        cellDivs[0].classList.add('tie');
        cellDivs[1].classList.add('tie');
        cellDivs[2].classList.add('tie');
        cellDivs[3].classList.add('tie');
        cellDivs[4].classList.add('tie');
        cellDivs[5].classList.add('tie');
        cellDivs[6].classList.add('tie');
        cellDivs[7].classList.add('tie');
        cellDivs[8].classList.add('tie');
        cellDivs[9].classList.add('tie');
        cellDivs[10].classList.add('tie');
        cellDivs[11].classList.add('tie');
        cellDivs[12].classList.add('tie');
        cellDivs[13].classList.add('tie');
        cellDivs[14].classList.add('tie');
        cellDivs[15].classList.add('tie');
        cellDivs[16].classList.add('tie');
        cellDivs[17].classList.add('tie');
        cellDivs[18].classList.add('tie');
        cellDivs[19].classList.add('tie');
        cellDivs[20].classList.add('tie');
        cellDivs[21].classList.add('tie');
        cellDivs[22].classList.add('tie');
        cellDivs[23].classList.add('tie');
        cellDivs[24].classList.add('tie');
    }
    else {
        xIsNext = !xIsNext;
        if (xIsNext) {
            nextDiv.innerHTML = `<strong>${xSymbol} is next</strong>`;
            extraDiv.innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
        } else {
            document.getElementById("ele").style.color="#9400D3";
            document.getElementById("dj").style.color="#9400D3";
            nextDiv.innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
            extraDiv.innerHTML = `<strong><span>${oSymbol} is next</span></strong>`;
        }
    }
};


const handleChances = () => {
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            
        }
    }
}


// event handlers

const handleReset = () => {
    xIsNext = true;
    nextDiv.innerHTML = `<strong>${xSymbol} is next</strong>`;
    extraDiv.innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
    document.getElementById("col").style.color = "blue";
    document.getElementById("ele").style.color = "blue";
    for (const cellDiv of cellDivs) {
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
        cellDiv.classList.remove('won');
        cellDiv.classList.remove('tie');
    }
    gameIsAlive = true;
};

const handleNew = () => {
    xIsNext = true;
    nextDiv.innerHTML = `<strong>${xSymbol} is next</strong>`;
    extraDiv.innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
    xScore = 0;
    oScore = 0;
    document.getElementById("xxS").innerHTML = xScore;
    document.getElementById("ooS").innerHTML = oScore;
    document.getElementById("col").style.color = "blue";
    document.getElementById("ele").style.color = "blue";
    for (const cellDiv of cellDivs) {
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
        cellDiv.classList.remove('won');
        cellDiv.classList.remove('tie');
    }
    gameIsAlive = true;
}

const handleCellClick = (e) => {
    const classList = e.target.classList;

    if (!gameIsAlive || classList[1] === 'x' || classList[1] === 'o') {
        return;
    }
    if (xIsNext) {
        classList.add('x');
        checkGameStatus();
    }   
    else {
        classList.add('o');
        checkGameStatus();
    }
    // if ()
};

// event listeners

resetDiv.addEventListener('click',handleReset);

for (const cellDiv of cellDivs) {
    cellDiv.addEventListener('click',handleCellClick);
}