import { Check } from 'phosphor-react';

export const NewHabitForm = () => (
  <form className="mt-6 flex w-full flex-col">
    <label className="font-semibold leading-tight" htmlFor="title">
      Qual seu comprometimento?
    </label>
    <input
      type="text"
      id="title"
      placeholder="Exercícios, dormir bem, etc..."
      className="mt-3 rounded-lg bg-zinc-800 p-4 text-white placeholder:text-zinc-400"
      autoFocus
    />

    <label className="mt-4 font-semibold leading-tight" htmlFor="">
      Qual a recorrência?
    </label>

    <button
      type="submit"
      className="mt-6 flex items-center justify-center gap-3 rounded-lg bg-green-600 p-4 font-semibold transition-colors hover:bg-green-500"
    >
      <Check size={20} weight="bold" /> Confirmar
    </button>
  </form>
);
