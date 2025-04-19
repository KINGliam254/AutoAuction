import { Car, Auction, User, Bid } from '../types';
import { addDays, subDays, format } from 'date-fns';

// Mock users
export const users: User[] = [
  {
    id: 'user1',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 4.8,
    joinedDate: '2021-05-12'
  },
  {
    id: 'user2',
    name: 'Sarah Miller',
    email: 'sarah@example.com',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 4.9,
    joinedDate: '2020-11-08'
  },
  {
    id: 'user3',
    name: 'Prestige Motors',
    email: 'contact@prestigemotors.com',
    avatar: 'https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 4.7,
    joinedDate: '2019-07-22'
  }
];

// Common car details to reuse
const carBase = {
  features: [
    'Leather Seats', 
    'Navigation System', 
    'Bluetooth', 
    'Backup Camera',
    'Sunroof/Moonroof'
  ],
  sellerInfo: users[2],
  listingDate: format(subDays(new Date(), 5), 'yyyy-MM-dd'),
};

// Mock cars
export const cars: Car[] = [
  {
    id: 'car1',
    title: '2020 BMW M4 Competition',
    make: 'BMW',
    model: 'M4',
    year: 2020,
    price: 65000,
    mileage: 15000,
    exteriorColor: 'Alpine White',
    interiorColor: 'Black',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    engine: '3.0L Twin-Turbo Inline-6',
    vin: 'WBS23AH08LFE13789',
    description: 'Pristine condition BMW M4 Competition with all the options. This car has been meticulously maintained and comes with a clean history report. The Alpine White exterior paired with the black interior makes for a stunning combination.',
    features: [...carBase.features, 'Carbon Fiber Trim', 'M Performance Exhaust', 'Adaptive Suspension'],
    images: [
      'https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    location: 'Los Angeles, CA',
    sellerType: 'dealer',
    sellerInfo: carBase.sellerInfo,
    listingDate: carBase.listingDate,
    isFeatured: true
  },
  {
    id: 'car2',
    title: '2019 Porsche 911 Carrera S',
    make: 'Porsche',
    model: '911',
    year: 2019,
    price: 94500,
    mileage: 12000,
    exteriorColor: 'Guards Red',
    interiorColor: 'Black/Bordeaux',
    fuelType: 'Gasoline',
    transmission: 'PDK',
    engine: '3.0L Twin-Turbo Flat-6',
    vin: 'WP0AB2A98KS123456',
    description: 'Beautiful 992 generation 911 Carrera S with PDK transmission. Equipped with Sport Chrono package and sport exhaust. The car sounds amazing and drives even better.',
    features: [...carBase.features, 'Sport Chrono Package', 'Sport Exhaust', 'Adaptive Sports Seats'],
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/3802511/pexels-photo-3802511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/3802512/pexels-photo-3802512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    location: 'Miami, FL',
    sellerType: 'dealer',
    sellerInfo: carBase.sellerInfo,
    listingDate: format(subDays(new Date(), 10), 'yyyy-MM-dd'),
    isFeatured: true
  },
  {
    id: 'car3',
    title: '2018 Tesla Model 3 Performance',
    make: 'Tesla',
    model: 'Model 3',
    year: 2018,
    price: 41000,
    mileage: 28000,
    exteriorColor: 'Midnight Silver',
    interiorColor: 'Black',
    fuelType: 'Electric',
    transmission: 'Automatic',
    engine: 'Dual Motor Electric',
    vin: '5YJ3E1EA9JF123456',
    description: 'Tesla Model 3 Performance with Autopilot. This car is in excellent condition and has the premium interior package. Recent software updates have added numerous new features.',
    features: [...carBase.features, 'Autopilot', 'Premium Sound System', 'Glass Roof'],
    images: [
      'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/257345/pexels-photo-257345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/248687/pexels-photo-248687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    location: 'San Francisco, CA',
    sellerType: 'private',
    sellerInfo: users[0],
    listingDate: format(subDays(new Date(), 7), 'yyyy-MM-dd'),
    isFeatured: false
  }
];

// Mock auctions
export const auctions: Auction[] = [
  {
    ...cars[0],
    id: 'auction1',
    currentBid: 58000,
    startingBid: 50000,
    bidCount: 12,
    endsAt: format(addDays(new Date(), 3), 'yyyy-MM-dd\'T\'HH:mm:ss'),
    watchers: 45,
    highestBidder: 'user1'
  },
  {
    ...cars[1],
    id: 'auction2',
    currentBid: 88500,
    startingBid: 75000,
    bidCount: 15,
    endsAt: format(addDays(new Date(), 1), 'yyyy-MM-dd\'T\'HH:mm:ss'),
    watchers: 67,
    highestBidder: 'user2'
  },
  {
    id: 'auction3',
    title: '2017 Audi RS7 Performance',
    make: 'Audi',
    model: 'RS7',
    year: 2017,
    price: 0, // Auction only
    mileage: 32000,
    exteriorColor: 'Nardo Gray',
    interiorColor: 'Black',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    engine: '4.0L Twin-Turbo V8',
    vin: 'WUAPV2F21HN123456',
    description: 'Rare Nardo Gray Audi RS7 Performance with only 32,000 miles. This car is fully loaded with options including the Dynamic package and Bang & Olufsen sound system.',
    features: [...carBase.features, 'Dynamic Package', 'Bang & Olufsen Sound', 'Carbon Ceramic Brakes'],
    images: [
      'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/92348/pexels-photo-92348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    location: 'Chicago, IL',
    sellerType: 'private',
    sellerInfo: users[1],
    listingDate: format(subDays(new Date(), 4), 'yyyy-MM-dd'),
    isFeatured: true,
    currentBid: 64000,
    startingBid: 55000,
    bidCount: 9,
    endsAt: format(addDays(new Date(), 5), 'yyyy-MM-dd\'T\'HH:mm:ss'),
    watchers: 38,
    highestBidder: 'user1'
  }
];

// Mock bids
export const bids: Bid[] = [
  {
    id: 'bid1',
    auctionId: 'auction1',
    userId: 'user1',
    amount: 58000,
    time: format(subDays(new Date(), 1), 'yyyy-MM-dd\'T\'HH:mm:ss'),
    userInfo: users[0]
  },
  {
    id: 'bid2',
    auctionId: 'auction1',
    userId: 'user2',
    amount: 57000,
    time: format(subDays(new Date(), 1), 'yyyy-MM-dd\'T\'HH:mm:ss'),
    userInfo: users[1]
  },
  {
    id: 'bid3',
    auctionId: 'auction2',
    userId: 'user2',
    amount: 88500,
    time: format(subDays(new Date(), 2), 'yyyy-MM-dd\'T\'HH:mm:ss'),
    userInfo: users[1]
  }
];

// Function to get a car by ID
export const getCarById = (id: string): Car | undefined => {
  return cars.find(car => car.id === id);
};

// Function to get an auction by ID
export const getAuctionById = (id: string): Auction | undefined => {
  return auctions.find(auction => auction.id === id);
};

// Function to get bids for an auction
export const getBidsForAuction = (auctionId: string): Bid[] => {
  return bids.filter(bid => bid.auctionId === auctionId);
};