import React, {Component, Fragment} from 'react';
import Board from './Board.js';
import {squares} from './squares-object.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            player: 1, // 1 to gracz nr 2 to gracz nr  - stan kontrolujący kolejkę
            squares: squares // tablica w której każda pozycja odpowiada jednemu kwadratowi na planszy [sq1, sq2, sq3 itd]. Posłuży ona do tego aby wyłonić zwycięzcę gry oraz do implementacji elementów do komponentu square oraz do generowania kwadratów na planszy.
        }
    }

    playerMove = (even t) => {
        const { player, squares } = this.state;
        const targetSquareId = event.target.id;
        if(player === 1) {
            this.setState({player: 2}, () => {
                // wyszukujemy w tablicy squares obiekt z pasującą wartością id targetSquareId i w tym obiekcie do właściwośći content dodajemy X lub O w zależności od kolejki
            squares.map(element => {
                return element.id === targetSquareId && element.content.length === 0 ?
                element.content = 'X' : null;
            });
        })
        setTimeout(console.log(squares), 1500);
        } else {
            this.setState({player: 1}, () => {
            squares.map(element => {
                return element.id === targetSquareId && element.content.length === 0 ?
                element.content = 'O' : null;
            })
            })
            setTimeout(console.log(squares), 1500);
        }
    }   

    render() {
        return(
            <Fragment>
                <div className='game-header-container'><h1 id='game-header'>TIC-TAC-TOE</h1></div>
                <Board squaresList={squares} playerMove={this.playerMove}/>
            </Fragment>
        )
    }

}

export default App;