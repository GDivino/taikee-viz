import transformByBank from "./transformByBank";

export default function TimeLeftTilGoal(transactions: TransactionData, email: string): GoalInfo[] {
    const monthly = transactions[email].monthly;
    const output: GoalInfo[] = [];

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

    output.push({
        current: total,
        goal: monthly.goal,
        time_left: result,
        progress: 100 - (goal_left/monthly.goal)*100,
    })
    // if (result <= 0)
    //     return "Goal Achieved!"
    // else if (result > 0)
    //     return result;
    return output
  }