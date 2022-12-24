import React, { useState } from 'react';

function MyForm() {
  // Declare a state variable for the selected option
  const [selectedOption, setSelectedOption] = useState('');

  // Declare a state variable for the income text field
  const [income, setIncome] = useState('');

  // Declare a state variable for the expense text field
  const [expense, setExpense] = useState('');

  // Function to handle changes to the select element
  function handleOptionChange(event: { target: { value: React.SetStateAction<string>; }; }) {
    setSelectedOption(event.target.value);
  }

  // Function to handle changes to the income text field
  function handleIncomeChange(event: { target: { value: React.SetStateAction<string>; }; }) {
    setIncome(event.target.value);
  }

  // Function to handle changes to the expense text field
  function handleExpenseChange(event: { target: { value: React.SetStateAction<string>; }; }) {
    setExpense(event.target.value);
  }

  return (
    <form>
      <label>
        Select an option:
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </label>
      {selectedOption === 'income' && (
        <div>
          <label>
            Income:
            <input type="text" value={income} onChange={handleIncomeChange} />
          </label>
        </div>
      )}
      {selectedOption === 'expense' && (
        <div>
          <label>
            Expense:
            <input type="text" value={expense} onChange={handleExpenseChange} />
          </label>
        </div>
      )}
    </form>
  );
}

export default MyForm;