import React from 'react';


const Square = ({id, move}) => {
    return(
        <div className='square' id={id} onClick={move}>

        </div>
    )
}
export default Square;