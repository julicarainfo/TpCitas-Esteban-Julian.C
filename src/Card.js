import './Card.css';
import React from 'react';
function Card({text1 = "", text2=""}) {
 return (
    <>
    {
       <p>{text1} <span type="span">{text2}</span></p>
    }
    </>
)
}
export default Card;