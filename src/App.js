import React, {Component, Fragment} from 'react';
import Board from './Board.js';
import {squares} from './squares-object.js';
import GameConsole from './GameConsole.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            player: 1, // 1 to gracz nr 2 to gracz nr  - stan kontrolujący kolejkę
            squares: squares, // tablica w której każda pozycja odpowiada jednemu kwadratowi na planszy [sq1, sq2, sq3 itd]. Posłuży ona do tego aby wyłonić zwycięzcę gry oraz do implementacji elementów do komponentu square oraz do generowania kwadratów na planszy.
            wrongField: false, // kiedy zostanie naciśnięte pełne pole zmieni się na true i na podstawie zmiany tego stanu  zostanie wywołana akcja
            winner: 0
        }
    }

    playerMove = (event) => {
        const { player, squares, wrongField } = this.state;
        const targetSquareId = event.target.id;
        const fieldFree = () =>{
        if(player === 1) {
            (() => { // anonimowa samowywołująca sie funkcja 
                squares.map(element => { // wyszukujemy w tablicy squares obiekt z pasującą wartością id targetSquareId i w tym obiekcie do właściwośći content dodajemy X lub O w zależności od kolejki
                    return element.id === targetSquareId && element.content.length === 0 ?
                    element.content = 'X'
                    : 
                    null;
                })
                this.setState({player: 2}); // zmiana statusu, umożliwia to przełączanie pomiędzy ruchami gracza X i O
            })();
        } else {
            (() => {
                squares.map(element => {
                    return element.id === targetSquareId && element.content.length === 0 ?
                    element.content = 'O' 
                    : 
                    null;
                    })
                this.setState({player: 1});
            })()
        }
        }
        if(!event.target.hasChildNodes()){ // warunek powstrzymuje przed zmianą kolejki gdy naciśnie się pełne pole
            fieldFree();
            this.setState({wrongField: false}, () => console.log(wrongField))
        } else {
            this.setState({wrongField: true}, () => console.log(wrongField));
        }
    }   

    render() {
        const {player, wrongField} = this.state;
        return(
            <Fragment>
                <div className='game-header-container'><h1 id='game-header'>TIC-TAC-TOE</h1></div>
                <Board squaresList={squares} playerMove={this.playerMove}/>
                <GameConsole turn={player} wrongField={wrongField}/>
            </Fragment>
        )
    }

}

export default App;