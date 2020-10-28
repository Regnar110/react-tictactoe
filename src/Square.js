import React from 'react';
import Xmark from './Xmark.js';
import Omark from './Omark.js';

const Square = ({id}) => {
    let playerQueue = 0; // 0 - wtedy kolejny ruch należy do gracza X ,, 1- ruch dla gracza O ---> powrót do 0
    const returnOX = (event) => {
        const target = event.target;
    }
    return(
        <div className='square' id={id} onClick={returnOX}></div>
    )
}
export default Square;