import React from 'react';

//const Square = (props) => (
//function Square (props) {
const Square = ({value,onClick}) => (

    <button className='square' onClick={onClick}>
      {value}
    </button>
);

export default Square;
