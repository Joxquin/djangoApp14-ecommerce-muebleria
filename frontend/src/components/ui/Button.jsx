import React from 'react';
import { cn } from '@/lib/utils';

export function Button({ 
  children, 
  variant = 'filled', 
  size = 'md', 
  className, 
  disabled, 
  icon: Icon,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  
  const variants = {
    // M3 Filled Button (Tonal & Primary expressive)
    filled: "bg-[#944b00] text-white hover:bg-[#7b3e00] active:bg-[#633200] shadow-sm hover:shadow-md",
    tonal: "bg-[#fedcc6] text-[#2b1708] hover:bg-[#facbb0] active:bg-[#f6bb99]",
    outlined: "border border-[#84746c] text-[#944b00] hover:bg-[#944b00]/5 active:bg-[#944b00]/10",
    text: "text-[#944b00] hover:bg-[#944b00]/10 active:bg-[#944b00]/15",
    elevated: "bg-[#fff8f5] text-[#944b00] shadow-md hover:shadow-lg hover:bg-white"
  };

  const sizes = {
    sm: "h-9 px-4 text-xs rounded-full gap-1.5",
    md: "h-11 px-6 text-sm rounded-full gap-2",
    lg: "h-13 px-8 text-base rounded-full gap-2.5",
    icon: "h-10 w-10 rounded-full p-0 flex items-center justify-center"
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      {children}
    </button>
  );
}
