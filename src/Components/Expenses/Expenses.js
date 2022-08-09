import React,{useState} from 'react';
// import Expenseitem from './Expenseitem'
import Card from '../UI/Card';
import './Expenses.css'
import ExpenseFilter from '../Filter/ExpenseFilter'
import ExpenseList from './ExpenseList';


const Expenses = (props) => {

  const [ filteredYear, SetfilterYear ] = useState('2022')

  const filterChangeHandler= selectedYear=>
  {
    console.log('Expense.js');
    // console.log(selectedYear);
    SetfilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

 return (
  <Card className="expenses">
    <div>

    <ExpenseFilter
      selected={filteredYear}
      onChangeFilter={filterChangeHandler} />

    <ExpenseList
      items={filteredExpenses} />



   {/*  Loads default Data */}

  {/* {
  props.items.map( (expense)=> 
    <Expenseitem 
      key={expense.id}
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date} 
    /> )
  } */}

    
  </div> 
  </Card>
   
);
}

export default Expenses;