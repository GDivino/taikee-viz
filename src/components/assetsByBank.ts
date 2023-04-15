import { Card, Title, DonutChart } from "@tremor/react";

const banks = [
    {
        bank_code: "BDO_PERSONAL",
        "Credit": 113000,
        "Debit": 21300,
        "Net": 90000,
    },
    {
        bank_code: "BPI",
        "Credit": 0,
        "Debit": 2000,
        "Net": -2000,
    },
];

const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export default DonutChart = () => (
  <Card className="max-w-lg">
    <Title>Assets by Bank</Title>
    <DonutChart
      className="mt-6"
      data={banks}
      category="Net"
      index="bank_code"
      valueFormatter={valueFormatter}
      colors={["cyan", "amber"]}
    />
  </Card>
);