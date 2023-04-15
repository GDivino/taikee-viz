import { Card, Title, AreaChart } from "@tremor/react";

const chartdata = [
  {
    "date": "Jan 22",
    "Debit": 10000,
    "Credit": 8000,
  },
  {
    "date": "Feb 22",
    "Debit": 10000,
    "Credit": 5000,
  },
  {
    "date": "Mar 22",
    "Debit": 10000,
    "Credit": 12000,
  },
  {
    "date": "Apr 22",
    "Debit": 10000,
    "Credit": 2000,
  },
  {
    "date": "May 22",
    "Debit": 10000,
    "Credit": 0,
  },
  {
    "date": "Jun 22",
    "Debit": 10000,
    "Credit": 0,
  },
];

const dataFormatter = (number: number) => {
  return "P " + Intl.NumberFormat("ph").format(number).toString();
};

export default function TotalAssets() {
  return (
    <Card>
      <Title>Monthly Earnings and Spendings</Title>
      <AreaChart
        className="total-assets-card"
        data={chartdata}
        index="date"
        categories={["Debit", "Credit"]}
        colors={["red", "cyan"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  )
}
