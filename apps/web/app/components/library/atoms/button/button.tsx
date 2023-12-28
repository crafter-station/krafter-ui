"use client";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { generateCompoundVariants } from "./button.helpers";
import { Slot } from "@radix-ui/react-slot";

const baseStyles = cn(
  "relative inline-flex justify-center font-medium gap-1 z-0",
  "outline-2 outline-offset-2 outline-neutral-900 dark:outline-neutral-50",
  "focus-visible:outline-2 focus-visible:outline",
  "[text-shadow:_0_1px_2px_rgb(0_0_0_/_15%)]",
  "transition-colors duration-200 ease-in-"
);

const colorStyles = {
  primary: "border-primary-light dark:border-primary-dark",
  secondary: "border-secondary-light dark:border-secondary-dark",
  success: "border-success-light dark:border-success-dark",
  warning: "border-warning-light dark:border-warning-dark",
  danger: "border-danger-light dark:border-danger-dark",
  info: "border-info-light dark:border-info-dark",
  highlight: "border-highlight-light dark:border-highlight-dark",
  neutral: "border-neutral-400 dark:border-neutral-50 dark:bg-neutral-900",
};

const designStyles = {
  solid: "text-white border",
  outline: "bg-transparent border",
  fancy: cn(
    "text-white after:[content:''] after:absolute after:rounded-[inherit] after:inset-0 after:z-[-1] after:border after:border-transparent",
    "after:bg-clip-content after:bg-inherit after:shadow-[inset_0_2px_3px_-1px_hsla(0,_0%,_100%,_0.7)] dark:after:shadow-[inset_0_2px_3px_-1px_hsla(0,_0%,_100%,_0.5)]",
    "after:bg-gradient-to-t after:to-transparent dark:after:bg-gradient-to-b"
  ),
  link: "hover:underline",
  flat: "",
};

const sizeStyles = {
  small: "py-1 px-2 text-sm rounded-md",
  medium: "py-2 px-3 text-md rounded-lg",
  large: "py-3 px-4 text-lg rounded-xl",
};

const buttonVariants = cva(baseStyles, {
  variants: {
    size: sizeStyles,
    design: designStyles,
    color: colorStyles,
  },
  compoundVariants: [
    ...generateCompoundVariants("outline"),
    ...generateCompoundVariants("solid"),
    ...generateCompoundVariants("fancy"),
    ...generateCompoundVariants("link"),
    ...generateCompoundVariants("flat"),
  ],
  defaultVariants: {
    color: "neutral",
    design: "solid",
    size: "medium",
  },
});

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, color, size, design, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ design, size, color, className }))}
        ref={ref}
        // To please TypeScript
        children={props.children as any}
        dangerouslySetInnerHTML={props.dangerouslySetInnerHTML as any}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
