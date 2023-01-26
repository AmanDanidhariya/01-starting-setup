
import Expenses from './components/Expenses.js'

const App = () => {
  const dummy_expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      {/* <h2>let's gooo!!!</h2>
      <p>hii i am aman</p>
      <p>this is also visible</p> */}
    {/*<ExpenseItem
      title={dummy_expenses[0].title}
      amount={dummy_expenses[0].amount}
      date ={dummy_expenses[0].date}
    />
    <ExpenseItem
      title={dummy_expenses[1].title}
      amount={dummy_expenses[1].amount}
      date ={dummy_expenses[1].date}
    />
    <ExpenseItem
      title={dummy_expenses[2].title}
      amount={dummy_expenses[2].amount}
      date ={dummy_expenses[2].date}
    />
    <ExpenseItem
      title={dummy_expenses[3].title}
      amount={dummy_expenses[3].amount}
      date ={dummy_expenses[3].date}
    />*/}
      <Expenses items={dummy_expenses}/>
    </div>
  );
};
export default App;
