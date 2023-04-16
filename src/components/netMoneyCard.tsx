import { Card, Flex, Metric, BadgeDelta, Text } from "@tremor/react";
import transformByBank from "../func/transformByBank";
import getData from "../func/getData";

const data = await getData();
const chartData = transformByBank(data, "ceej@taikee,co");
var total = 0;
chartData.forEach((x: BankInfo) => {
  total += x.Net;
})

const dataFormatter = (number: number) => {
  return "PHP " + Intl.NumberFormat("ph").format(number).toString();
};

export default function NetMoneyCard() {
  return(
    <Card className="max-w-sm">
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