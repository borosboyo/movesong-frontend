"use client";
import * as React from "react";

import { cn } from "@/core/lib/utils"
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,react/prop-types
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
        <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-gray-400">
          {showPassword ? (
            <EyeClosedIcon
              className="h-4 w-4"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <EyeOpenIcon
              className="h-4 w-4"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
      </div>
    );
  },
);
PasswordInput.displayName = "Input";

export { PasswordInput }
