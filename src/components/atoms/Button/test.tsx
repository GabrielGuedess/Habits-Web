import { render, screen } from '@testing-library/react';

import { Button } from '.';

describe('<Button />', () => {
  it('should render the Button', () => {
    const { container } = render(<Button />);

    expect(
      screen.getByRole('button', { name: /Novo hábito/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
