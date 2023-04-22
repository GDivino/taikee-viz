import { Card, Title, BarChart } from "@tremor/react";
import transformByBank from "../func/transformByBank";
import getData from "../func/getData";

const valueFormatter = (number: number) =>
  `PHP ${Intl.NumberFormat("ph").format(number).toString()}`;

const data = await getData();
// if (chartData[-1].Net <= 0) {
  
// }
  

export default function AssetsByBank(props: UserProp) {
  const chartData = transformByBank(data, props.user);
  return(
    <Card className="w-2/5">
      <Title>Assets Flow by Bank</Title>
      <BarChart
        className="mt-6"
        data={chartData}
        index="bank_code"
        categories={["Debit", "Credit", "Net"]}
        colors={["red", "green", "cyan"]}
        valueFormatter={valueFormatter}
        layout="horizontal"
        yAxisWidth={48}
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