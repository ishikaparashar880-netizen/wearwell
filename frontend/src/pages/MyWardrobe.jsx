import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopHeader from '../components/TopHeader';
import FashionImage from '../components/FashionImage';
import ItemModal from '../components/ItemModal';
import { useApp } from '../context/AppContext';

export default function MyWardrobe() {
  const { wardrobe, toggleFavoriteItem, addWardrobeItem } = useApp();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Tops', 'Bottoms', 'Dresses', 'Outerwear', 'Shoes', 'Accessories'];

  const filteredItems = wardrobe.filter((item) => {
    const matchesCategory =
      activeCategory === 'All' || item.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.style?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#0a0a0a] text-white font-body min-h-screen">
      <Sidebar onBuildNewOutfitClick={() => setIsModalOpen(true)} />

      <main className="md:ml-64 p-4 md:p-8 max-w-[1400px] mx-auto w-full pb-20">
        <TopHeader onSearch={(query) => setSearchQuery(query)} />

        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
          <div>
            <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">Digital Wardrobe</span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-gold-gradient mt-1">My Wardrobe Collection</h1>
            <p className="text-gray-400 text-xs md:text-sm mt-1">
              Curate, organize, and manage your personal haute couture closet staples ({wardrobe.length} items).
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-gold px-6 py-3 rounded-xl text-xs uppercase tracking-wider font-bold shadow-gold-glow flex items-center gap-2 self-start md:self-auto"
          >
            <span className="material-symbols-outlined text-lg">add_circle</span>
            Add Item
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 border-b border-[#262626] custom-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA771C] text-black shadow-gold-glow font-bold'
                  : 'bg-[#141414] border border-[#262626] text-gray-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Wardrobe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="card-dark overflow-hidden flex flex-col group relative">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#181818]">
                <FashionImage
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Favorite toggle button */}
                <button
                  onClick={() => toggleFavoriteItem(item.id)}
                  className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all ${
                    item.isFavorite
                      ? 'bg-[#D4AF37] text-black shadow-gold-glow'
                      : 'bg-black/60 text-gray-300 hover:text-[#D4AF37] hover:bg-black/90'
                  }`}
                  title={item.isFavorite ? 'Saved to Favorites' : 'Add to Favorites'}
                >
                  <span className={`material-symbols-outlined text-sm ${item.isFavorite ? 'fill' : ''}`}>
                    favorite
                  </span>
                </button>

                <span className="absolute bottom-3 left-3 bg-[#0a0a0a]/80 border border-[#262626] text-[#FFF0C2] text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                  {item.category}
                </span>
              </div>

              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{item.style || 'Minimalist Luxury'}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#262626] flex items-center justify-between text-[11px] text-[#D4AF37]">
                  <span>{item.color || 'Haute Accent'}</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">check_circle</span>
                    In Closet
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Add Item Ghost Card */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="rounded-2xl border-2 border-dashed border-[#262626] hover:border-[#D4AF37] bg-[#141414]/50 hover:bg-[#181818] transition-all duration-300 cursor-pointer flex flex-col items-center justify-center min-h-[340px] p-6 text-center group"
          >
            <div className="w-14 h-14 rounded-full bg-[#1e1a10] border border-[#D4AF37]/50 flex items-center justify-center mb-4 text-[#D4AF37] group-hover:scale-110 transition-transform shadow-gold-glow">
              <span className="material-symbols-outlined text-2xl">add</span>
            </div>
            <h3 className="font-display text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
              Upload New Item
            </h3>
            <p className="text-xs text-gray-400 mt-1 max-w-xs">
              Add custom garments, coats, shoes or accessories to your digital wardrobe.
            </p>
          </div>
        </div>
      </main>

      <ItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddItem={(newItem) => addWardrobeItem(newItem)}
      />
    </div>
  );
}
