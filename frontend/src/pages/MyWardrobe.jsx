import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ItemModal from '../components/ItemModal';

export default function MyWardrobe() {
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Tops', 'Bottoms', 'Outerwear', 'Shoes', 'Accessories'];

  const fetchItems = (cat = 'All') => {
    setLoading(true);
    const url = cat === 'All' ? '/api/wardrobe' : `/api/wardrobe?category=${cat}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load wardrobe:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchItems(activeCategory);
  }, [activeCategory]);

  const handleAddItem = (newItem) => {
    fetch('/api/wardrobe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((added) => {
        setItems((prev) => [added, ...prev]);
      });
  };

  const toggleFavorite = (id) => {
    fetch(`/api/wardrobe/${id}/favorite`, { method: 'PATCH' })
      .then((res) => res.json())
      .then((resData) => {
        setItems((prev) =>
          prev.map((item) => (item.id === id ? { ...item, isFavorite: resData.isFavorite } : item))
        );
      });
  };

  return (
    <div className="bg-surface text-on-surface font-body min-h-screen">
      <Sidebar onBuildNewOutfitClick={() => setIsModalOpen(true)} />

      <main className="md:ml-64 p-margin-mobile md:p-gutter max-w-container-max mx-auto w-full pb-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 my-6">
          <div>
            <h1 className="font-display text-3xl font-bold text-on-surface mb-1">My Wardrobe</h1>
            <p className="text-on-surface-variant text-sm">Manage and curate your personal fashion collection.</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-secondary/10 text-primary px-5 py-2.5 rounded-[16px] font-label text-sm font-semibold hover:bg-secondary/20 transition-colors flex items-center gap-2 border border-primary/20 self-start md:self-auto"
          >
            <span className="material-symbols-outlined text-lg">add_circle</span>
            Add Item
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-surface-variant pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'border border-outline-variant text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="flex justify-center py-20 text-on-surface-variant">
            <span className="material-symbols-outlined animate-spin text-3xl mr-2 text-primary">sync</span>
            <span>Loading wardrobe...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_30px_rgba(67,24,48,0.04)] hover:shadow-[0_8px_40px_rgba(67,24,48,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer border border-surface-container"
              >
                <div className="relative aspect-[3/4] bg-surface-container-low overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-90 hover:opacity-100 transition-opacity"
                  >
                    <span
                      className={`material-symbols-outlined text-sm ${
                        item.isFavorite ? 'text-primary fill' : 'text-outline'
                      }`}
                    >
                      favorite
                    </span>
                  </button>
                </div>
                <div className="p-4 pt-3">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-label text-sm font-semibold text-on-surface truncate pr-2">{item.title}</h3>
                    <span className="text-[11px] text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant">{item.style || 'Minimalist'}</p>
                </div>
              </div>
            ))}

            {/* Ghost Card */}
            <div
              onClick={() => setIsModalOpen(true)}
              className="rounded-[24px] border-2 border-dashed border-outline-variant hover:border-primary bg-surface-container-low hover:bg-surface-container transition-colors duration-300 cursor-pointer flex flex-col items-center justify-center min-h-[280px]"
            >
              <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm text-primary">
                <span className="material-symbols-outlined text-2xl">add</span>
              </div>
              <span className="font-label text-xs font-semibold text-primary">Upload New Item</span>
            </div>
          </div>
        )}
      </main>

      <ItemModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddItem={handleAddItem} />
    </div>
  );
}
