import React from 'react';
import { users } from '../data/mockData';
import { Link } from 'react-router-dom';
import { Star, Settings, Bell, Heart, Calendar, LogOut } from 'lucide-react';

const ProfilePage: React.FC = () => {
  // For demo, we'll use the first user
  const user = users[0];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Info */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex flex-col items-center text-center">
              <img 
                src={user.avatar}
                alt={user.name} 
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h1 className="text-2xl font-bold text-primary-800 mb-1">
                {user.name}
              </h1>
              <p className="text-gray-600 mb-3">
                Member since {user.joinedDate}
              </p>
              <div className="flex items-center text-accent-500 mb-4">
                <Star size={16} fill="#FFCE63" />
                <Star size={16} fill="#FFCE63" />
                <Star size={16} fill="#FFCE63" />
                <Star size={16} fill="#FFCE63" />
                <Star size={16} fill="#FFCE63" className="mr-2" />
                <span className="text-primary-800 font-medium">{user.rating}/5</span>
              </div>
              <Link 
                to="/profile/edit"
                className="bg-primary-800 hover:bg-primary-700 text-white py-2 px-6 rounded-lg font-medium transition-colors w-full flex items-center justify-center"
              >
                <Settings size={16} className="mr-2" />
                Edit Profile
              </Link>
            </div>
            
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-primary-800 mb-4">
                Account
              </h2>
              <nav className="space-y-2">
                <Link to="/profile/settings" className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <Settings size={18} className="mr-3 text-gray-600" />
                  <span>Settings</span>
                </Link>
                <Link to="/profile/notifications" className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <Bell size={18} className="mr-3 text-gray-600" />
                  <span>Notifications</span>
                </Link>
                <Link to="/profile/favorites" className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <Heart size={18} className="mr-3 text-gray-600" />
                  <span>Saved Cars</span>
                </Link>
                <Link to="/profile/history" className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <Calendar size={18} className="mr-3 text-gray-600" />
                  <span>Purchase History</span>
                </Link>
                <button className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors w-full text-left text-red-600">
                  <LogOut size={18} className="mr-3" />
                  <span>Log Out</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="md:col-span-2">
          {/* My Vehicles */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-primary-800">
                My Vehicles
              </h2>
              <Link 
                to="/sell"
                className="text-secondary-500 hover:text-secondary-600 font-medium transition-colors"
              >
                + Add Vehicle
              </Link>
            </div>
            
            {/* Demo: Empty state */}
            <div className="py-8 text-center">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">No Vehicles Listed</h3>
              <p className="text-gray-600 mb-6 max-w-sm mx-auto">
                You haven't listed any vehicles for sale yet. Start selling your car today.
              </p>
              <Link 
                to="/sell"
                className="bg-primary-800 hover:bg-primary-700 text-white py-2 px-6 rounded-lg font-medium inline-block transition-colors"
              >
                List a Vehicle
              </Link>
            </div>
          </div>
          
          {/* Active Bids */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-primary-800">
                Active Bids
              </h2>
              <Link 
                to="/listings?type=auction"
                className="text-secondary-500 hover:text-secondary-600 font-medium transition-colors"
              >
                View Auctions
              </Link>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Vehicle
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Your Bid
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Current Bid
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ends
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-md object-cover" src="https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=100" alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">2020 BMW M4 Competition</div>
                          <div className="text-xs text-gray-500">Alpine White</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-secondary-600 font-semibold">$58,000</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">$58,000</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Highest Bidder
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      3 days
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-md object-cover" src="https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=100" alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">2017 Audi RS7 Performance</div>
                          <div className="text-xs text-gray-500">Nardo Gray</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-secondary-600 font-semibold">$60,000</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">$64,000</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Outbid
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      5 days
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Recently Viewed */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-primary-800">
                Recently Viewed
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <img 
                  src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Recently viewed car" 
                  className="w-16 h-16 rounded-md object-cover" 
                />
                <div>
                  <h3 className="font-medium text-primary-800">2019 Porsche 911 Carrera S</h3>
                  <p className="text-gray-600 text-sm">$94,500</p>
                  <p className="text-xs text-gray-500">Viewed 2 hours ago</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <img 
                  src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Recently viewed car" 
                  className="w-16 h-16 rounded-md object-cover" 
                />
                <div>
                  <h3 className="font-medium text-primary-800">2018 Tesla Model 3 Performance</h3>
                  <p className="text-gray-600 text-sm">$41,000</p>
                  <p className="text-xs text-gray-500">Viewed yesterday</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <img 
                  src="https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Recently viewed car" 
                  className="w-16 h-16 rounded-md object-cover" 
                />
                <div>
                  <h3 className="font-medium text-primary-800">2020 BMW M4 Competition</h3>
                  <p className="text-gray-600 text-sm">$65,000</p>
                  <p className="text-xs text-gray-500">Viewed 3 days ago</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <img 
                  src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Recently viewed car" 
                  className="w-16 h-16 rounded-md object-cover" 
                />
                <div>
                  <h3 className="font-medium text-primary-800">2021 Mercedes-Benz C63 AMG</h3>
                  <p className="text-gray-600 text-sm">$78,900</p>
                  <p className="text-xs text-gray-500">Viewed last week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;