"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";

import { useDarkMode } from "@/contexts/DarkModeContext";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const { isDarkMode } = useDarkMode();

  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-soffset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
        isDarkMode
          ? "data-[state=checked]:bg-black data-[state=unchecked]:bg-black border-white"
          : "data-[state=checked]:bg-white data-[state=unchecked]:bg-white border-black",
        className
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform",
          isDarkMode
            ? "bg-white data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
            : "bg-black data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
