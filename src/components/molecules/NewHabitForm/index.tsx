import { FormEvent, useState } from 'react';

import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

const availableWeekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

export const NewHabitForm = () => {
  const [title, setTitle] = useState('');
  const [weekDays, setWeekDays] = useState<number[]>([]);

  function createNewHabit(event: FormEvent) {
    event.preventDefault();

    // eslint-disable-next-line no-console
    console.log(title, weekDays);
  }

  function handleToggleWeekDay(weekDay: number) {
    if (weekDays.includes(weekDay)) {
      setWeekDays(state => state.filter(item => item !== weekDay));
    } else {
      setWeekDays(state => [...state, weekDay]);
    }
  }

  return (
    <form onSubmit={createNewHabit} className="mt-6 flex w-full flex-col">
      <label className="font-semibold leading-tight" htmlFor="title">
        Qual seu comprometimento?
      </label>
      <input
        type="text"
        id="title"
        placeholder="Exercícios, dormir bem, etc..."
        className="mt-3 rounded-lg bg-zinc-800 p-4 text-white placeholder:text-zinc-400"
        autoFocus
        onChange={event => setTitle(event.target.value)}
      />

      <label className="mt-4 font-semibold leading-tight" htmlFor="">
        Qual a recorrência?
      </label>

      <div className="mt-3 flex flex-col gap-2">
        {availableWeekDays.map((weekDay, index) => (
          <Checkbox.Root
            key={weekDay}
            className="group flex items-center gap-3"
            onCheckedChange={() => handleToggleWeekDay(index)}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-zinc-800 bg-zinc-900 group-data-[state=checked]:border-green-500 group-data-[state=checked]:bg-green-500">
              <Checkbox.Indicator>
                <Check size={20} className="text-white" />
              </Checkbox.Indicator>
            </div>

            <span className="leading-tight text-white">{weekDay}</span>
          </Checkbox.Root>
        ))}
      </div>

      <button
        type="submit"
        className="mt-6 flex items-center justify-center gap-3 rounded-lg bg-green-600 p-4 font-semibold transition-colors hover:bg-green-500"
      >
        <Check size={20} weight="bold" /> Confirmar
      </button>
    </form>
  );
};
