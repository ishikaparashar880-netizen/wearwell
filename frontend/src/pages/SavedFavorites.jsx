import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';

export default function SavedFavorites() {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [favoriteOutfits, setFavoriteOutfits] = useState([]);
  const [activeTab, setActiveTab] = useState('outfits');

  useEffect(() => {
    fetch('/api/wardrobe')
      .then((res) => res.json())
      .then((data) => setFavoriteItems(data.filter((i) => i.isFavorite)));

    fetch('/api/outfits/recommendations')
      .then((res) => res.json())
      .then((data) => setFavoriteOutfits(data.filter((o) => o.isFavorite)));
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body min-h-screen">
      <Sidebar />

      <main className="md:ml-64 p-margin-mobile md:p-gutter max-w-container-max mx-auto w-full pb-16">
        <div className="my-6">
          <h1 className="font-display text-3xl font-bold text-on-surface mb-1">Saved Favorites</h1>
          <p className="text-on-surface-variant text-sm">Your bookmarked outfits and go-to wardrobe staples.</p>
        </div>

        {/* Tab options */}
        <div className="flex gap-4 mb-8 border-b border-surface-variant pb-3">
          <button
            onClick={() => setActiveTab('outfits')}
            className={`font-label text-sm font-semibold pb-2 border-b-2 transition-colors ${
              activeTab === 'outfits' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant'
            }`}
          >
            Saved Outfits ({favoriteOutfits.length})
          </button>
          <button
            onClick={() => setActiveTab('items')}
            className={`font-label text-sm font-semibold pb-2 border-b-2 transition-colors ${
              activeTab === 'items' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant'
            }`}
          >
            Favorite Items ({favoriteItems.length})
          </button>
        </div>

        {/* Content */}
        {activeTab === 'outfits' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteOutfits.map((outfit) => (
              <div key={outfit.id} className="bg-white rounded-[24px] overflow-hidden shadow-soft border border-surface-container">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={outfit.imageUrl} alt={outfit.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] bg-primary/80 backdrop-blur-sm px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">
                      {outfit.styleTag}
                    </span>
                    <h3 className="font-display text-xl font-bold mt-1">{outfit.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-on-surface-variant">{outfit.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {favoriteItems.map((item) => (
              <div key={item.id} className="bg-white rounded-[24px] overflow-hidden shadow-soft border border-surface-container">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-label text-sm font-semibold text-on-surface">{item.title}</h3>
                  <p className="text-xs text-on-surface-variant">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
