import React, { forwardRef } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconClick?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      onRightIconClick,
      className = '',
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-xs font-medium tracking-wider uppercase text-amber-200/80">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3.5 text-amber-500/70 pointer-events-none flex items-center justify-center">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={`w-full bg-zinc-900/90 text-zinc-100 placeholder-zinc-500 border text-sm rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500/40 disabled:opacity-50 disabled:cursor-not-allowed ${
              leftIcon ? 'pl-10' : 'pl-4'
            } ${rightIcon ? 'pr-10' : 'pr-4'} py-2.5 ${
              error
                ? 'border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/30'
                : 'border-zinc-800 hover:border-zinc-700 focus:border-amber-500'
            } ${className}`}
            {...props}
          />
          {rightIcon && (
            <button
              type="button"
              onClick={onRightIconClick}
              tabIndex={onRightIconClick ? 0 : -1}
              className={`absolute right-3.5 text-zinc-400 hover:text-amber-400 transition-colors flex items-center justify-center ${
                !onRightIconClick ? 'pointer-events-none' : 'cursor-pointer'
              }`}
            >
              {rightIcon}
            </button>
          )}
        </div>
        {error && <span className="text-xs text-rose-400 mt-0.5">{error}</span>}
        {!error && helperText && <span className="text-xs text-zinc-500 mt-0.5">{helperText}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';