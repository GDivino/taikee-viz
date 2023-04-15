import { Card, Flex, Metric, BadgeDelta, Text } from "@tremor/react";

export default () => (
  <Card className="max-w-sm">
    <Flex justifyContent="between" alignItems="center">
      <Text>Net Money</Text>
      <BadgeDelta
        deltaType="increase"
        isIncreasePositive={true}
        size="xs"
      >
        +240%
      </BadgeDelta>
    </Flex>
    <Metric>PHP 13,000</Metric>
  </Card>
);