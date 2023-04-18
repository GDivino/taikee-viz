export default function transformTransactions(transactions: TransactionData, email: string): Transaction[] {
  const result: Transaction[] = [];
  const monthly = transactions[email].monthly;
  const transactionList = transactions[email].transactions;

  // const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  for (var x of months) {
    result.push({
      month: x,
      Debit: 0,
      Credit: 0,
      Net: 0,
    });
  }
  
  for (const transactionId in transactionList) {
    const transaction = transactionList[transactionId];
    const date = new Date(transaction.date);
    const month = date.toLocaleString('default', { month: 'short' });
    if (!result.find((t) => t.month === month)) {
      result.push({
        month,
        Debit: 0,
        Credit: 0,
        Net: 0,
      });
    }
    const debitAmount = transaction.type === 'DEBIT' ? parseFloat(transaction.amount.num) : 0;
    const creditAmount = transaction.type === 'CREDIT' ? parseFloat(transaction.amount.num) : 0;
    const monthTransaction = result.find((t) => t.month === month)!;
    monthTransaction.Debit += debitAmount;
    monthTransaction.Credit += creditAmount;
    monthTransaction.Net += (creditAmount - debitAmount);
  }

  return result;
}