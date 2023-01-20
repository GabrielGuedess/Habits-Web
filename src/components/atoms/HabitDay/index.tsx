import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';

import { ProgressBar } from '../ProgressBar';

export type HabitDayProps = {
  completed: number;
  amount: number;
  state?: 'active' | 'disabled';
};

export const HabitDay = ({
  completed,
  amount,
  state = 'active',
}: HabitDayProps) => {
  const completedPercentage = Math.round((completed / amount) * 100);

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

      <Popover.Portal>
        <Popover.Content className="flex min-w-[320px] flex-col rounded-2xl bg-zinc-900 p-6 ">
          <span className="font-semibold text-zinc-400">segunda-feira</span>
          <span className="mt-1 text-3xl font-extrabold leading-tight">
            17/01
          </span>

          <ProgressBar progress={completedPercentage} />

          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
