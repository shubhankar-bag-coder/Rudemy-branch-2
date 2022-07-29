import React from 'react'
import './Card.css';

const Card=(props)=>{

let classes='card' + props.children;

return <div className={classes}> className={classes} {props.children} </div>


}

export default Card