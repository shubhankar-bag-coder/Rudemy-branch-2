import { Alert } from 'bootstrap';
import React,{useState} from 'react'
import './ExpenseForm.css'


const ExpenseForm = (props) => {

    const [enteredTitle,setenteredTitle]= useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');

    // const [userInput, SetUserInput]=useState
    // (
    //     {
    //         enteredTitle:'',
    //         enteredAmount:'',
    //         enteredDate:''
    //     }
    // );


const titleChangeHandler=(event)=>
{
    setenteredTitle(event.target.value);

    // SetUserInput( (prevState)=>
    // {
    //     return {...prevState, enteredTitle:event.target.value};
    // });

    // SetUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value,
    // })

};

const amountChangeHandler=(event)=>
{
    setEnteredAmount(event.target.value);
}

const dateChangeHandler=(event)=>
{

    setEnteredDate(event.target.value);
    // SetUserInput({
    //     ...userInput,
    //     enteredDate:event.target.value,
    // })

    // setEnteredDate
    // ( (prevState)=>
    // {
    //     return {...prevState, enteredDate:event.target.value};
    // });
};



const submitHandler=(event)=>
{
    event.preventDefault();
    const expenseData={
     title: enteredTitle,
     amount: +enteredAmount,
     date: new Date(enteredDate),
    };

    // console.log(expenseData)
    
    props.onSaveExpenseData(expenseData);
    setenteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
};


// if (enteredTitle.length===0 || enteredAmount.length===0 || enteredDate.length===0 ) {
//     alert('Empty Data cannot be added')
// }

   

return(
<>
<div className='new-expense__controls'>

<form onSubmit={submitHandler}>

   <div className='new-expense__control'>
    <label>Title</label>
    <input required
    type='text' onChange= { titleChangeHandler } value={enteredTitle}
    />
   </div>


   <div className='new-expense__control'>
    <label>Amount</label>
    <input required
    type='number' min='0.01' step='0.01' 
    onChange={amountChangeHandler} value={enteredAmount}  
    />
   </div>


   <div className='new-expense__control'>
    <label>Date</label>
    <input required
    type='date' min='2019-01-01' max='2022-12-31' 
    onChange={dateChangeHandler}  value={enteredDate}/>
   </div>


   <div>
    <button type='submit' className='new-expense__actions'>Add Expense</button> 
   </div>


</form>
</div>
</>   
)
}

export default ExpenseForm
