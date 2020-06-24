const user = {
  name: 'Mariana',
  transactions: [],
  balance: 0,
};

function createTransaction(transaction) {
  user.balance += transaction.value * (transaction.type === 'credit' ? 1 : -1)

  user.transactions.push(transaction);
}

function getHigherTransactionByType(type) {
  let higherTransaction = {type, value: 0};

  for (transaction of user.transactions) {
    higherTransaction = (transaction.type === type && transaction.value > higherTransaction.value) ? transaction : higherTransaction;
  }

  console.log(higherTransaction);
}

function getAverageTransactionValue() {
  let average = 0;
  for (transaction of user.transactions) {
    average += transaction.value;
  }

  return average / user.transactions.length;
}

function getTransactionsCount() {
  const transactions = { credit: 0, debit: 0 };

  for (transaction of user.transactions) {
    if (transaction.type === 'credit') {
      transactions.credit ++;
    } else {
      transactions.debit++
    }
  }

  return transactions;
}

createTransaction({ type: 'credit', value: 50 });
createTransaction({ type: 'credit', value: 120 });
createTransaction({ type: 'debit', value: 80 });
createTransaction({ type: 'debit', value: 30 });

console.log(user.balance);

getHigherTransactionByType('credit');
getHigherTransactionByType('debit');

console.log(getAverageTransactionValue());

console.log(getTransactionsCount());
