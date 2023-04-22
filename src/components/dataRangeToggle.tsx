import { useState } from "react";
import { Toggle, ToggleItem } from "@tremor/react";
import transformByBank from "../func/transformByBank";
import getData from "../func/getData";
// import {  CalendarIcon, } from "@heroicons/react/outline";
// TO USE: icon={CalendarIcon}

const data = await getData();

export default function Toggles(props: UserProp) {
    const chartData = transformByBank(data, props.user);
    const [value, setValue] = useState("month");

    return (
    <Toggle value={value} onValueChange={setValue}>
        <ToggleItem value="day" text={"Day"} />
        <ToggleItem value="week" text={"Week"} />
        <ToggleItem value="month" text={"Month"} />
    </Toggle>
    );
};