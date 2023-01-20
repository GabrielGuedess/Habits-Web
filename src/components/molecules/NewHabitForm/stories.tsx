import { StoryFn, Meta } from '@storybook/react';

import { NewHabitForm } from '.';

export default {
  title: 'Molecules/NewHabitForm',
  component: NewHabitForm,
} as Meta;

export const Default: StoryFn = () => <NewHabitForm />;
