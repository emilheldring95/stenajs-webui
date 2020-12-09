import * as React from "react";
import { useState } from "react";
import { DateRangeOnChangeValue } from "../date-range/hooks/UseDateRangeOnClickDayHandler";
import { DateRangeDualTextInput } from "./DateRangeDualTextInput";
import { useDateRangeCalendarState } from "../../components/calendar-types/date-range-calendar/hooks/UseDateRangeCalendarState";

export default {
  title: "calendar/Input/DateRangeDualTextInput",
  component: DateRangeDualTextInput,
};

export const Standard = () => {
  const [value, setValue] = useState<DateRangeOnChangeValue | undefined>(
    undefined
  );
  const props = useDateRangeCalendarState();

  return (
    <div style={{ display: "inline-block" }}>
      <DateRangeDualTextInput
        value={value}
        onValueChange={setValue}
        {...props}
      />
    </div>
  );
};

export const Prefilled = () => {
  const [value, setValue] = useState<DateRangeOnChangeValue | undefined>(
    undefined
  );
  const props = useDateRangeCalendarState();
  return (
    <div style={{ display: "inline-block" }}>
      <DateRangeDualTextInput
        value={value}
        onValueChange={setValue}
        {...props}
      />
    </div>
  );
};