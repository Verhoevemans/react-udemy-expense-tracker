import { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');
  
  const selectFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  
  const filteredExpenses = props.expenses.filter((expense) => {
    return filteredYear === expense.date.getFullYear().toString();
  });
  
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onSelectFilter={selectFilterHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
