import transformByBank from "./transformByBank";

export default function TimeLeftTilGoal(transactions: TransactionData, email: string) {
    const monthly = transactions[email].monthly;

    const chartData = transformByBank(transactions, email);

    var total = 0;
    var total_spend = 0;
    var count = 0;

    chartData.forEach((x: BankInfo) => {
        total += x.Net;
        total_spend += x.Debit;
        count ++;
    })

    const goal_left = monthly.goal - total;

    const result = Math.ceil(goal_left / (monthly.income - (total_spend/count)))

    if (result <= 0)
        return "Achieved!"
    else if (result > 0)
        return result;
  }