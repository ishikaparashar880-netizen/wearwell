import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Sidebar({ onBuildNewOutfitClick }) {
  const navigate = useNavigate();

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
    <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 py-stack-md bg-surface-container border-r border-outline-variant shadow-md z-50">
      <div className="px-6 flex flex-col items-start w-full">
        <div 
          onClick={() => navigate('/')} 
          className="cursor-pointer font-display text-display-lg font-bold text-primary mb-1 hover:opacity-90 transition-opacity"
        >
          WearWell
        </div>
        <p className="font-label text-label-md text-on-surface-variant mb-stack-md">Your Digital Concierge</p>

        <nav className="flex flex-col w-full gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg mx-1 transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-on-primary font-medium shadow-sm translate-x-1'
                    : 'text-on-surface-variant hover:bg-surface-container-highest hover:text-primary hover:translate-x-1'
                }`
              }
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span className="font-label text-label-md">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto w-full pt-6">
          <button
            onClick={onBuildNewOutfitClick || (() => navigate('/builder'))}
            className="w-full bg-primary text-on-primary font-label text-label-md py-3 px-4 rounded-[16px] hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 shadow-sm flex justify-center items-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            Build New Outfit
          </button>
          
          <div className="mt-4 flex items-center justify-between p-2 rounded-xl bg-surface-container-low hover:bg-surface-container-high cursor-pointer transition-colors" onClick={() => navigate('/login')}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLVbnVHc9o_mufdVNT4NZhXysPI4IrB3KRBcTAlmsrYYQWlB_Dg0rU5SEp3tU6_thCRNqSdvlAe7cPKBZ6Qo0qNVOCJOgXaI3LVetsN1R_QWW0A0Gi5mREAPSe3971PIRn1vYMJQVNZC16cYBfaKDyvZJbZzR4mLjkEePigDAqe66r0-ZmFfrDHnBNFg7C6dGgB8RGZUTJ1auiwE4y0PxzadogrvsWbi-PNsQX0gwTcnYyPI7TUdqYXg"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-on-surface">Sophia Chen</p>
                <p className="text-[10px] text-on-surface-variant">Switch Account</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-xs text-on-surface-variant">logout</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
