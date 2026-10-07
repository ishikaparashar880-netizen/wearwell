import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import FashionImage from './FashionImage';

export default function Sidebar({ onBuildNewOutfitClick }) {
  const navigate = useNavigate();
  const { userProfile } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home / AI Recs', path: '/', icon: 'psychology' },
    { label: 'Wardrobe', path: '/wardrobe', icon: 'checkroom' },
    { label: 'Outfit Builder', path: '/builder', icon: 'auto_fix_high' },
    { label: 'Favorites', path: '/favorites', icon: 'favorite' },
    { label: 'Boutiques', path: '/boutiques', icon: 'storefront' },
    { label: 'Style Quiz', path: '/quiz', icon: 'tune' },
    { label: 'Profile Settings', path: '/profile', icon: 'person' },
  ];

  return (
    <>
      {/* Top Navbar for Mobile & Header for Search/Avatar */}
      <header className="md:hidden sticky top-0 z-40 bg-[#0d0d0d]/90 backdrop-blur-md border-b border-[#262626] px-4 py-3 flex items-center justify-between">
        <div 
          onClick={() => navigate('/')} 
          className="cursor-pointer flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#AA771C] flex items-center justify-center text-black font-bold">
            W
          </div>
          <span className="font-display font-bold text-xl text-gold-gradient tracking-wide">WEARWELL</span>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/profile')} 
            className="w-8 h-8 rounded-full overflow-hidden border border-[#D4AF37]/50"
          >
            <FashionImage src={userProfile?.photo} alt={userProfile?.name} className="w-full h-full object-cover" />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-gray-300 hover:text-[#D4AF37] transition-colors rounded-lg bg-[#141414] border border-[#262626]"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </header>

      {/* Desktop Sidebar (Fixed Left) */}
      <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 py-6 px-4 bg-[#0d0d0d] border-r border-[#262626] shadow-2xl z-50 justify-between">
        <div className="flex flex-col w-full">
          {/* Brand header */}
          <div 
            onClick={() => navigate('/')} 
            className="cursor-pointer px-3 mb-6 group flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] flex items-center justify-center text-black font-bold font-display text-xl shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:scale-105 transition-transform">
              W
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold text-gold-gradient tracking-wider">WEARWELL</h1>
              <p className="text-[10px] uppercase tracking-widest text-[#D4AF37]/80 font-medium">AI Stylist & Concierge</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col w-full gap-1.5">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-300 font-medium text-sm ${
                    isActive
                      ? 'bg-[#1a1710] text-[#D4AF37] border border-[#D4AF37]/40 shadow-[0_0_15px_rgba(212,175,55,0.15)] font-semibold translate-x-1'
                      : 'text-gray-400 hover:bg-[#141414] hover:text-white hover:border hover:border-[#262626] hover:translate-x-1'
                  }`
                }
              >
                <span className="material-symbols-outlined text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom CTA & Profile Card */}
        <div className="flex flex-col gap-4 pt-4 border-t border-[#262626]">
          <button
            onClick={onBuildNewOutfitClick || (() => navigate('/builder'))}
            className="btn-gold w-full py-3 px-4 rounded-xl text-sm font-semibold flex justify-center items-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">auto_fix_high</span>
            Build New Outfit
          </button>

          <div 
            onClick={() => navigate('/profile')} 
            className="flex items-center justify-between p-2.5 rounded-xl bg-[#141414] border border-[#262626] hover:border-[#D4AF37]/50 cursor-pointer transition-all hover:bg-[#181818] group"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-[#D4AF37]/40 shrink-0">
                <FashionImage
                  src={userProfile?.photo}
                  alt={userProfile?.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="truncate">
                <p className="text-xs font-semibold text-white truncate">{userProfile?.name}</p>
                <p className="text-[10px] text-[#D4AF37] truncate">{userProfile?.persona}</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-base text-gray-400 group-hover:text-[#D4AF37] transition-colors">settings</span>
          </div>
        </div>
      </aside>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div 
            onClick={() => setMobileOpen(false)} 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm animate-fade-in" 
          />
          <div className="relative w-4/5 max-w-xs bg-[#0d0d0d] border-r border-[#262626] h-full p-5 flex flex-col justify-between z-10 animate-slide-up">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#AA771C] flex items-center justify-center text-black font-bold">
                    W
                  </div>
                  <div>
                    <span className="font-display font-bold text-lg text-gold-gradient">WEARWELL</span>
                    <p className="text-[9px] uppercase tracking-widest text-[#D4AF37]">Dark Luxury Stylist</p>
                  </div>
                </div>
                <button 
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-400 hover:text-[#D4AF37]"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all font-medium text-sm ${
                        isActive
                          ? 'bg-[#1a1710] text-[#D4AF37] border border-[#D4AF37]/40 font-semibold'
                          : 'text-gray-300 hover:bg-[#141414] hover:text-white'
                      }`
                    }
                  >
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                    <span>{item.label}</span>
                  </NavLink>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-[#262626]">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  if (onBuildNewOutfitClick) onBuildNewOutfitClick();
                  else navigate('/builder');
                }}
                className="btn-gold w-full py-3 px-4 rounded-xl text-xs font-semibold flex justify-center items-center gap-2"
              >
                <span className="material-symbols-outlined text-base">auto_fix_high</span>
                Build New Outfit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
