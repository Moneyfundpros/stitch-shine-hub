import * as React from "react";
import { cn } from "@/lib/utils";

export interface InvestmentInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const InvestmentInput = React.forwardRef<HTMLInputElement, InvestmentInputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary">
            {icon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-text-primary",
            "focus:outline-0 focus:ring-2 focus:ring-brand-primary",
            "border border-input-border bg-input-background",
            "h-14 placeholder:text-text-secondary p-4 text-base font-normal leading-normal",
            "transition-fast hover:border-brand-primary/50",
            icon && "pl-12",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
InvestmentInput.displayName = "InvestmentInput";

export { InvestmentInput };