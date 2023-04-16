import { Card, Flex, Metric, BadgeDelta, Text } from "@tremor/react";
import transformByBank from "../func/transformByBank";
import getData from "../func/getData";

const data = await getData();

export default function NetMoneyCard(props: UserProp) {
  const chartData = transformByBank(data, props.user);
  var total = 0;
  chartData.forEach((x: BankInfo) => {
    total += x.Net;
  })
  return(
    <Card className="w-2/5" decoration="top" decorationColor="indigo">
      <Flex justifyContent="between" alignItems="center">
        <Text>Net Money</Text>
        {/* <BadgeDelta
          deltaType="increase"
          isIncreasePositive={true}
          size="xs"
        >
        </BadgeDelta> */}
      </Flex>
      <Metric>{"PHP " + Intl.NumberFormat("ph").format(total).toString()}</Metric>
    </Card>
  )
};