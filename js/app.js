//- creare in html la base della pagina con il contenitore grid e con il bottone 'gioca'
//- creare il css con la classe bg-blue e bg-red (in previsione della logica di gioco)
//- recuperare il bottone come domelement
const btnPlayDomElement = document.querySelector(".btn");
const flexGridContainerDomElement = document.querySelector(".flex-grid");
//aggiungere il counter
const counterDomElement = document.getElementById("counter");
let counter = 0;
//dichiarare la variabile per il numero di caselle da generare
let numberCells = 0;
//dichiarare l'array di bombe vuoto
let arrayBombsUno = []; 
//recuperare dal DOM la modale e il suo bottone
const modalDomElement = document.querySelector(".modal")
const btnCloseDomElement = document.querySelector(".btn-close")

//- aggiungere un addEventListener al bottone
btnPlayDomElement.addEventListener("click", function () {
  //    - svuotare eventualmente la griglia e renderla cliccabile
    flexGridContainerDomElement.innerHTML = "";
    flexGridContainerDomElement.classList.remove('stop-play')
    modalDomElement.innerHTML = ''; 
  // azzerare il counter
    counter = 0;
    counterDomElement.innerHTML = '<span class="counter"></span>';

    const selectDomElement = document.getElementById("levels");
    const selectValue = selectDomElement.options[selectDomElement.selectedIndex].value;
    numberCells = parseInt(selectValue);

    for (let i = 0; i < numberCells; i++) {
        let n = i + 1;
        const cellDomElement = `
        <div class="flex-grid-item">${n}</div>
        `;
        flexGridContainerDomElement.innerHTML += cellDomElement;
    }

    //creare l'array di bombe
    arrayBombsUno = getSomeBombs(1, numberCells, 16);
    console.log(arrayBombsUno);
  //    - aggiungere l' eventlistener alla casella stampata con parametri click, ONCLICKCELL
    const cellDomElementNodes = document.querySelectorAll(".flex-grid-item");

    for (let i = 0; i < cellDomElementNodes.length; i++) {
        let currentCell = cellDomElementNodes[i];
    //console.log(currentCell)

    currentCell.addEventListener("click", onClickCell);
        if (selectValue == 81) {
            currentCell.classList.add("medium-level");
        } else if (selectValue == 49) {
            currentCell.classList.add("hard-level");
        } else {
            currentCell.classList.add("easy-level");
        }
    }
});
//-creare una funzione ONCLICKCELL che aggiunga a THIS (il soggetto che la invoca = casella corrente nel ciclo) la classe bg-blue
function onClickCell(event) {
    const target = event.target;
    const numberSingleCell = parseInt(target.innerHTML);

  //SE la casella non ha il bg blu E non è nell'array di bombe
    if (!target.classList.contains("bg-blue") && !arrayBombsUno.includes(numberSingleCell)) {
    //aggiungere il bg blu
        target.classList.add('bg-blue');
    //incrementare il counter
        counter++;
    //aggiungere il counter nell'html
        const numberCounterDomElement = `
        <span class="counter">${counter}</span> `;
        counterDomElement.innerHTML = numberCounterDomElement;
    } else if(arrayBombsUno.includes(numberSingleCell)) {
        target.classList.add('bg-red')
        const modalContent = `
        <h2 class="h2">HAI PERSO DOPO ${counter} mosse</h2> `
        modalDomElement.innerHTML += modalContent
        modalDomElement.classList.add('visible')
        btnCloseDomElement.classList.add('visible')
        //ALTRIMENTI SE è nell'array di bombe aggiungere il bg rosso, fermare il gioco
    } else if ((numberCells - 16) == arrayBombsUno.length) {
        alert('HAI VINTO')
    }
    btnCloseDomElement.addEventListener('click', function (){
        modalDomElement.classList.remove('visible')
        btnCloseDomElement.classList.remove('visible')
        flexGridContainerDomElement.classList.add('stop-play')
        })
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function getSomeBombs(minRange, maxRange, bombsNumber) {
    const arrayBombs = [];

    while (arrayBombs.length < bombsNumber) {
        const nBomb = getRandomInt(minRange, maxRange);
        if (!arrayBombs.includes(nBomb)) {
            arrayBombs.push(nBomb);
        }
    }
    return arrayBombs;
}
