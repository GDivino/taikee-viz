import { Card, Text, Flex, AreaChart, Title } from "@tremor/react";
import transformTransactions from "../func/transformData";
import getData from "../func/getData";

const data = await getData();

export default function NetMoneyMonthly(props: UserProp) {
  const chartData = transformTransactions(data, props.user);
  var total = 0;
  let count = 0;
  let last_month = 0;
  let prev_net = 0;
  chartData.forEach((x: Transaction) => {
    count ++;
    if (x.Net != 0) {
      prev_net = total;
      total += x.Net;
      last_month = total;
    }
  })

  const dataFormatter = (number: number) => {
    return "PHP " + Intl.NumberFormat("ph").format(number).toString();
  };

  return(
    <Card className="w-2/5" decoration="top" decorationColor="indigo">
      <Flex justifyContent="between" alignItems="center">
        <Title>Total Money by Month</Title>
      </Flex>
      <AreaChart
        data={chartData}
        index="month"
        categories={["Net"]}
        colors={["cyan"]}
        showLegend = {true}
        valueFormatter={dataFormatter}
      />
    </Card>
  )
};