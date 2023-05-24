import './Titulos.css';
import React from 'react';
function Titulos({ type = "", text = ""}) {
  return (
    <>
    {
        type === "h1" ? <h1>{text}</h1> : <h2>{text}</h2>
    }
    </>);
}

export default Titulos;