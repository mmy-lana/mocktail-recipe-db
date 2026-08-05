import React from 'react';
import { Wine, Sparkles, ShieldCheck } from 'lucide-react';
import { Badge } from '../atoms/Badge';

export interface HeaderProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  categories: string[];
}

export const Header: React.FC<HeaderProps> = ({
  activeCategory,
  onSelectCategory,
  categories,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-xl border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-yellow-400 flex items-center justify-center shadow-lg shadow-amber-950/40 border border-amber-300/30">
              <Wine className="w-5 h-5 text-zinc-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl tracking-wider font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  VELVET & GOLD
                </span>
                <Badge variant="emerald" icon={<ShieldCheck className="w-3 h-3" />}>
                  100% Halal
                </Badge>
              </div>
              <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono">
                Artisanal Non-Alcoholic Lounge
              </p>
            </div>
          </div>

          {/* Premium Tagline Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/5 border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs text-amber-200/90 font-medium">Zero Alcohol • Pure Luxe Craft</span>
          </div>
        </div>

        {/* Category Navigation Bar */}
        <nav className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar border-t border-zinc-800/60">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-amber-500 text-zinc-950 font-semibold shadow-md shadow-amber-950/30'
                    : 'text-zinc-400 hover:text-amber-300 hover:bg-zinc-900'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};