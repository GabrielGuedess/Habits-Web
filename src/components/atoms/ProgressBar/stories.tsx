import { StoryFn, Meta } from '@storybook/react';

import { ProgressBar, ProgressBarProps } from '.';

export default {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
  args: { progress: 70 },
} as Meta<ProgressBarProps>;

export const Default: StoryFn<ProgressBarProps> = args => (
  <ProgressBar {...args} />
);
