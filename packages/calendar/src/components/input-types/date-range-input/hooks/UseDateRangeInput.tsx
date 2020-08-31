import { useCallback, useMemo, useRef, useState } from "react";
import {
  DateRangeCalendarOnChangeValue,
  DateRangeFocusedInput
} from "../../../calendar-types/date-range-calendar/DateRangeCalendar";
import { DayData } from "../../../../util/calendar/CalendarDataFactory";
import { isAfter } from "date-fns";

export const useDateRangeInput = (
  value: DateRangeCalendarOnChangeValue,
  onChange: (dateRange: DateRangeCalendarOnChangeValue) => void
) => {
  const startDateInputRef = useRef<HTMLInputElement>(null);
  const endDateInputRef = useRef<HTMLInputElement>(null);

  const [showingCalendar, setShowingCalendar] = useState(false);
  const [showingFocusHighlight, setShowingFocusHighlight] = useState(false);
  const [focusedInput, setFocusedInput] = useState<
    DateRangeFocusedInput | undefined
  >(undefined);

  const showCalendarStartDate = useCallback(() => {
    setFocusedInput("startDate");
    setShowingCalendar(true);
    setShowingFocusHighlight(true);
    return true;
  }, [setFocusedInput, setShowingCalendar, setShowingFocusHighlight]);

  const showCalendarEndDate = useCallback(() => {
    setFocusedInput("endDate");
    setShowingCalendar(true);
    setShowingFocusHighlight(true);
    return true;
  }, [setFocusedInput, setShowingCalendar, setShowingFocusHighlight]);

  const hideCalendar = useCallback(() => {
    setShowingCalendar(false);
    setShowingFocusHighlight(false);
  }, [setShowingCalendar, setShowingFocusHighlight]);

  const onClickDay = useCallback(
    (day: DayData) => {
      if (focusedInput === "startDate") {
        onChange({
          startDate: day.date,
          endDate: value.endDate
        });
        if (!value.endDate) {
          setFocusedInput("endDate");
        } else {
          setTimeout(hideCalendar, 150);
        }
      } else if (focusedInput === "endDate") {
        onChange({
          startDate: value.startDate,
          endDate: day.date
        });
        if (!value.startDate) {
          setFocusedInput("startDate");
        } else {
          setTimeout(hideCalendar, 150);
        }
      }
    },
    [
      focusedInput,
      onChange,
      setFocusedInput,
      hideCalendar,
      value.startDate,
      value.endDate
    ]
  );

  const startDateIsAfterEnd = useMemo(
    () =>
      value.startDate &&
      value.endDate &&
      isAfter(value.startDate, value.endDate),
    [value.startDate, value.endDate]
  );

  return {
    showingCalendar,
    showingFocusHighlight,
    hideCalendar,
    showCalendarEndDate,
    showCalendarStartDate,
    focusedInput,
    setFocusedInput,
    startDateInputRef,
    endDateInputRef,
    onClickDay,
    startDateIsAfterEnd
  };
};
