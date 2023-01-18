import { StoryFn, Meta } from '@storybook/react';

import { Button } from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

export const Default: StoryFn = () => <Button />;
