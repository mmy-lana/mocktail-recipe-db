import React from 'react';
import { Header } from '../components/organisms/Header';
import { Footer } from '../components/organisms/Footer';

export interface RootLayoutProps {
  children: React.ReactNode;
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  categories: string[];
}

export const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  activeCategory,
  onSelectCategory,
  categories,
}) => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-amber-500 selection:text-zinc-950">
      <Header
        activeCategory={activeCategory}
        onSelectCategory={onSelectCategory}
        categories={categories}
      />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};