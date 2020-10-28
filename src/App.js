import React, {Component, Fragment} from 'react';
import Board from './Board.js';
import {squares} from './squares-object.js';
import Xmark from './Xmark.js';
import Omark from './Omark.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
           Xmark: <Xmark />,
           Omark: <Omark />
        }
    }
    render() {
        return(
            <Fragment>
                <div className='game-header-container'><h1 id='game-header'>TIC-TAC-TOE</h1></div>
                <Board squaresList={squares}/>
            </Fragment>
        )
    }

}

export default App;