import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate.js'

const ExpenseItem = (props) => {
    // const expenseDate = new Date(2022, 12, 28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount =  260.80;
    // const month = props.date.toLocaleString('en-US' , {month: 'short'});
    // const day = props.date.toLocaleString('en-us' , {day: '2-digit'});
    // const year = props.date.toLocaleString('en-us',{year:'numeric'});

  return (
    <div className="expense-item">

        {/*<div>{props.date.toISOString()}</div>  */} 
        {/*
        <div>
          <div>{month}</div>
          <div>{year}</div>
          <div>{day}</div>
        </div>*/} 
        <ExpenseDate date= {props.date}/>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    </div>

  )
};

export default ExpenseItem;
