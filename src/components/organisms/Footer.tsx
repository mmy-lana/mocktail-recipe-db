import React from 'react';
import { ShieldCheck, Heart, Sparkles, Wine } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-amber-500/20 text-zinc-400 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Wine className="w-5 h-5 text-amber-400" />
            <span className="font-serif text-lg font-bold bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
              VELVET & GOLD
            </span>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
            Curating luxury non-alcoholic mixology for refined palates. Every recipe is meticulously crafted with 100% Halal-compliant botanical extractions and zero-proof spirits.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-3">
            Guiding Philosophy
          </h4>
          <ul className="space-y-2 text-xs text-zinc-400">
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Strictly Halal Certified ingredients only</span>
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Cold-extracted botanicals & organic infusions</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-3">
            Lounge Experience
          </h4>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Elevating non-alcoholic mixology into an art form. Designed for quiet luxury, celebration, and uncompromising taste.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-zinc-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
        <p>© 2026 Velvet & Gold Mocktail Database. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Crafted with <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> for non-alcoholic luxury.
        </p>
      </div>
    </footer>
  );
};