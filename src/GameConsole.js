import React from 'react';
import './gameConsole.scss';

const GameConsole = ({turn, wrongField}) => {
    const wrongFieldCLicked = () => {
        if(wrongField) {
            return(
                <div className='wrongField'>Hey!! This field is full -_-! Go find another one...</div>
            )
        }
    }
    return(
        <div className='console-container'>
            <h2>Game Console</h2>
            <div className ='player-moving'>Player number {turn} turn</div>
            {wrongFieldCLicked()}
        </div>
    )
}

export default GameConsole;