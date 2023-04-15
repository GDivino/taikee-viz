import { Card, Title, LineChart } from "@tremor/react";

const chartdata = [
  {
    month: "January",
    "Credit": 10000,
    "Debit": 8000,
  },
  {
    month: "February",
    "Credit": 10000,
    "Debit": 5000,
  },
  {
    month: "March",
    "Credit": 10000,
    "Debit": 12000,
  },
  {
    month: "April",
    "Credit": 10000,
    "Debit": 2000,
  },
  {
    month: "May",
    "Credit": 10000,
    "Debit": 0,
  },
  {
    month: "June",
    "Credit": 10000,
    "Debit": 0,
  }

];

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}%`;

export default LineChart = () => (
  <Card>
    <Title>Total Assets 2023</Title>
    <LineChart
      className="mt-6"
      data={chartdata}
      index="month"
      categories={["Credit", "Debit"]}
      colors={["blue", "red"]}
      valueFormatter={dataFormatter}
      yAxisWidth={40}
    />
  </Card>
);