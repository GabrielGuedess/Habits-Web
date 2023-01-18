import { render, screen } from '@testing-library/react';

import { Main } from '.';

describe('<Main />', () => {
  it('should render the heading correctly', () => {
    const { container } = render(
      <Main
        title="React Avançado"
        description="TypeScript, ReactJS, NextJS e Styled Components"
      />,
    );

    expect(
      screen.getByRole('heading', { name: /react avançado/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
