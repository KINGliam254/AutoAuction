export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  rating: number;
  joinedDate: string;
}

export interface Car {
  id: string;
  title: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  exteriorColor: string;
  interiorColor: string;
  fuelType: string;
  transmission: string;
  engine: string;
  vin: string;
  description: string;
  features: string[];
  images: string[];
  location: string;
  sellerType: 'dealer' | 'private';
  sellerInfo: User;
  listingDate: string;
  isFeatured: boolean;
}

export interface Auction extends Car {
  currentBid: number;
  startingBid: number;
  bidCount: number;
  endsAt: string;
  watchers: number;
  highestBidder: string | null;
}

export interface Bid {
  id: string;
  auctionId: string;
  userId: string;
  amount: number;
  time: string;
  userInfo: User;
}