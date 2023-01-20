import { render } from '@testing-library/react';

import { HabitDay } from '.';

describe('<HabitDay />', () => {
  it('should render the HabitDay', () => {
    const { container } = render(<HabitDay amount={5} completed={4} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the HabitDay disabled', () => {
    const { container } = render(
      <HabitDay amount={5} completed={4} state="disabled" />,
    );

    expect(container.firstChild).toHaveClass(
      'cursor-not-allowed',
      'opacity-40',
    );
  });

  it('should render the HabitDay with 0 percentage', () => {
    const { container } = render(
      <HabitDay amount={2} completed={0} state="active" />,
    );

    expect(container.firstChild).toHaveClass('border-zinc-800', 'bg-zinc-900');
  });
  it('should render the HabitDay with less 20 percentage', () => {
    const { container } = render(<HabitDay amount={6} completed={1} />);

    expect(container.firstChild).toHaveClass(
      'border-violet-700',
      'bg-violet-900',
    );
  });

  it('should render the HabitDay with less 40 percentage', () => {
    const { container } = render(<HabitDay amount={5} completed={1} />);

    expect(container.firstChild).toHaveClass(
      'border-violet-600',
      'bg-violet-800',
    );
  });

  it('should render the HabitDay with less 60 percentage', () => {
    const { container } = render(<HabitDay amount={11} completed={6} />);

    expect(container.firstChild).toHaveClass(
      'border-violet-500',
      'bg-violet-700',
    );
  });

  it('should render the HabitDay with less 80 percentage', () => {
    const { container } = render(<HabitDay amount={11} completed={8} />);

    expect(container.firstChild).toHaveClass(
      'border-violet-500',
      'bg-violet-600',
    );
  });
});
