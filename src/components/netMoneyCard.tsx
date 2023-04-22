import { Card, Flex, Metric, BadgeDelta, Text, AreaChart, Title } from "@tremor/react";
import transformTransactions from "../func/transformData";
import getData from "../func/getData";

const data = await getData();

export default function NetMoneyCard(props: UserProp) {
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

  const formatter = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
  });
  

  return(
    <Card className="w-2/5" decoration="top" decorationColor="indigo">
      <Flex justifyContent="between" alignItems="center">
        <Text>Total Money</Text>
      </Flex>
      <Metric>{formatter.format(total).toString()}</Metric>
      <BadgeDelta
          deltaType={((last_month-prev_net)/prev_net)*100 > 0 ? "increase" : "decrease"}
          isIncreasePositive={((last_month-prev_net)/prev_net)*100  > 0 ? false : true}
          size="xs"
        > {Math.round(((last_month-prev_net)/prev_net)*100*100)/100}% from last month
      </BadgeDelta>
    </Card>
  )
};