
export interface ChocolateItem {
  id: string;
  name: string;
  category: 'dark' | 'milk' | 'white' | 'protein';
  prices: {
    '100g'?: number;
    '500g'?: number;
    '1kg'?: number;
    'bar'?: number;
  };
  description: string;
  featured?: boolean;
  image?: string;
}

export const chocolates: ChocolateItem[] = [
  // Dark Chocolates
  {
    id: 'dark-classic',
    name: 'Dark Chocolates',
    category: 'dark',
    prices: { '100g': 80, '500g': 350, '1kg': 700 },
    description: 'Rich and intense pure dark chocolate with deep cocoa flavors',
    featured: true,
    image: '/lovable-uploads/33f3402c-8f8e-46e4-a3fb-b6373f310e66.png'
  },
  {
    id: 'dark-almonds',
    name: 'Dark Chocolate with Almonds',
    category: 'dark',
    prices: { '100g': 90, '500g': 400, '1kg': 800 },
    description: 'Premium dark chocolate infused with crunchy roasted almonds',
    featured: true,
    image: '/lovable-uploads/86b34c6b-b29f-45e8-96c6-1b3e929632fc.png'
  },
  {
    id: 'dark-mix-dryfruit',
    name: 'Dark Chocolate with Mix Dry Fruit',
    category: 'dark',
    prices: { '100g': 100, '500g': 450, '1kg': 900 },
    description: 'Decadent dark chocolate loaded with mixed premium dry fruits'
  },
  {
    id: 'dark-caramel',
    name: 'Dark Chocolate with Caramel',
    category: 'dark',
    prices: { '100g': 90, '500g': 400, '1kg': 800 },
    description: 'Smooth dark chocolate with gooey caramel centers'
  },

  // Milk Chocolates
  {
    id: 'milk-caramel',
    name: 'Milk Chocolate with Caramel',
    category: 'milk',
    prices: { '100g': 90, '500g': 400, '1kg': 800 },
    description: 'Creamy milk chocolate with sweet caramel filling',
    featured: true
  },
  {
    id: 'milk-almonds',
    name: 'Milk Chocolate with Almonds',
    category: 'milk',
    prices: { '100g': 90, '500g': 400, '1kg': 800 },
    description: 'Silky milk chocolate studded with premium almonds'
  },
  {
    id: 'milk-mix-dryfruit',
    name: 'Milk Chocolate with Mix Dry Fruit',
    category: 'milk',
    prices: { '100g': 100, '500g': 450, '1kg': 900 },
    description: 'Creamy milk chocolate packed with assorted dry fruits'
  },

  // White Chocolates
  {
    id: 'white-classic',
    name: 'White Chocolates',
    category: 'white',
    prices: { '100g': 90, '500g': 400, '1kg': 800 },
    description: 'Pure white chocolate with a smooth, creamy texture'
  },
  {
    id: 'white-pistachios',
    name: 'Pistachios White Chocolates',
    category: 'white',
    prices: { '100g': 120, '500g': 550, '1kg': 1100 },
    description: 'Luxurious white chocolate with premium pistachios',
    featured: true
  },
  {
    id: 'white-mix-dryfruit',
    name: 'Mix Dry Fruit with White Chocolate',
    category: 'white',
    prices: { '100g': 100, '500g': 450, '1kg': 900 },
    description: 'Delicate white chocolate enriched with mixed dry fruits'
  },
  {
    id: 'white-caramel',
    name: 'White Chocolate with Caramel',
    category: 'white',
    prices: { '100g': 90, '500g': 400, '1kg': 800 },
    description: 'Sweet white chocolate with luscious caramel centers'
  },

  // Protein Bars
  {
    id: 'protein-dark',
    name: 'Dark Chocolate Protein Bar',
    category: 'protein',
    prices: { 'bar': 75 },
    description: 'Nutritious 55g protein bar with rich dark chocolate coating'
  },
  {
    id: 'protein-milk',
    name: 'Milk Chocolate Protein Bar',
    category: 'protein',
    prices: { 'bar': 70 },
    description: 'Healthy 55g protein bar covered in creamy milk chocolate'
  },
  {
    id: 'protein-white',
    name: 'White Chocolate Protein Bar',
    category: 'protein',
    prices: { 'bar': 65 },
    description: 'Wholesome 55g protein bar with smooth white chocolate coating'
  }
];

export const getCategoryTitle = (category: string) => {
  switch (category) {
    case 'dark': return 'Dark Chocolates';
    case 'milk': return 'Milk Chocolates';
    case 'white': return 'White Chocolates';
    case 'protein': return 'Protein Bars';
    default: return '';
  }
};

export const getCategoryColor = (category: string) => {
  switch (category) {
    case 'dark': return 'from-chocolate-800 to-chocolate-600';
    case 'milk': return 'from-chocolate-600 to-chocolate-400';
    case 'white': return 'from-chocolate-200 to-chocolate-100';
    case 'protein': return 'from-gold-600 to-gold-400';
    default: return 'from-chocolate-600 to-chocolate-400';
  }
};
