import React from 'react';

interface TactileCardProps {
  children: React.ReactNode;
  elevation?: 'flat' | 'low' | 'high' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  dark?: boolean;
}

export default function TactileCard({
  children,
  elevation = 'low',
  padding = 'md',
  className = '',
  dark = false,
}: TactileCardProps) {
  
  const elevationClasses = {
    flat: 'border border-gray-200/50',
    low: 'tactile-out',
    high: 'shadow-elevation',
    glass: 'glass',
  };

  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-10',
  };

  const baseClasses = `rounded-2xl transition-all duration-300`;
  
  const darkClasses = dark 
    ? 'bg-surface-dark text-white shadow-[0_10px_40px_rgba(74,144,226,0.3)]' 
    : 'bg-surface text-text-main';

  return (
    <div className={`
      ${baseClasses} 
      ${elevationClasses[elevation]} 
      ${paddingClasses[padding]} 
      ${darkClasses} 
      ${className}
    `}>
      {children}
    </div>
  );
}
