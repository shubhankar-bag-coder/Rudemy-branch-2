import Expenseitem from "./Expenseitem";
import './Expenseitem.css'
import './ExpenseList.css'

const ExpenseList= props=>{


if (props.items.length===0){
    return <h2 className="expenses-list__fallback">Found no expenses</h2>
}

return(
<div>
    <ul className="expenses-list">
        {
           props.items.map( (expense)=> 
            <Expenseitem 
            //   key={index+1}

              key={expense.id}
              title={expense.title} 
              amount={expense.amount} 
              date={expense.date} 
            /> )    
        }

    </ul>
</div>
)
};

export default ExpenseList;