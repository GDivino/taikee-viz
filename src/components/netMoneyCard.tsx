import { Card, Flex, Metric, BadgeDelta, Text } from "@tremor/react";
import netMoney from "../func/netMoney";
import getData from "../func/getData";

const data = await getData();
const chartData = netMoney(data, "ceej@taikee,co");

export default function netMoneyCard() {
  return(
    <Card className="max-w-sm">
      <Flex justifyContent="between" alignItems="center">
        <Text>Net Money</Text>
        <BadgeDelta
          deltaType="increase"
          isIncreasePositive={true}
          size="xs"
        >
          {chartData[-1].month}
        </BadgeDelta>
      </Flex>
      <Metric>{chartData[-1].netChange}</Metric>
    </Card>
  )
};