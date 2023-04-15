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
  
  let customers = {
    "basty@taikee.co": {
      "monthly": {
        "expense": "15000",
        "goal": "500000",
        "income": "113000"
      },
      "transactions": {
        "-NOhFX6-JNuq0OHKoSM3": {
          "account_transaction_hash": "basty@taikee.co",
          "amount": {
            "cur": "PHP",
            "decimal": {
              "num": "2300"
            },
            "num": "2300"
          },
          "date": "2023-02-20T13:18",
          "descriptor": "Anytime Fitness Payment",
          "metadata": {
            "bank_code": "BDO_PERSONAL"
          },
          "status": "MANUAL",
          "transaction_id": "6d0c47c4-6701-40d8-8421-ffb183bb6226",
          "type": "DEBIT"
        },
        "-NOhF_r9xhezfQtjTenc": {
          "account_transaction_hash": "basty@taikee.co",
          "amount": {
            "cur": "PHP",
            "decimal": {
              "num": "7500"
            },
            "num": "7500"
          },
          "date": "2023-02-20T13:18",
          "descriptor": "Feb Rent",
          "metadata": {
            "bank_code": "BDO_PERSONAL"
          },
          "status": "MANUAL",
          "transaction_id": "6e2fa5fb-6c61-44a6-b41b-e832cea264b1",
          "type": "DEBIT"
        },
        "-NOhFX6-JNuq0OHKoSM4": {
          "account_transaction_hash": "basty@taikee.co",
          "amount": {
            "cur": "PHP",
            "decimal": {
              "num": "2300"
            },
            "num": "2300"
          },
          "date": "2023-03-20T13:18",
          "descriptor": "Anytime Fitness Payment",
          "metadata": {
            "bank_code": "BDO_PERSONAL"
          },
          "status": "MANUAL",
          "transaction_id": "6d0c47c4-6701-40d8-8421-ffb183bb6226",
          "type": "DEBIT"
        },
        "-NOhFX6-JNuq0OHKoSM5": {
          "account_transaction_hash": "basty@taikee.co",
          "amount": {
            "cur": "PHP",
            "decimal": {
              "num": "2300"
            },
            "num": "2300"
          },
          "date": "2023-01-20T13:18",
          "descriptor": "Anytime Fitness Payment",
          "metadata": {
            "bank_code": "BDO_PERSONAL"
          },
          "status": "MANUAL",
          "transaction_id": "6d0c47c4-6701-40d8-8421-ffb183bb6226",
          "type": "DEBIT"
        },
        "-NOhFX6-JNuq0OHKoSM6": {
          "account_transaction_hash": "basty@taikee.co",
          "amount": {
            "cur": "PHP",
            "decimal": {
              "num": "2300"
            },
            "num": "2300"
          },
          "date": "2023-04-20T13:18",
          "descriptor": "Anytime Fitness Payment",
          "metadata": {
            "bank_code": "BDO_PERSONAL"
          },
          "status": "MANUAL",
          "transaction_id": "6d0c47c4-6701-40d8-8421-ffb183bb6226",
          "type": "DEBIT"
        },
        "-NOhFX6-JNuq0OHKoSM7": {
          "account_transaction_hash": "basty@taikee.co",
          "amount": {
            "cur": "PHP",
            "decimal": {
              "num": "2300"
            },
            "num": "2300"
          },
          "date": "2023-05-20T13:18",
          "descriptor": "Anytime Fitness Payment",
          "metadata": {
            "bank_code": "BDO_PERSONAL"
          },
          "status": "MANUAL",
          "transaction_id": "6d0c47c4-6701-40d8-8421-ffb183bb6226",
          "type": "DEBIT"
        },
        "-NOhFX6-JNuq0OHKoSM8": {
          "account_transaction_hash": "basty@taikee.co",
          "amount": {
            "cur": "PHP",
            "decimal": {
              "num": "2300"
            },
            "num": "2300"
          },
          "date": "2023-06-20T13:18",
          "descriptor": "Anytime Fitness Payment",
          "metadata": {
            "bank_code": "BDO_PERSONAL"
          },
          "status": "MANUAL",
          "transaction_id": "6d0c47c4-6701-40d8-8421-ffb183bb6226",
          "type": "DEBIT"
        },
      }
    },
    "gio@taikee.co": {
      "monthly": {
        "expense": "12000",
        "goal": "12000",
        "income": "20000"
      },
      "transactions": {
        "-NOhFX6-JNuq0OHKoSM3": {
          "account_transaction_hash": "basty@taikee.co",
          "amount": {
            "cur": "PHP",
            "decimal": {
              "num": "2300"
            },
            "num": "2300"
          },
          "date": "2023-02-20T13:18",
          "descriptor": "Anytime Fitness Payment",
          "metadata": {
            "bank_code": "BDO_PERSONAL"
          },
          "status": "MANUAL",
          "transaction_id": "6d0c47c4-6701-40d8-8421-ffb183bb6226",
          "type": "DEBIT"
        },
        "-NOhF_r9xhezfQtjTenc": {
          "account_transaction_hash": "basty@taikee.co",
          "amount": {
            "cur": "PHP",
            "decimal": {
              "num": "7500"
            },
            "num": "7500"
          },
          "date": "2023-02-20T13:18",
          "descriptor": "Feb Rent",
          "metadata": {
            "bank_code": "BDO_PERSONAL"
          },
          "status": "MANUAL",
          "transaction_id": "6e2fa5fb-6c61-44a6-b41b-e832cea264b1",
          "type": "DEBIT"
        }
      }
    }
  }
  