import { render } from '@testing-library/react';

import { NewHabitForm } from '.';

describe('<NewHabitForm />', () => {
  it('should render the NewHabitForm', () => {
    const { container } = render(<NewHabitForm />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
