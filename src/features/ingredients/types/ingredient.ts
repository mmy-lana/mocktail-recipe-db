export interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
  isHalalCertified: boolean;
  category: 'citrus' | 'syrup' | 'herbs' | 'soda' | 'fruit' | 'spice' | 'tea';
  notes?: string;
}