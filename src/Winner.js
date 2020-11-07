import React from 'react';
import './winner.scss';

const Winner = ({Xwin, Owin, Draw}) => {
    const victory = () => {
        const winnerContainer = document.querySelector('.winner-container');
        if(Xwin) {
            winnerContainer.style.height = '60px';
            return (
                'Player 1(X) won the game \o/!!'
            )
        } else if(Owin) {
            winnerContainer.style.height = '60px';
            return (
                'Player 2(O) won the game \o/!!'
            )
        } else if(Draw) {
            return(
                'DRAW! What a battle!!'
            )
        }
    }
    
    return(
        <div className='winner-container'><h1>{victory()}</h1></div>
    )


}


export default Winner;