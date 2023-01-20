import { render, screen } from '@testing-library/react';

import * as Dialog from '@radix-ui/react-dialog';

import { Button } from '.';

describe('<Button />', () => {
  it('should render the Button', () => {
    const { container } = render(
      <Dialog.Root>
        <Button />
      </Dialog.Root>,
    );

    expect(
      screen.getByRole('button', { name: /Novo hábito/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
