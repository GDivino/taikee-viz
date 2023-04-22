import { Card, Metric, Flex, Text, ProgressBar } from "@tremor/react";
import TimeLeftTilGoal from "../func/progressGoal";
import getData from "../func/getData";

const data = await getData();

const formatter = new Intl.NumberFormat('en-PH', {
  style: 'currency',
  currency: 'PHP',
});

export default function TimeLeftCard(props: UserProp) {
  const goal_data = TimeLeftTilGoal(data, props.user);
  return(
    <Card className="w-2/5" decoration="top" decorationColor="indigo">
      <Text>Months Left to Achieve Goal</Text>
      <Metric>{goal_data[0].time_left > 0 ? goal_data[0].time_left : "Goal Achieved!" }</Metric> 
      <Flex>
        <Text>{formatter.format(goal_data[0].current)} &bull; {Math.round(goal_data[0].progress *100)/100}%</Text>
        <Text>{formatter.format(goal_data[0].goal)}</Text>
      </Flex>
      <ProgressBar percentageValue={goal_data[0].progress} color="teal" className="mt-3" />
    </Card>
    );
};