import React from 'react';
import Square from './Square.js';
import Xmark from './Xmark.js';

const Board = ({squaresList}) => {
    const createGrid = squaresList.map((item, i) => { // for each nie działało... Dlaczego?? Czekam na odpowiedź ze stack overflow
        return(
            <Square key={i}id={item.id}><Xmark /></Square>
        )
    })
        return(
            <div className='game-board-container'>
                <div className='squares-container'>
                    {createGrid}
                </div>
            </div>
        )
}

export default Board;