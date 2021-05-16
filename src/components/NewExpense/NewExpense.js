import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  
  const addExpenseHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };
  
  const cancelHandler = () => {
    setShowForm(false);
  };
  
  const showFormHandler = () => {
    setShowForm(true);
  };
  
  return (
    <div className="new-expense">
      {showForm
        ? <ExpenseForm onAddExpense={addExpenseHandler} onCancel={cancelHandler}/>
        : <button type="button" onClick={showFormHandler}>Add New Expense</button>
      }
    </div>
  );
};

export default NewExpense;
