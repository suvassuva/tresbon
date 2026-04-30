'use client';

import React from 'react';

interface TactileButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'pressed' | 'glass' | 'loading';
  colorScheme?: 'blue' | 'orange' | 'purple' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function TactileButton({
  variant = 'default',
  colorScheme = 'neutral',
  size = 'md',
  children,
  className = '',
  disabled,
  ...props
}: TactileButtonProps) {
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const colorClasses = {
    blue: 'bg-accent-blue text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]',
    orange: 'bg-accent-orange text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]',
    purple: 'bg-accent-purple text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]',
    neutral: 'bg-surface text-text-main',
  };

  const baseClasses = 'font-display font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer';
  
  const variantClasses = {
    default: 'tactile-out active:tactile-in active:scale-[0.98]',
    pressed: 'tactile-in scale-[0.98]',
    glass: 'glass text-text-main hover:bg-white/50 active:scale-[0.98]',
    loading: 'tactile-in cursor-wait opacity-80',
  };

  const finalClasses = `
    ${baseClasses} 
    ${sizeClasses[size]} 
    ${colorClasses[colorScheme]} 
    ${variantClasses[variant]} 
    ${disabled ? 'opacity-50 cursor-not-allowed shadow-none' : ''}
    ${className}
  `.trim();

  return (
    <button className={finalClasses} disabled={disabled || variant === 'loading'} {...props}>
      {variant === 'loading' && (
        <svg className="animate-spin h-4 w-4 text-current" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </button>
  );
}
