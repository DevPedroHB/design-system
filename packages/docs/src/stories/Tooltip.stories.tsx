import { Box, Button, Tooltip, TooltipProps } from "@pedrohb-ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Typography/Tooltip",
  component: Tooltip,
  args: {
    children: <Button>Hover me</Button>,
    content: "This is a Tooltip",
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "$20",
            background: "$gray500",
          }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};
