import { StoryFn, Meta } from '@storybook/react';

import { SummaryTable } from '.';

export default {
  title: 'Organisms/SummaryTable',
  component: SummaryTable,
} as Meta;

export const Default: StoryFn = () => <SummaryTable />;
