import React from 'react';
import { cn } from '@/lib/utils';

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-[28px] bg-white border border-[#f1e5df] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={cn("p-6 flex-1 flex flex-col", className)} {...props}>
      {children}
    </div>
  );
}
