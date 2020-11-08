import React, {Component, Fragment} from 'react';
import Board from './Board.js';
import {squares} from './squares-object.js';
import GameConsole from './GameConsole.js';
import Winner from './Winner.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            player: 1, // 1 to gracz X nr 2 to gracz O  - stan kontrolujący kolejkę
            squares: squares, // tablica w której każda pozycja odpowiada jednemu kwadratowi na planszy [sq1, sq2, sq3 itd]. Posłuży ona do tego aby wyłonić zwycięzcę gry oraz do implementacji elementów do komponentu square oraz do generowania kwadratów na planszy.
            wrongField: false, // kiedy zostanie naciśnięte pełne pole zmieni się na true i na podstawie zmiany tego stanu  zostanie wywołana akcja
            Xwin: false, // zmienione na true gdy zostanie wykryte zwycięstwo gracza X(1)
            Owin: false,
        }
        this.baseState = this.state; 
    }
    
    playerMove = (event) => {
        const { player, squares, Owin, Xwin} = this.state;
        const targetSquareId = event.target.id;
        const fieldFree = () =>{
        if(player === 1) {
            if(Owin===false && Xwin === false){ // jeżeli nikt nie wygrał to dodajemy znaki na tablice, natomiast jeżeli jeden z warunków jest true to blokuje dodawanie elementów na tablicę
            (() => { // anonimowa samowywołująca sie funkcja 
                squares.map(element => { // wyszukujemy w tablicy squares obiekt z pasującą wartością id targetSquareId i w tym obiekcie do właściwośći content dodajemy X lub O w zależności od kolejki
                    return element.id === targetSquareId && element.content.length === 0 ?
                    element.content = 'X'
                    : 
                    null;
                })
                this.setState({player: 2}); // zmiana statusu, umożliwia to przełączanie pomiędzy ruchami gracza X i O
            })();}
        } else {
            if(Owin===false && Xwin === false){
            (() => {
                squares.map(element => {
                    return element.id === targetSquareId && element.content.length === 0 ?
                    element.content = 'O' 
                    : 
                    null;
                    })
                this.setState({player: 1});
            })();}
          } 
        }
        if(!event.target.hasChildNodes()){ // warunek powstrzymuje przed zmianą kolejki gdy naciśnie się pełne pole
            fieldFree();
            this.setState({wrongField: false})
        } else {
            this.setState({wrongField: true});
        }

        if((squares[0].content === 'X' && squares[1].content === 'X' && squares[2].content === 'X') || // horizontal 'X' win checking
        (squares[3].content === 'X' && squares[4].content === 'X' && squares[5].content === 'X') ||
        (squares[6].content === 'X' && squares[7].content === 'X' && squares[8].content === 'X')) {
            this.setState({Xwin: true})
        } else if((squares[0].content === 'O' && squares[1].content === 'O' && squares[2].content === 'O') || // horizontal 'O' win checking
        (squares[3].content === 'O' && squares[4].content === 'O' && squares[5].content === 'O') ||
        (squares[6].content === 'O' && squares[7].content === 'O' && squares[8].content === 'O')) {
            this.setState({Owin: true})
        } else if((squares[0].content === 'X' && squares[3].content === 'X' && squares[6].content === 'X') || // vertical 'X' win checking
        (squares[1].content === 'X' && squares[4].content === 'X' && squares[7].content === 'X') ||
        (squares[2].content === 'X' && squares[5].content === 'X' && squares[8].content === 'X')) {
            this.setState({Xwin: true})
        } else if((squares[0].content === 'O' && squares[3].content === 'O' && squares[6].content === 'O') || // vertical 'O' win checking
        (squares[1].content === 'O' && squares[4].content === 'O' && squares[7].content === 'O') ||
        (squares[2].content === 'O' && squares[5].content === 'O' && squares[8].content === 'O')) {
            this.setState({Owin: true})
        }else if((squares[0].content === 'X' && squares[4].content === 'X' && squares[8].content === 'X') || // cross 'X' win
        (squares[2].content === 'X' && squares[4].content === 'X' && squares[6].content === 'X')) {
            this.setState({Xwin: true})
        } else if((squares[0].content === 'O' && squares[4].content === 'O' && squares[8].content === 'O') || // cross 'O' win
        (squares[2].content === 'O' && squares[4].content === 'O' && squares[6].content === 'O')) {
            this.setState({Owin: true})
        }
    }

    resetGame = () => {
        const winnerHeader = document.querySelector('.winner-container')
        winnerHeader.style.height = '0px';
        this.setState({player: 1})
        this.setState({wrongField:false})
        this.setState({Xwin:false})
        this.setState({Owin:false})
        squares.map(element => { //resetowanie tablicy squares i wartości w niej zawartej (content)
            return element.content = '';
        })
    }

    render() {
        const {player, wrongField, Xwin, Owin, PlayerMoves} = this.state;
        return(
            <Fragment>
                <div className='game-header-container'><h1 id='game-header'>TIC-TAC-TOE</h1></div>
                <Winner Xwin={Xwin} Owin={Owin} Draw={PlayerMoves}/>
                <Board squaresList={squares} playerMove={this.playerMove} reset={this.resetGame}/>
                <GameConsole turn={player} wrongField={wrongField}/>
            </Fragment>
        )
    }

}

export default App;