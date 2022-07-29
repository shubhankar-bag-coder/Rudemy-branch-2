import React,{useState} from 'react';
import Expenseitem from './Expenseitem'
import Card from '../UI/Card';
import './Expenses.css'
import ExpenseFilter from '../Filter/ExpenseFilter'


const Expenses = (props) => {

  let [ filteredYear, SetfilterYear ] = useState('2022')

  let filterChangeHandler= selectedYear=>
  {
    console.log('Expense.js');
    // console.log(selectedYear);
    SetfilterYear(selectedYear);
  };

  let filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

 return (
  <Card className="expenses">
    <div>
    

      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
  {
  filteredExpenses.map( (expense)=> 
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