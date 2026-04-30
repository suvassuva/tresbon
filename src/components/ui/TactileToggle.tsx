'use client';

import React from 'react';

interface TactileToggleProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  label?: string;
  colorScheme?: 'blue' | 'orange' | 'purple';
}

export default function TactileToggle({
  enabled,
  onChange,
  label,
  colorScheme = 'blue',
}: TactileToggleProps) {
  
  const colorClasses = {
    blue: 'bg-accent-blue',
    orange: 'bg-accent-orange',
    purple: 'bg-accent-purple',
  };

  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      {label && <span className="text-sm font-medium text-text-sub group-hover:text-text-main transition-colors">{label}</span>}
      <div 
        className={`relative w-14 h-7 rounded-full transition-all duration-300 tactile-in ${enabled ? colorClasses[colorScheme] : 'bg-gray-200'}`}
        onClick={() => onChange(!enabled)}
      >
        <div className={`
          absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 shadow-sm
          ${enabled ? 'translate-x-7' : 'translate-x-0'}
        `} />
      </div>
    </label>
  );
}
