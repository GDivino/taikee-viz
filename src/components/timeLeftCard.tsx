import { Card, Metric, Text } from "@tremor/react";
import TimeLeftTilGoal from "../func/timeLeftGoal";
import getData from "../func/getData";

const data = await getData();
const timeLeft = TimeLeftTilGoal(data, "basty@taikee,co");

export default function TimeLeftCard() {
  return(
    <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
      <Text>Months Left to Achieve Goal</Text>
      <Metric>{timeLeft}</Metric>
    </Card>
  )
};