import { StoryFn, Meta } from '@storybook/react';

import { HabitDay } from '.';

export default {
  title: 'Atoms/HabitDay',
  component: HabitDay,
} as Meta;

export const Default: StoryFn = () => <HabitDay />;
