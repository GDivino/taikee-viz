import netMoney from "./netMoney";

export default function timeLeftTilGoal(transactions: TransactionData, email: string) {
    const monthly = transactions[email].monthly;

    const goal_left = monthly.goal - netMoney(transactions, email)[-1].totalNet;

    const result = Math.ceil(goal_left / monthly.income)

    if (result <= 0)
        return "Achieved!"
    else if (result > 0)
        return result;
  }