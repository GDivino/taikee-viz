export default function transformTransactions(transactions: TransactionData, email: string): Transaction[] {
  const result: Transaction[] = [];
  const monthly = transactions[email].monthly;
  const transactionList = transactions[email].transactions;

  for (const transactionId in transactionList) {
    const transaction = transactionList[transactionId];
    const date = new Date(transaction.date);
    const month = date.toLocaleString('default', { month: 'long' });
    if (!result.find((t) => t.month === month)) {
      result.push({
        month,
        Debit: 0,
        Credit: parseFloat(monthly.income),
      });
    }
    const debitAmount = transaction.type === 'DEBIT' ? parseFloat(transaction.amount.num) : 0;
    const creditAmount = transaction.type === 'CREDIT' ? parseFloat(transaction.amount.num) : 0;
    const monthTransaction = result.find((t) => t.month === month)!;
    monthTransaction.Debit += debitAmount;
    monthTransaction.Credit += creditAmount;
  }
  return result;
}