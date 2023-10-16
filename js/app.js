//- creare in html la base della pagina con il contenitore grid e con il bottone 'gioca'
//- creare il css con la classe bg-blue e bg-red (in previsione della logica di gioco)
//- recuperare il bottone come domelement
const btnPlayDomElement = document.querySelector('.btn')
const flexGridContainerDomElement = document.querySelector('.flex-grid')
//aggiungere il counter
const counterDomElement = document.getElementById('counter')
let counter = 0 ; 
//dichiarare la variabile per il numero di caselle da generare
let numberCells = 0 ; 



//- aggiungere un addEventListener al bottone
btnPlayDomElement.addEventListener('click', function() {
//    - svuotare eventualmente la griglia
    flexGridContainerDomElement.innerHTML = ''
// azzerare il counter
    counter = 0; 

    const selectDomElement = document.getElementById('levels')
    const selectValue = selectDomElement.options[selectDomElement.selectedIndex].value
    numberCells = parseInt(selectValue)

    for(let i = 0; i < numberCells; i++){
        let n = i + 1; 
        const cellDomElement = `
        <div class="flex-grid-item">${n}</div>
        `
        flexGridContainerDomElement.innerHTML += cellDomElement 
        
    }
//    - aggiungere l' eventlistener alla casella stampata con parametri click, ONCLICKCELL
    const cellDomElementNodes = document.querySelectorAll('.flex-grid-item') 


    for(let i = 0; i < cellDomElementNodes.length; i++){
        let currentCell = cellDomElementNodes[i];
        //console.log(currentCell)

        currentCell.addEventListener('click', onClickCell)
        if (selectValue == 81) {
            currentCell.classList.add('medium-level')
        } else if (selectValue == 49) {
            currentCell.classList.add('hard-level')
        } else {
            currentCell.classList.add('easy-level')
        }

    }  

})
//-creare una funzione ONCLICKCELL che aggiunga a THIS (il soggetto che la invoca = casella corrente nel ciclo) la classe bg-blue
function onClickCell () {
    //SE la casella non ha il bg blu E non è nell'array di bombe
    if (!this.classList.contains('bg-blue')) {
    //aggiungere il bg blu
    this.classList.add('bg-blue')
    console.log(this.innerHTML)
    //incrementare il counter 
    counter ++
    //aggiungere il counter nell'html
    const numberCounterDomElement = `
    <span class="counter">${counter}</span> `
    counterDomElement.innerHTML = numberCounterDomElement
    }
    //ALTRIMENTI SE è nell'array di bombe aggiungere il bg rosso, fermare il gioco

}


