import { render } from '@testing-library/react';

import { WeekDay } from '.';

describe('<WeekDay />', () => {
  it('should render the heading', () => {
    const { container } = render(<WeekDay weekDay="D" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
