import React, {useState} from 'react'
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Header from './components/Header';
// import Login from './components/Login';
// import Logout from './components/Logout';

const initial_expense = [
  {
    id: 1,
    name: 'Salon',
    amount: 100.00,
    date: new Date(2023,3,2)
  },
  {
    id: 2,
    name: 'Water',
    amount: 60.00,
    date: new Date(2022,7,1)
  },
  {
    id: 3,
    name: 'Electricity',
    amount: 90.00,
    date: new Date(2023,3,5)
  },
  {
    id: 4,
    name: 'Food',
    amount: 200.00,
    date: new Date(2023,5,2)
  },
];
function App() {
  const [expenses, setExpenses] = useState(initial_expense);
  // const [islogged, ];

  const expenseHandler = () => {
    setExpenses((prevExpenses) => {
      return [expenses, ...prevExpenses];
    })//updates the initial expense
  }
  
  return (
      <>
        <Header/>
        <ExpenseForm onNewExpense={expenseHandler}/>
        <ExpenseList data={expenses}/>
      </>
     
  );
}

export default App;
