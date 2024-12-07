//Title - Personal Expense Tracker.
// Description: This code helps to manage daily expenses by adding, editing, and deleting expenses,
// and calculating the total amount spent.
import { expenses, addExpense, deleteExpense, editExpense, calculateTotal } from './expenses.js';

addExpense("Lunch", "food", 15);
addExpense("Bus Ticket", "transport", 5);
addExpense("Groceries", "food", 50);

editExpense(1, "Lunch with friends", 20);

deleteExpense(2);

let total = calculateTotal();
console.log("Total Expenses:", "$" + total);

expenses.forEach(expense => {
  console.log(expense.name + ": $" + expense.amount);
});

expenses.forEach(expense => {
  if (expense.amount < 20) {
    console.log(expense.name + " is a low-cost expense.");
  } else if (expense.amount >= 20 && expense.amount <= 100) {
    console.log(expense.name + " is a medium-cost expense.");
  } else {
    console.log(expense.name + " is a high-cost expense.");
  }
});

expenses.forEach(expense => {
  switch (expense.category) {
    case "food":

      console.log(expense.name + " falls under Food & Beverages category.");
      break;
    case "transport":
      console.log(expense.name + " falls under Transport category.");
      break;
    default:
      console.log(expense.name + " falls under Other category.");
      break;
  }
});