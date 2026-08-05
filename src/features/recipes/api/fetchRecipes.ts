import type { MocktailRecipe } from '../types/recipe';
import { delay } from '../../../lib/api';

const MOCK_RECIPES: MocktailRecipe[] = [
  {
    id: 'saffron-gold-fizz',
    title: 'Saffron Gold Fizz',
    subtitle: 'Persian saffron, fresh yuzu, cardamom syrup, and sparkling mineral water',
    description: 'A regal sparkling elixier infused with hand-picked saffron threads, tart Japanese yuzu, and warm green cardamom, topped with fine effervescence.',
    category: 'Sparkling',
    complexity: 'Moderate',
    prepTimeMinutes: 8,
    glassType: 'Crystal Coupe',
    halalCertified: true,
    featured: true,
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
    flavorProfile: ['Citrus', 'Floral', 'Effervescent', 'Aromatic'],
    ingredients: [
      { id: '1', name: 'Persian Saffron Syrup', amount: 20, unit: 'ml', isHalalCertified: true, category: 'syrup' },
      { id: '2', name: 'Fresh Yuzu Juice', amount: 30, unit: 'ml', isHalalCertified: true, category: 'citrus' },
      { id: '3', name: 'Cardamom Bitters (Alcohol-Free)', amount: 3, unit: 'drops', isHalalCertified: true, category: 'spice' },
      { id: '4', name: 'Sparkling Mineral Water', amount: 120, unit: 'ml', isHalalCertified: true, category: 'soda' },
      { id: '5', name: 'Edible 24k Gold Leaf', amount: 1, unit: 'pinch', isHalalCertified: true, category: 'herbs' },
    ],
    instructions: [
      'Combine saffron syrup, yuzu juice, and alcohol-free cardamom bitters in a shaker with crushed ice.',
      'Shake vigorously for 12 seconds until chilled.',
      'Double strain into a chilled Crystal Coupe glass.',
      'Top with sparkling mineral water.',
      'Gently lay a leaf of edible 24k gold on the surface for a opulent finish.'
    ],
  },
  {
    id: 'smoked-oud-botanical',
    title: 'Smoked Oud & Botanical Tonic',
    subtitle: 'Smoked applewood, zero-proof botanical extract, and artisan tonic',
    description: 'An enigmatic dark elixir carrying notes of smoked oak, juniper-free botanical essences, and crisp artisan cinchona tonic.',
    category: 'Smoked & Spiced',
    complexity: 'Mixologist',
    prepTimeMinutes: 12,
    glassType: 'Heavy Tumbler',
    halalCertified: true,
    featured: true,
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
    flavorProfile: ['Smoky', 'Earthy', 'Bitter-Sweet', 'Woody'],
    ingredients: [
      { id: '1', name: 'Zero-Proof Dark Botanical Spirit', amount: 60, unit: 'ml', isHalalCertified: true, category: 'tea' },
      { id: '2', name: 'Smoked Oak Syrup', amount: 15, unit: 'ml', isHalalCertified: true, category: 'syrup' },
      { id: '3', name: 'Artisan Halal Tonic Water', amount: 100, unit: 'ml', isHalalCertified: true, category: 'soda' },
      { id: '4', name: 'Dehydrated Blood Orange Slice', amount: 1, unit: 'piece', isHalalCertified: true, category: 'fruit' },
    ],
    instructions: [
      'Smoke the tumbler using applewood chips under a glass cloche for 20 seconds.',
      'In a mixing glass, stir dark botanical spirit and smoked oak syrup with a large ice sphere.',
      'Unveil the smoked tumbler and pour the chilled mixture inside.',
      'Top delicately with artisan tonic water.',
      'Garnish with a dehydrated blood orange wheel.'
    ],
  },
  {
    id: 'hibiscus-velvet-sour',
    title: 'Hibiscus Velvet Sour',
    subtitle: 'Wild hibiscus tea, aqua faba, pomegranate reduction, and fresh lime',
    description: 'Silky smooth and vibrant crimson sour topped with dense, velvet foam and balanced tart sweetness.',
    category: 'Signature',
    complexity: 'Moderate',
    prepTimeMinutes: 10,
    glassType: 'Retro Sour Glass',
    halalCertified: true,
    featured: false,
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1541546006121-5c3bc5e8c7b9?auto=format&fit=crop&q=80&w=800',
    flavorProfile: ['Tart', 'Velvety', 'Fruity', 'Rich'],
    ingredients: [
      { id: '1', name: 'Brewed Hibiscus Tea (Concentrated)', amount: 50, unit: 'ml', isHalalCertified: true, category: 'tea' },
      { id: '2', name: 'Pomegranate Reduction', amount: 20, unit: 'ml', isHalalCertified: true, category: 'syrup' },
      { id: '3', name: 'Fresh Lime Juice', amount: 25, unit: 'ml', isHalalCertified: true, category: 'citrus' },
      { id: '4', name: 'Aqua Faba (Chickpea Foam Alternative)', amount: 20, unit: 'ml', isHalalCertified: true, category: 'herbs' },
    ],
    instructions: [
      'Add all ingredients to a cocktail shaker without ice (dry shake) for 15 seconds to build foam.',
      'Add large ice cubes and shake vigorously (wet shake) for an additional 15 seconds.',
      'Double strain into a retro sour glass to achieve a distinct 2-inch velvety foam head.',
      'Garnish with dried hibiscus petals.'
    ],
  },
  {
    id: 'mint-cucumber-royale',
    title: 'Mint & Moroccan Mint Royale',
    subtitle: 'Crushed spearmint, cucumber extract, elderflower syrup, and soda',
    description: 'An ultra-refreshing herbal masterpiece blending cold-pressed cucumber juice, garden mint, and delicate elderflower notes.',
    category: 'Herbal & Botanical',
    complexity: 'Easy',
    prepTimeMinutes: 5,
    glassType: 'Highball Glass',
    halalCertified: true,
    featured: false,
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
    flavorProfile: ['Crisp', 'Refreshing', 'Herbal', 'Sweet'],
    ingredients: [
      { id: '1', name: 'Cold-Pressed Cucumber Juice', amount: 45, unit: 'ml', isHalalCertified: true, category: 'fruit' },
      { id: '2', name: 'Elderflower Cordial (Halal)', amount: 20, unit: 'ml', isHalalCertified: true, category: 'syrup' },
      { id: '3', name: 'Fresh Moroccan Mint Leaves', amount: 8, unit: 'leaves', isHalalCertified: true, category: 'herbs' },
      { id: '4', name: 'Club Soda', amount: 100, unit: 'ml', isHalalCertified: true, category: 'soda' },
    ],
    instructions: [
      'Gently muddle fresh mint leaves with elderflower cordial in a highball glass.',
      'Fill glass with crushed ice.',
      'Pour cold-pressed cucumber juice and stir gently.',
      'Top with club soda and garnish with a cucumber ribbon and mint sprig.'
    ],
  }
];

export const fetchMocktailRecipes = async (): Promise<MocktailRecipe[]> => {
  await delay(400); // Simulate network latency
  return MOCK_RECIPES;
};

export const fetchMocktailById = async (id: string): Promise<MocktailRecipe | undefined> => {
  await delay(300);
  return MOCK_RECIPES.find((r) => r.id === id);
};