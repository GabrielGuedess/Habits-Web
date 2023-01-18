import { StoryFn, Meta } from '@storybook/react';

import { Home } from '.';

export default {
  title: 'Atoms/Home',
  component: Home,
} as Meta;

export const Default: StoryFn = () => <Home />;
