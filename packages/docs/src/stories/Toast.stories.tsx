import { Button, Toast, ToastProps } from "@pedrohb-ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useRef, useState } from "react";

const DemoToast = (props: ToastProps) => {
  const [isOpen, setOpen] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
      >
        Agendar
      </Button>
      <Toast open={isOpen} onOpenChange={setOpen} {...props} />
    </div>
  );
};

export default {
  title: "Surfaces/Toast",
  component: DemoToast,
  args: {
    title: "Agendamento realizado",
    description: "Quarta-feira, 11 de Janeiro às 17h",
  },
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {};
