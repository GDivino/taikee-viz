import { Card, Metric, Text } from "@tremor/react";
import TimeLeftTilGoal from "../func/timeLeftGoal";
import getData from "../func/getData";

const data = await getData();

export default function TimeLeftCard(props: UserProp) {
  const timeLeft = TimeLeftTilGoal(data, props.user);
  return(
    <Card className="w-2/5" decoration="top" decorationColor="indigo">
      <Text>Months Left to Achieve Goal</Text>
      <Metric>{timeLeft}</Metric>
    </Card>
  )
};