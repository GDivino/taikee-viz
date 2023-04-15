import { Card, Title, AreaChart } from "@tremor/react";
import getData from "../func/getData"
import transformTransactions from "../func/transformData";
import initiateBackup from "../func/getData";

const dataFormatter = (number: number) => {
  return "P " + Intl.NumberFormat("ph").format(number).toString();
};

const data = await initiateBackup()
const chartData = transformTransactions(data, "ceej@taikee,co")

export default function AssetsFlow() {
  return (
    <Card>
      <Title>Monthly Earnings and Spendings</Title>
      <AreaChart
        className="total-assets-card"
        data={chartData}
        index="date"
        categories={["Debit", "Credit"]}
        colors={["red", "cyan"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  )
}
