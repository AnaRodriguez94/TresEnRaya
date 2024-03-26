const PLAYER_ONE_TOKEN=  "O";
const PLAYER_TWO_TOKEN = "X";
const EMPTY_TOKEN = '_';
//Constantes globales//

let replayBtn$ = document.querySelector('#replay');
replayBtn$.addEventListener('click', init);

let currentPlayer;

init();

function init () {
    cleanBoard ();
    printBoard();
    switchPlayer(1);
}
function cleanBoard () {
    let board$ = document.querySelector('#board');
    board$.innerHTML = '';
}
function printBoard () {    

    const NUMBER_OF_ROWS = 3;
    const NUMBER_OF_COLUMNS = 3;

    let board$ = document.querySelector('#board');

    for( let j = 0; j < NUMBER_OF_ROWS; j++){
        let tr$ = document.createElement('tr');
        board$.appendChild(tr$);
        for( let i = 0; i < NUMBER_OF_COLUMNS; i++){
            let td$ = document.createElement('td');
            td$.textContent = EMPTY_TOKEN;
            td$.addEventListener('click', placeToken);//creo el evento onClick//
            tr$.appendChild(td$);
        }
    }   
}

function getBoardArray() {
    let board$ = document.querySelector('#board');
    let trs$ = board$.querySelectorAll('tr');
    let boardArray = [];
    for(let tr$ of trs$) {
        let tds$ = tr$.querySelectorAll('td');
        let row = [];
        for(let td$ of tds$) {
            row.push(td$.textContent);
        }
 
        boardArray.push(row);
    }
 
    return boardArray;
}

function placeToken() {
    if(this.textContent === EMPTY_TOKEN) {
       this.textContent = currentPlayer === 1 ? PLAYER_ONE_TOKEN : PLAYER_TWO_TOKEN;
       let newPlayer  = currentPlayer == 1 ? 2 : 1;
       //Si hay tablas, mensaje de tablas
       //Si alguien ha ganado, decir quien
       //Si nunguna de estas, cambiar jugador

        switchPlayer(newPlayer);//Ahora soy el 2//
        function checkWinner() {
            if (!boardArray.includes('')) {
                alert('¡Empate!');
                gameOver = true;
                return;
              }
              function checkEvent () {
                let boardArray = getBoardArray();
                for (let row of boardArray){
                    for (let cell of row){
                        if(cell === EMPTY_TOKEN){
                            return false;
                        }
                    }
                }
                return true;
            }
              // Si no hay ganador y todas las celdas están marcadas, el juego ha terminado en empate
            // Comprobar filas
            if (
              (boardArray[0][0]=== currentPlayer && boardArray[0][1] === currentPlayer && boardArray[0][2] === currentPlayer) ||
              (boardArray[1][3] === currentPlayer && boardArray[1][4] === currentPlayer && board[1][5] === currentPlayer) ||
              (boardArray[2][6] === currentPlayer && boardArray[2][7] === currentPlayer && boardArray[2][8] === currentPlayer)
            ) {
              return true;
            }
          
            // Comprobar columnas
            if (
              (boardArray[0][0] === currentPlayer && boardArray[0][4] === currentPlayer && boardArray[0][6] === currentPlayer) ||
              (boardArray[1][3] === currentPlayer && boardArray[1][4] === currentPlayer && board[1][7] === currentPlayer) ||
              (boardArray[2][7] === currentPlayer && boardArray[2][5] === currentPlayer && boardArray[2][8] === currentPlayer)
            ) {
              return true;
            }
          
            // Comprobar diagonales
            if (
              (boardArray[0][0] === currentPlayer && boardArray[0][4] === currentPlayer && boardArray[0][8] === currentPlayer) ||
              (boardArray[3][2] === currentPlayer && boardArray[4][5] === currentPlayer && boardArray[3][6] === currentPlayer)
            ) {
              return true;
            }
          
            return false;
          }
    }
}
function switchPlayer(newPlayer){
    currentPlayer = newPlayer;
    let title$ = document.querySelector('#currentPlayer');
    title$.textContent = 'Jugador' + currentPlayer;
}


  


    