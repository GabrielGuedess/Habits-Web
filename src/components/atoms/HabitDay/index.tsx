import * as Checkbox from '@radix-ui/react-checkbox';
import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { Check } from 'phosphor-react';

import { ProgressBar } from '../ProgressBar';

export type HabitDayProps = {
  date: Date;
  completed?: number;
  amount?: number;
  state?: 'active' | 'disabled';
};

export const HabitDay = ({
  completed = 0,
  amount = 0,
  date,
  state = 'active',
}: HabitDayProps) => {
  const completedPercentage =
    amount > 0 ? Math.round((completed / amount) * 100) : 0;

  const dayAndMonth = dayjs(date).format('DD/MM');
  const dayOfWeek = dayjs(date).format('dddd');

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx('h-10 w-10 rounded-lg border-2 ', {
          'cursor-not-allowed opacity-40': state === 'disabled',
          'border-zinc-800 bg-zinc-900': completedPercentage === 0,
          'border-violet-700 bg-violet-900':
            completedPercentage > 0 &&
            completedPercentage < 20 &&
            state === 'active',
          'border-violet-600 bg-violet-800':
            completedPercentage >= 20 &&
            completedPercentage < 40 &&
            state === 'active',
          'border-violet-500 bg-violet-700':
            completedPercentage >= 40 &&
            completedPercentage < 60 &&
            state === 'active',
          'border-violet-500 bg-violet-600':
            completedPercentage >= 60 &&
            completedPercentage < 80 &&
            state === 'active',
          'border-violet-400 bg-violet-500':
            completedPercentage >= 80 && state === 'active',
        })}
      />
      {state !== 'disabled' && (
        <Popover.Portal>
          <Popover.Content className="flex min-w-[320px] flex-col rounded-2xl bg-zinc-900 p-6 ">
            <span className="font-semibold text-zinc-400">{dayOfWeek}</span>
            <span className="mt-1 text-3xl font-extrabold leading-tight">
              {dayAndMonth}
            </span>

            <ProgressBar progress={completedPercentage} />

            <div className="mt-6 flex flex-col gap-3">
              <Checkbox.Root className="group flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-zinc-800 bg-zinc-900 group-data-[state=checked]:border-green-500 group-data-[state=checked]:bg-green-500">
                  <Checkbox.Indicator>
                    <Check size={20} className="text-white" />
                  </Checkbox.Indicator>
                </div>

                <span className="text-xl font-semibold leading-tight text-white group-data-[state=checked]:text-zinc-400 group-data-[state=checked]:line-through">
                  2L água
                </span>
              </Checkbox.Root>
            </div>

            <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
          </Popover.Content>
        </Popover.Portal>
      )}
    </Popover.Root>
  );
};
