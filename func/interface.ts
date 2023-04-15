interface Transaction {
    month: string;
    Debit: number;
    Credit: number;
}

interface MonthlyInfo {
    expense: string;
    goal: string;
    income: string;
}

interface BankInfo {
    bank_code: string;
    Debit: number;
    Credit: number;
    Net: number;
}

interface NetMoney {
    month: string;
    totalNet: number;
    netChange: number;
}

interface TransactionData {
    [key: string]: {
        monthly: MonthlyInfo;
        transactions: {
            [key: string]: {
                amount: {
                num: string;
                };
                metadata: {
                bank_code: string;
                },
                date: string;
                type: string;
            };
        };
    };
}