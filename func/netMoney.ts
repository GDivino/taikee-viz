function netMoney(transactions: TransactionData, email: string): NetMoney[] {
    const result: NetMoney[] = [];
    const monthly = transactions[email].monthly;
    const transactionList = transactions[email].transactions;
  
    for (const transactionId in transactionList) {
      const transaction = transactionList[transactionId];
      const date = new Date(transaction.date);
      const month = date.toLocaleString('default', { month: 'long' });
      if (!result.find((t) => t.month === month)) {
        result.push({
          month,
          totalNet: 0,
          netChange: 0,
        });
      }
      const debitAmount = transaction.type === 'DEBIT' ? parseFloat(transaction.amount.num) : 0;
      const creditAmount = transaction.type === 'CREDIT' ? parseFloat(transaction.amount.num) : 0;
      const monthTransaction = result.find((t) => t.month === month)!;
      monthTransaction.totalNet += creditAmount - debitAmount;
      // Getting Average of Averages which updates per transaction
      monthTransaction.netChange = (monthTransaction.netChange + ((result[-1].totalNet / result[-2].totalNet) * 100))/2;  
    }

    return result;
  }
  