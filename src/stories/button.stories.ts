// src/stories/button.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../app/shared/components/ui/button/button.component';

const meta: Meta<ButtonComponent> = {
  title: 'UI/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  render: (args) => ({
    props: args,
    template: `
      <app-button
        [variant]="variant"
        [size]="size"
        [disabled]="disabled"
        [icon]="icon"
        [iconPosition]="iconPosition"
        (onClick)="onClick($event)"
      >
        {{ label }}
      </app-button>
    `,
  }),
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'text', 'warn'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// Primary Button
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary Button',
  },
};

// Secondary Button
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button',
  },
};

// Small Button
export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small Button',
  },
};

// With Icon
export const WithIcon: Story = {
  args: {
    label: 'Button with Icon',
    icon: 'home',
    iconPosition: 'left',
  },
};

// Disabled
export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
};