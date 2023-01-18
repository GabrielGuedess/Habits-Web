export type HabitDayProps = {
  state?: 'active' | 'disabled';
};

export const HabitDay = ({ state = 'active' }: HabitDayProps) => (
  <div
    className={`h-10 w-10 rounded-lg border-2 border-zinc-800 bg-zinc-900 ${
      state === 'disabled' && 'cursor-not-allowed opacity-40'
    }`}
  />
);
