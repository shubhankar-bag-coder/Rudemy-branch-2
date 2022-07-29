import React,{useState} from 'react';
import Expenseitem from './Expenseitem'
import Card from '../UI/Card';
import './Expenses.css'
import { ExpenseFilter } from '../Filter/ExpenseFilter';


const Expenses=(props)=> {

  let [ filterYear, SetfilterYear ] = useState('2022')

  let filterChangeHandler= selectedYear=>
  {
    console.log('Expense.js');
    // console.log(selectedYear);
    SetfilterYear(selectedYear);
  };

 return (
  <Card className="expenses">
    <div>
    <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />

  { 





  }

  {
  props.items.map( (expense)=> 
    < Expenseitem 
      key={expense.id}
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date} 
    /> )
  }

    
  </div> 
  </Card>
   
  );
}

export default Expenses;