import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'gold' | 'emerald' | 'amber' | 'outline' | 'dark';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  size = 'sm',
  icon,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center font-medium rounded-full tracking-wider uppercase transition-all border';

  const variants = {
    gold: 'bg-amber-500/10 text-amber-300 border-amber-500/30 shadow-sm shadow-amber-950/20',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30', // Halal/100% Non-Alcoholic certification badge
    amber: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
    outline: 'bg-transparent text-zinc-300 border-zinc-700',
    dark: 'bg-zinc-900 text-zinc-400 border-zinc-800',
  };

  const sizes = {
    sm: 'text-[10px] px-2.5 py-0.5 gap-1',
    md: 'text-xs px-3 py-1 gap-1.5',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {icon && <span className="inline-flex shrink-0 text-current">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};