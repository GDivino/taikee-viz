interface Transaction {
    month: string;
    Debit: number;
    Credit: number;
    Net: number;
}

interface MonthlyInfo {
    expense: number;
    goal: number;
    income: number;
}

interface BankInfo {
    bank_code: string;
    Debit: number;
    Credit: number;
    Net: number;
}

interface UserProp {
    user: string;
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