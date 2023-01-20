import { render } from '@testing-library/react';

import { ProgressBar } from '.';

describe('<ProgressBar />', () => {
  it('should render the ProgressBar', () => {
    const { container } = render(<ProgressBar progress={70} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
