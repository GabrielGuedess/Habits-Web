import { useEffect, useState } from 'react';

import { HabitDay } from 'components/atoms/HabitDay';
import { WeekDay, WeekDays } from 'components/atoms/WeekDay';

import dayjs from 'dayjs';
import { api } from 'lib/axios';
import { generateDatesFromYearBeginning } from 'utils/generateDatesFromYearBeginning';

const weekDays: WeekDays[] = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const summaryDates = generateDatesFromYearBeginning();

const minimumSummaryDatesSize = 18 * 7;
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length;

type SummaryProps = {
  id: string;
  date: Date;
  completed: number;
  amount: number;
};

export const SummaryTable = () => {
  const [summary, setSummary] = useState<SummaryProps[]>([]);

  useEffect(() => {
    async function getData() {
      const { data } = await api.get<SummaryProps[]>('/habits/summary');

      setSummary(data);
    }

    getData();
  }, []);

  return (
    <section className="flex w-full">
      <aside className="grid grid-flow-row grid-rows-7 gap-3">
        {weekDays.map((item, index) => (
          <WeekDay key={`${item}-${index}`} weekDay={item} />
        ))}
      </aside>

      <main className="grid grid-flow-col grid-rows-7 gap-3">
        {summaryDates.map(date => {
          const dayInSummary = summary.find(day =>
            dayjs(date).isSame(day.date, 'day'),
          );

          return (
            <HabitDay
              key={date.toString()}
              date={date}
              amount={dayInSummary?.amount}
              completed={dayInSummary?.completed}
            />
          );
        })}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, index) => (
            <HabitDay
              date={new Date()}
              amount={2}
              completed={0}
              key={index}
              state="disabled"
            />
          ))}
      </main>
    </section>
  );
};
