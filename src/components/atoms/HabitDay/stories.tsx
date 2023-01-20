import { StoryFn, Meta } from '@storybook/react';

import { HabitDay, HabitDayProps } from '.';

export default {
  title: 'Atoms/HabitDay',
  component: HabitDay,
  args: {
    amount: 5,
    completed: 4,
  },
} as Meta<HabitDayProps>;

export const Default: StoryFn<HabitDayProps> = args => <HabitDay {...args} />;
