import React from 'react';
import { cn } from '@/lib/utils';

export function Badge({ children, variant = 'default', className, ...props }) {
  const variants = {
    default: "bg-[#ffdcc3] text-[#301400]",
    secondary: "bg-[#f1e5df] text-[#52443d]",
    tertiary: "bg-[#e3e7af] text-[#1b1e00]",
    outline: "border border-[#d7c3b9] text-[#52443d]",
    success: "bg-emerald-100 text-emerald-900 border border-emerald-200",
    warning: "bg-amber-100 text-amber-900 border border-amber-200"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
