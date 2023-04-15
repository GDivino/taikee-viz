import { Card, Title, AreaChart } from "@tremor/react";
import getData from "../func/getData"
import transformTransactions from "../func/transformData";

const dataFormatter = (number: number) => {
  return "P " + Intl.NumberFormat("ph").format(number).toString();
};

const data = await getData();
const chartData = transformTransactions(data, "ceej@taikee,co");

export default function AssetsFlow() {
  return (
    <Card>
      <Title>Monthly Earnings and Spendings</Title>
      <AreaChart
        // className="total-assets-card"
        className="h-72 mt-4"
        data={chartData}
        index="date"
        categories={["Debit", "Credit"]}
        colors={["red", "cyan"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  )
}
