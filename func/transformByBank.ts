function transformByBank(transactions: TransactionData, email: string): BankTransaction[] {
    const result: BankTransaction[] = [];
    const monthly = transactions[email].monthly;
    const transactionList = transactions[email].transactions;
  
    for (const transactionId in transactionList) {
      const transaction = transactionList[transactionId];
      const bank = transaction.metadata.bank_code;
      if (!result.find((t) => t.bank_code === bank)) {
        result.push({
          bank_code: bank,
          Debit: 0,
          Credit: 0,
          Net: 0,
        });
      }
      const debitAmount = transaction.type === 'DEBIT' ? parseFloat(transaction.amount.num) : 0;
      const creditAmount = transaction.type === 'CREDIT' ? parseFloat(transaction.amount.num) : 0;
      const bankTransaction = result.find((t) => t.bank_code === bank)!;
      bankTransaction.Debit += debitAmount;
      bankTransaction.Credit += creditAmount;
      bankTransaction.Net = creditAmount - debitAmount;
    }
    return result;
}