import { Card, Title, LineChart } from "@tremor/react";
import "../src/index.css"

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
  },
  {
    month: "July",
    "Credit": 10000,
    "Debit": 5000,
  },
  {
    month: "August",
    "Credit": 10000,
    "Debit": 3500,
  },
  {
    month: "September",
    "Credit": 10000,
    "Debit": 12000,
  },
]

export default function TotalAssets() {
  return (
    <Card className="total-assets-card">
      <Title>Total Assets 2023</Title>
      <LineChart
        className="total-assets-line"
        data={chartdata}
        index="month"
        categories={["Credit", "Debit"]}
        colors={["blue", "red"]}
        yAxisWidth={40}
      />
    </Card>
  );
}