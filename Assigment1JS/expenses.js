export let expenses = [];

export function addExpense(name, category, amount) {
  expenses.push({ id: generateUniqueId(), name, category, amount });
}

export function deleteExpense(id) {
  expenses = expenses.filter(exp => exp.id !== id);
}

export function editExpense(id, newName, newAmount) {
  let expense = expenses.find(exp => exp.id === id);
  if (expense) {
    expense.name = newName;
    expense.amount = newAmount;
  }
}

export function calculateTotal() {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
}

function createIdGenerator() {
  let idCounter = 0;
  return function() {
    idCounter++;
    return idCounter;
  };
}
const generateUniqueId = createIdGenerator();
