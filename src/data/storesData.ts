export type StoreCategory = 'food' | 'clothes' | 'hardware';

export interface Store {
  id: string;
  name: string;
  distance_km: number;
  rating?: number;
  delivery_time?: string;
  image_url?: string;
  category: StoreCategory;
  subcategory?: string;
}

export const mockStores: Store[] = [
  // Food Stores
  {
    id: 'store-1',
    name: 'Hungry Lion',
    distance_km: 0.9,
    rating: 4.8,
    delivery_time: '15-25 min',
    image_url: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'food',
    subcategory: 'Fast Food'
  },
  {
    id: 'store-2',
    name: 'Legana Food Heist',
    distance_km: 2.8,
    rating: 3.9,
    delivery_time: '20-35 min',
    image_url: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'food',
    subcategory: 'Restaurant'
  },
  {
    id: 'store-3',
    name: 'My Oyster House',
    distance_km: 3.0,
    rating: 4.6,
    delivery_time: '25-40 min',
    image_url: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'food',
    subcategory: 'Seafood'
  },
  {
    id: 'store-4',
    name: 'The Asian Kitchen',
    distance_km: 3.3,
    rating: 4.7,
    delivery_time: '30-45 min',
    image_url: 'https://images.pexels.com/photos/2455529/pexels-photo-2455529.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'food',
    subcategory: 'Asian'
  },
  {
    id: 'store-5',
    name: "Milla's Pastries",
    distance_km: 3.8,
    rating: 4.6,
    delivery_time: '25-40 min',
    image_url: 'https://images.pexels.com/photos/3296516/pexels-photo-3296516.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'food',
    subcategory: 'Bakery'
  },
  {
    id: 'store-6',
    name: 'Pizza Palace',
    distance_km: 2.5,
    rating: 4.5,
    delivery_time: '20-30 min',
    image_url: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'food',
    subcategory: 'Pizza'
  },
  {
    id: 'store-7',
    name: 'Smoothie Bar',
    distance_km: 1.2,
    rating: 4.4,
    delivery_time: '10-15 min',
    image_url: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'food',
    subcategory: 'Beverages'
  },
  {
    id: 'store-8',
    name: 'Burger Heaven',
    distance_km: 1.5,
    rating: 4.7,
    delivery_time: '12-20 min',
    image_url: 'https://images.pexels.com/photos/2689714/pexels-photo-2689714.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'food',
    subcategory: 'Burgers'
  },

  // Clothes Stores
  {
    id: 'store-clothes-1',
    name: 'Fashion Hub',
    distance_km: 1.2,
    rating: 4.6,
    delivery_time: '30-45 min',
    image_url: 'https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'clothes',
    subcategory: 'Fashion'
  },
  {
    id: 'store-clothes-2',
    name: 'Urban Style',
    distance_km: 2.1,
    rating: 4.4,
    delivery_time: '35-50 min',
    image_url: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'clothes',
    subcategory: 'Streetwear'
  },
  {
    id: 'store-clothes-3',
    name: 'Elegance Boutique',
    distance_km: 3.5,
    rating: 4.8,
    delivery_time: '40-60 min',
    image_url: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'clothes',
    subcategory: 'Formal Wear'
  },
  {
    id: 'store-clothes-4',
    name: 'Sporty Gear',
    distance_km: 1.8,
    rating: 4.5,
    delivery_time: '25-40 min',
    image_url: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'clothes',
    subcategory: 'Sportswear'
  },

  // Hardware Stores
  {
    id: 'store-hardware-1',
    name: 'BuildMart',
    distance_km: 2.5,
    rating: 4.3,
    delivery_time: '45-60 min',
    image_url: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'hardware',
    subcategory: 'Building Materials'
  },
  {
    id: 'store-hardware-2',
    name: 'Tool World',
    distance_km: 3.2,
    rating: 4.6,
    delivery_time: '50-70 min',
    image_url: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'hardware',
    subcategory: 'Tools'
  },
  {
    id: 'store-hardware-3',
    name: 'Plumbing Plus',
    distance_km: 4.0,
    rating: 4.2,
    delivery_time: '55-75 min',
    image_url: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'hardware',
    subcategory: 'Plumbing'
  },
  {
    id: 'store-hardware-4',
    name: 'Electric Zone',
    distance_km: 2.8,
    rating: 4.5,
    delivery_time: '40-55 min',
    image_url: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'hardware',
    subcategory: 'Electrical'
  }
];

// Helper function to get stores by category
export const getStoresByCategory = (category: StoreCategory): Store[] => {
  return mockStores.filter(store => store.category === category);
};
