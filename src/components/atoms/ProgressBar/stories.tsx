import { StoryFn, Meta } from '@storybook/react';

import { ProgressBar } from '.';

export default {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
} as Meta;

export const Default: StoryFn = () => <ProgressBar />;
