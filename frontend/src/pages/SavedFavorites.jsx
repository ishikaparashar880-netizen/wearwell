import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopHeader from '../components/TopHeader';
import FashionImage from '../components/FashionImage';
import { useApp } from '../context/AppContext';

export default function SavedFavorites() {
  const navigate = useNavigate();
  const { aiOutfits, wardrobe, toggleFavoriteOutfit, toggleFavoriteItem } = useApp();
  const [activeTab, setActiveTab] = useState('outfits');

  const favoriteOutfits = aiOutfits.filter((o) => o.isFavorite);
  const favoriteItems = wardrobe.filter((i) => i.isFavorite);

  return (
    <div className="bg-[#0a0a0a] text-white font-body min-h-screen">
      <Sidebar />

      <main className="md:ml-64 p-4 md:p-8 max-w-[1400px] mx-auto w-full pb-20">
        <TopHeader />

        {/* Page Header */}
        <div className="mb-8">
          <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">Curated Vault</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gold-gradient mt-1">Saved Favorites</h1>
          <p className="text-gray-400 text-xs md:text-sm mt-1">
            Your bookmarked haute couture outfits and favorite wardrobe staples.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-[#262626] pb-3">
          <button
            onClick={() => setActiveTab('outfits')}
            className={`font-display text-sm font-bold pb-2 border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'outfits'
                ? 'border-[#D4AF37] text-[#D4AF37]'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined text-base">style</span>
            Saved Outfits ({favoriteOutfits.length})
          </button>
          <button
            onClick={() => setActiveTab('items')}
            className={`font-display text-sm font-bold pb-2 border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'items'
                ? 'border-[#D4AF37] text-[#D4AF37]'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined text-base">checkroom</span>
            Favorite Garments ({favoriteItems.length})
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'outfits' ? (
          favoriteOutfits.length === 0 ? (
            <div className="card-dark p-12 text-center flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-gray-600 mb-3">favorite_border</span>
              <h3 className="font-display text-xl font-bold text-white">No Saved Outfits Yet</h3>
              <p className="text-xs text-gray-400 mt-1 max-w-sm mb-6">
                Click the heart icon on any outfit recommendation or build your own in the studio.
              </p>
              <button onClick={() => navigate('/')} className="btn-gold px-6 py-2.5 rounded-xl text-xs uppercase font-bold">
                Browse Recommendations
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteOutfits.map((outfit) => (
                <div key={outfit.id} className="card-dark overflow-hidden flex flex-col group">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#181818]">
                    <FashionImage
                      src={outfit.imageUrl}
                      alt={outfit.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    <button
                      onClick={() => toggleFavoriteOutfit(outfit.id)}
                      className="absolute top-3 right-3 p-2.5 rounded-full bg-[#D4AF37] text-black shadow-gold-glow"
                      title="Remove from Favorites"
                    >
                      <span className="material-symbols-outlined text-sm fill">favorite</span>
                    </button>

                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="bg-[#D4AF37]/20 border border-[#D4AF37] text-[#FFF0C2] text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                        {outfit.styleTag}
                      </span>
                      <h3 className="font-display text-lg font-bold text-white mt-1">{outfit.title}</h3>
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between gap-3">
                    <p className="text-xs text-gray-300 leading-relaxed">{outfit.description}</p>
                    <div className="pt-3 border-t border-[#262626] flex items-center justify-between">
                      <span className="text-[11px] text-gray-400">{outfit.weather || '20°C Paris'}</span>
                      <button
                        onClick={() => navigate('/builder')}
                        className="text-xs text-[#D4AF37] font-semibold hover:underline flex items-center gap-1"
                      >
                        Try in Studio &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          favoriteItems.length === 0 ? (
            <div className="card-dark p-12 text-center flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-gray-600 mb-3">checkroom</span>
              <h3 className="font-display text-xl font-bold text-white">No Favorite Garments</h3>
              <p className="text-xs text-gray-400 mt-1 max-w-sm mb-6">
                Mark items in your Wardrobe with a heart to save them as go-to staples.
              </p>
              <button onClick={() => navigate('/wardrobe')} className="btn-gold px-6 py-2.5 rounded-xl text-xs uppercase font-bold">
                Go to Wardrobe
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {favoriteItems.map((item) => (
                <div key={item.id} className="card-dark overflow-hidden flex flex-col group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#181818]">
                    <FashionImage
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      onClick={() => toggleFavoriteItem(item.id)}
                      className="absolute top-3 right-3 p-2 rounded-full bg-[#D4AF37] text-black shadow-gold-glow"
                    >
                      <span className="material-symbols-outlined text-sm fill">favorite</span>
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-sm font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-[#D4AF37] mt-0.5">{item.category} • {item.style}</p>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </main>
    </div>
  );
}
