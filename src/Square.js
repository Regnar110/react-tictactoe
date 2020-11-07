import React from 'react';
import Omark from './Omark';
import Xmark from './Xmark';
import './marks.scss';

const Square = ({id, content, move, squareList}) => {
    const createMark = () => { // funkcja dodająca X lub O w zależności od stanu tablicy z obiektami square-objects.
        if(content==='X') {
            return (
                <Xmark />
            )
        } else if(content==='O') {
            return(
                <Omark />
            )
        }
    }

    return(
        <div className='square' id={id} onClick={move}>
        {createMark()}
        </div>
    )
}
export default Square;