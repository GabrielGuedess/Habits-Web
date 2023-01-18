import { render, screen } from '@testing-library/react';

import { Header } from '.';

jest.mock('components/atoms/Button', () => ({
  __esModule: true,
  Button: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Button Mock">{children}</div>;
  },
}));

describe('<Header />', () => {
  it('should render the Header', () => {
    const { container } = render(<Header />);

    expect(screen.getByTestId('Button Mock')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
