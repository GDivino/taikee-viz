import { Card, Metric, Flex, Text, ProgressBar } from "@tremor/react";
import TimeLeftTilGoal from "../func/progressGoal";
import getData from "../func/getData";

const data = await getData();

const formatter = new Intl.NumberFormat('en-PH', {
  style: 'currency',
  currency: 'PHP',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export default function TimeLeftCard(props: UserProp) {
  const goal_data = TimeLeftTilGoal(data, props.user);
  return(
    <Card className="w-2/5" decoration="top" decorationColor="indigo">
      <Text>Months Left to Achieve Goal</Text>
      <Metric>{goal_data[0].time_left}</Metric> 
      <Text>PHP {formatter.format(goal_data[0].current)} &bull; {Math.round(goal_data[0].progress *100)/100}%</Text>
      <Text>PHP {formatter.format(goal_data[0].goal)}</Text>
      <ProgressBar percentageValue={goal_data[0].progress} color="teal" className="mt-3" />
    </Card>
    );
};