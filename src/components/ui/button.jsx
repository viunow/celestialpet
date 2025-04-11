"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-celestial-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-[6px]",
  {
    variants: {
      variant: {
        default:
          "bg-celestial-blue text-white hover:bg-celestial-blue/90 border-celestial-blue/30",
        destructive:
          "bg-red-500 text-white hover:bg-red-500/90 border-red-500/30",
        outline:
          "border border-celestial-blue bg-transparent hover:bg-celestial-blue/10 text-celestial-brown border-celestial-blue",
        secondary:
          "bg-celestial-brown text-white hover:bg-celestial-brown/80 border-celestial-brown/30",
        ghost:
          "hover:bg-celestial-blue/10 hover:text-celestial-brown border-transparent",
        link: "text-celestial-blue underline-offset-4 hover:underline border-transparent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
