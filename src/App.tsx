import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ListingsPage from './pages/ListingsPage';
import AuctionDetailPage from './pages/AuctionDetailPage';
import CarDetailPage from './pages/CarDetailPage';
import ProfilePage from './pages/ProfilePage';
import SellPage from './pages/SellPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="listings" element={<ListingsPage />} />
          <Route path="auctions/:id" element={<AuctionDetailPage />} />
          <Route path="cars/:id" element={<CarDetailPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="sell" element={<SellPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;