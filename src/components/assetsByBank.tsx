import { Card, Title, DonutChart } from "@tremor/react";
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
      <Title>Assets by Bank</Title>
      <DonutChart
        className="mt-6"
        data={chartData}
        category="Net"
        index="bank_code"
        valueFormatter={valueFormatter}
        showLabel = {true}
        // colors={["cyan", "amber"]}
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