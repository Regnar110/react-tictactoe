import React from 'react';
import './winner.scss';

const Winner = ({Xwin, Owin}) => {
    const victory = () => {
        const winnerContainer = document.querySelector('.winner-container');
        if(Xwin) {
            winnerContainer.style.height = '60px';
            return (
                'Player 1(X) won the game !!'
            )
        } else if(Owin) {
            winnerContainer.style.height = '60px';
            return (
                `Player 2(O) won the game !!`
            )
        }
    }
    
    return(
        <div className='winner-container'>{victory()}</div>
    )


}


export default Winner;