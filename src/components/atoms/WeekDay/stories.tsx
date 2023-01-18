import { StoryFn, Meta } from '@storybook/react';

import { WeekDay, WeekDayProps } from '.';

export default {
  title: 'Atoms/WeekDay',
  component: WeekDay,
  args: {
    weekDay: 'D',
  },
} as Meta<WeekDayProps>;

export const Default: StoryFn<WeekDayProps> = args => <WeekDay {...args} />;
