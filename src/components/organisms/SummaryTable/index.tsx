import { HabitDay } from 'components/atoms/HabitDay';
import { WeekDay, WeekDays } from 'components/atoms/WeekDay';

import { generateDatesFromYearBeginning } from 'utils/generateDatesFromYearBeginning';

const weekDays: WeekDays[] = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const summaryDates = generateDatesFromYearBeginning();

const minimumSummaryDatesSize = 18 * 7;
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length;

export const SummaryTable = () => (
  <section className="flex w-full">
    <aside className="grid grid-flow-row grid-rows-7 gap-3">
      {weekDays.map((item, index) => (
        <WeekDay key={`${item}-${index}`} weekDay={item} />
      ))}
    </aside>

    <main className="grid grid-flow-col grid-rows-7 gap-3">
      {summaryDates.map(date => (
        <HabitDay
          key={date.toString()}
          amount={5}
          completed={Math.round(Math.random() * 5)}
        />
      ))}

      {amountOfDaysToFill > 0 &&
        Array.from({ length: amountOfDaysToFill }).map((_, index) => (
          <HabitDay amount={2} completed={0} key={index} state="disabled" />
        ))}
    </main>
  </section>
);
