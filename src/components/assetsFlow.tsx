import { Card, Title, AreaChart } from "@tremor/react";
import getData from "../func/getData"
import transformTransactions from "../func/transformData";

const dataFormatter = (number: number) => {
  return "PHP " + Intl.NumberFormat("ph").format(number).toString();
};

const data = await getData();

export default function AssetsFlow(props: UserProp) {
  const chartData = transformTransactions(data, props.user);

  return (
    <Card className="w-2/5">
      <Title>Monthly Income and Expenses</Title>
      <AreaChart
        data={chartData}
        index="month"
        categories={["Debit", "Credit"]}
        colors={["red", "green"]}
        showLegend = {true}
        valueFormatter={dataFormatter}
        // autoMinValue = {true}
      />
    </Card>
  )
}
