import { render, screen } from '@testing-library/react';

import { Home } from '.';

jest.mock('components/molecules/Header', () => ({
  __esModule: true,
  Header: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Header Mock">{children}</div>;
  },
}));

jest.mock('components/organisms/SummaryTable', () => ({
  __esModule: true,
  SummaryTable: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="SummaryTable Mock">{children}</div>;
  },
}));

describe('<Home />', () => {
  it('should render the Home', () => {
    const { container } = render(<Home />);

    expect(screen.getByTestId('Header Mock')).toBeInTheDocument();
    expect(screen.getByTestId('SummaryTable Mock')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
