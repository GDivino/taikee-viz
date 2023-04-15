import { Card, Metric, Text } from "@tremor/react";

export default () => (
  <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
    <Text>Time Left to Achieve Goal</Text>
    <Metric>4 months!</Metric>
  </Card>
);