import React from 'react'
import ExpenseDate from './ExpenseDate';
import './Expenseitem.css';
// import Card from '../UI/Card'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Expenseitem=(props)=>{

// let [title,setTitle]=useState(props.title)

// let ClickHandler=()=>
// {
//     setTitle(alert(`You clicked: ${title}. Now below the value will change`));
//     setTitle(`Updated ${title}`);
//     console.log(title);
// };

return(
<>
<li>
<div className='expense-item'>
    <ExpenseDate date={props.date} />

    <div className='expense-item__description'>
    <h2> {props.title} </h2>

    <div className='expense-item__price' >Rs. {props.amount} /-</div> 
    </div>

    {/* <button className='m-2' onClick= {ClickHandler} >Change Title</button> */}

</div>
</li> 
</>
)
}

export default Expenseitem

