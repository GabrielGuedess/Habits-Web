import Image from 'next/image';

import { Button } from 'components/atoms/Button';

import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';

import { NewHabitForm } from '../NewHabitForm';

export const Header = () => (
  <header className="mx-auto flex w-full max-w-3xl items-center justify-between">
    <Image
      src="/svg/logo.svg"
      alt="Habits"
      width={147.84}
      height={71.49}
      priority
    />

    <Dialog.Root>
      <Button />

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 h-screen w-screen bg-black/80" />

        <Dialog.Content className="absolute top-1/2 left-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-zinc-900 p-10">
          <Dialog.Close className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-200">
            <X size={24} aria-label="Fechar" />
          </Dialog.Close>

          <Dialog.Title className="text-3xl font-extrabold leading-tight">
            Criar hábito
          </Dialog.Title>

          <NewHabitForm />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </header>
);
