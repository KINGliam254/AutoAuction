import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Car, Heart, User } from 'lucide-react';

const MobileNav: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-up p-2 z-40 md:hidden">
      <div className="flex justify-around">
        <NavItem 
          to="/" 
          icon={<Home size={22} />} 
          label="Home" 
          isActive={isActive('/')} 
        />
        <NavItem 
          to="/listings" 
          icon={<Car size={22} />} 
          label="Buy" 
          isActive={isActive('/listings')} 
        />
        <NavItem 
          to="/search" 
          icon={<Search size={22} />} 
          label="Search" 
          isActive={isActive('/search')} 
        />
        <NavItem 
          to="/favorites" 
          icon={<Heart size={22} />} 
          label="Favorites" 
          isActive={isActive('/favorites')} 
        />
        <NavItem 
          to="/profile" 
          icon={<User size={22} />} 
          label="Profile" 
          isActive={isActive('/profile')} 
        />
      </div>
    </nav>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, isActive }) => {
  return (
    <Link 
      to={to} 
      className={`flex flex-col items-center px-2 py-1 rounded-lg ${
        isActive 
          ? 'text-secondary-500' 
          : 'text-gray-600'
      }`}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
};

export default MobileNav;