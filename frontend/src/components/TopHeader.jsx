import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import FashionImage from './FashionImage';

export default function TopHeader({ onSearch }) {
  const navigate = useNavigate();
  const { userProfile, addToast } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) onSearch(value);
  };

  const handleBellClick = () => {
    addToast('Boutique Arrival Alert', '3 new haute couture pieces added in Paris.');
  };

  return (
    <header className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-2 border-b border-[#262626] mb-6">
      {/* Search Input */}
      <div className="relative w-full sm:w-80">
        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
          search
        </span>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search outfits, brands, styles..."
          className="w-full bg-[#141414] border border-[#262626] focus:border-[#D4AF37] rounded-full py-2 pl-10 pr-4 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all"
        />
      </div>

      {/* Right Header Widget (Weather chip + Notification + Profile) */}
      <div className="flex items-center gap-4 self-end sm:self-auto">
        {/* Weather Chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#141414] border border-[#262626] rounded-full">
          <span className="material-symbols-outlined text-sm text-[#D4AF37]">wb_sunny</span>
          <span className="text-xs text-gray-300 font-medium">Paris • 22°C</span>
        </div>

        {/* Bell Icon */}
        <button
          onClick={handleBellClick}
          className="relative p-2 text-gray-400 hover:text-[#D4AF37] bg-[#141414] border border-[#262626] hover:border-[#D4AF37]/40 rounded-full transition-all"
          title="Notifications"
        >
          <span className="material-symbols-outlined text-lg">notifications</span>
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
        </button>

        {/* Profile Avatar */}
        <div
          onClick={() => navigate('/profile')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors shadow-gold-glow">
            <FashionImage
              src={userProfile?.photo}
              alt={userProfile?.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="hidden lg:block text-left">
            <p className="text-xs font-semibold text-white group-hover:text-[#D4AF37] transition-colors">
              {userProfile?.name}
            </p>
            <p className="text-[10px] text-gray-400">Vogue Member</p>
          </div>
        </div>
      </div>
    </header>
  );
}
