import { useState } from 'react';

export default function IncomeExpenseForm() {
  // Define state variables to store the selected type and the values of the income and expense inputs
  const [type, setType] = useState('');
  const [income, setIncome] = useState('');
  const [expense, setExpense] = useState('');

  // Handle changes to the <select> element
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  // Handle changes to the "income" <input> element
  const handleIncomeChange = (event) => {
    setIncome(event.target.value);
  };

  // Handle changes to the "expense" <input> element
  const handleExpenseChange = (event) => {
    setExpense(event.target.value);
  };

  return (
    <form>
      <label htmlFor="type">Income or Expense</label>
      <select id="type" onChange={handleTypeChange}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <br />
      {type === 'income' && (
        <input
          id="income"
          type="number"
          placeholder="Income"
          value={income}
          onChange={handleIncomeChange}
        />
      )}
      {type === 'expense' && (
        <input
          id="expense"
          type="number"
          placeholder="Expense"
          value={expense}
          onChange={handleExpenseChange}
        />
      )}
    </form>
  );
}
