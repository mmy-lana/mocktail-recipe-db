import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'dark' | 'interactive' | 'goldGlow';
  padded?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'dark',
  padded = true,
  className = '',
  ...props
}) => {
  const baseStyles =
    'rounded-xl transition-all duration-300 overflow-hidden backdrop-blur-md border';

  const variants = {
    dark: 'bg-zinc-900/80 border-zinc-800/80 text-zinc-100',
    interactive:
      'bg-zinc-900/80 border-zinc-800/80 text-zinc-100 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-950/20 hover:-translate-y-1',
    goldGlow:
      'bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900 border-amber-500/30 text-zinc-100 shadow-lg shadow-amber-950/20',
  };

  const paddingClass = padded ? 'p-5 sm:p-6' : '';

  return (
    <div className={`${baseStyles} ${variants[variant]} ${paddingClass} ${className}`} {...props}>
      {children}
    </div>
  );
};