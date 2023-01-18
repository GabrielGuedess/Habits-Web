import { StoryFn, Meta } from '@storybook/react';

import { Header } from '.';

export default {
  title: 'Molecules/Header',
  component: Header,
} as Meta;

export const Default: StoryFn = () => <Header />;
