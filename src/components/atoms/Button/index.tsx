import * as Dialog from '@radix-ui/react-dialog';
import { Plus } from 'phosphor-react';

export const Button = () => (
  <Dialog.Trigger
    type="button"
    className="group flex items-center gap-3 rounded-lg border border-violet-500 px-6 py-4 font-semibold  transition-all hover:border-violet-300"
  >
    <Plus
      size={20}
      className="text-violet-500 transition-all group-hover:text-violet-300"
    />
    Novo hábito
  </Dialog.Trigger>
);
