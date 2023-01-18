import Image from 'next/image';

import { Button } from 'components/atoms/Button';

export const Header = () => (
  <header className="mx-auto flex w-full max-w-3xl items-center justify-between">
    <Image
      src="/svg/logo.svg"
      alt="Habits"
      width={147.84}
      height={71.49}
      priority
    />

    <Button />
  </header>
);
