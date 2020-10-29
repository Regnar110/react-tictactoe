import React from 'react';

const Square = ({id,children}) => {
    const returnOX = () =>  {
        console.log(children)
        return (
            children
        )
    }
    return(
        <div className='square' id={id} onClick={returnOX}></div>
    )
}
export default Square;