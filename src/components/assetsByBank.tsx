import { Card, Title, DonutChart } from "@tremor/react";
import transformByBank from "../func/transformData";
import getData from "../func/getData";

const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

const data = await getData();
const chartData = transformByBank(data, "ceej@taikee,co");

export default function AssetsByBank() {
  return(
    <Card className="max-w-lg">
      <Title>Assets by Bank</Title>
      <DonutChart
        className="mt-6"
        data={chartData}
        category="Net"
        index="bank_code"
        valueFormatter={valueFormatter}
        colors={["cyan", "amber"]}
      />
    </Card>
  )
};


// DUMMY DATA
// const banks = [
//     {
//         bank_code: "BDO_PERSONAL",
//         "Credit": 113000,
//         "Debit": 21300,
//         "Net": 90000,
//     },
//     {
//         bank_code: "BPI",
//         "Credit": 0,
//         "Debit": 2000,
//         "Net": -2000,
//     },
// ];