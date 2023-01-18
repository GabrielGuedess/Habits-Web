import { render } from '@testing-library/react';

import { HabitDay } from '.';

describe('<HabitDay />', () => {
  it('should render the HabitDay', () => {
    const { container } = render(<HabitDay />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the HabitDay disabled', () => {
    const { container } = render(<HabitDay state="disabled" />);

    expect(container.firstChild).toHaveClass(
      'cursor-not-allowed',
      'opacity-40',
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
