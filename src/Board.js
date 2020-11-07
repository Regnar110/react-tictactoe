import React from 'react';
import Square from './Square.js';

const Board = ({squaresList, playerMove, reset}) => {
    const createGrid = squaresList.map((item, i) => {
        return(
            <Square key={i} id={item.id} content={item.content} move={playerMove}/>
        )
    })
        return(
            <div className='game-board-container'>
                <div className='squares-container'>
                    {createGrid}
                </div>
                <button className='reset-button' onClick={reset}>Reset Game</button>
            </div>
        )
}

export default Board;