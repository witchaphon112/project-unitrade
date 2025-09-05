export interface Listing {
  id: number;
  img: string;
  title: string;
  desc: string;
  price: number;
}

export const listingsData: Listing[] = [
  { id: 1, img: "https://via.placeholder.com/300x200?text=Calculus+Textbook", title: "Calculus Textbook", desc: "Like new condition", price: 450 },
  { id: 2, img: "https://via.placeholder.com/300x200?text=MacBook+Pro+2020", title: "MacBook Pro 2020", desc: "13 inch, 512GB", price: 32000 },
  { id: 3, img: "https://via.placeholder.com/300x200?text=Desk+Lamp", title: "Desk Lamp", desc: "LED, adjustable", price: 350 },
  { id: 4, img: "https://via.placeholder.com/300x200?text=Basketball+Shoes", title: "Basketball Shoes", desc: "Size 42, worn twice", price: 1200 },
];