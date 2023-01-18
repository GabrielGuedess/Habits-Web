import { render, screen } from '@testing-library/react';

import { SummaryTable } from '.';

jest.mock('components/atoms/HabitDay', () => ({
  __esModule: true,
  HabitDay: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="HabitDay Mock">{children}</div>;
  },
}));

jest.mock('components/atoms/WeekDay', () => ({
  __esModule: true,
  WeekDay: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="WeekDay Mock">{children}</div>;
  },
}));

describe('<SummaryTable />', () => {
  it('should render the SummaryTable', () => {
    const { container } = render(<SummaryTable />);

    expect(screen.getAllByTestId('HabitDay Mock')).toHaveLength(18 * 7);
    expect(screen.getAllByTestId('WeekDay Mock')).toHaveLength(7);

    expect(container.firstChild).toMatchSnapshot();
  });
});
