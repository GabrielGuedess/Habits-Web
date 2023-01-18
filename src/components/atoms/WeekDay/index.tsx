export type WeekDays = 'D' | 'T' | 'Q' | 'S';

export type WeekDayProps = {
  weekDay: WeekDays;
};

export const WeekDay = ({ weekDay }: WeekDayProps) => (
  <div className="flex h-10 w-10 items-center justify-center text-xl font-bold text-zinc-400">
    {weekDay}
  </div>
);
