import React from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '../atoms/Input';

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Search artisanal halal mocktails, ingredients...',
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        leftIcon={<Search className="w-4 h-4 text-amber-400" />}
        rightIcon={
          value ? (
            <X className="w-4 h-4 text-zinc-400 hover:text-amber-400 transition-colors" />
          ) : undefined
        }
        onRightIconClick={() => onChange('')}
      />
    </div>
  );
};