import { Card, Metric, Text } from "@tremor/react";
import timeLeftTilGoal from "../func/timeLeftGoal";
import getData from "../func/getData";

const data = await getData();
const timeLeft = timeLeftTilGoal(data, "ceej@taikee,co");

export default () => (
  <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
    <Text>Months Left to Achieve Goal</Text>
    <Metric>{timeLeft}</Metric>
  </Card>
);