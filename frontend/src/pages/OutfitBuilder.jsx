import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';

export default function OutfitBuilder() {
  const [wardrobeItems, setWardrobeItems] = useState([]);
  const [placedItems, setPlacedItems] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('All');

  useEffect(() => {
    fetch('/api/wardrobe')
      .then((res) => res.json())
      .then((data) => {
        setWardrobeItems(data);
        // Default populate one top item onto canvas
        if (data.length > 0) {
          setPlacedItems([data[0]]);
        }
      });
  }, []);

  const addItemToCanvas = (item) => {
    if (!placedItems.some((p) => p.id === item.id)) {
      setPlacedItems((prev) => [...prev, item]);
    }
  };

  const removeItemFromCanvas = (id) => {
    setPlacedItems((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCanvas = () => {
    setPlacedItems([]);
  };

  const handleAiSuggest = () => {
    // Pick 2-3 complimentary items from wardrobe
    if (wardrobeItems.length >= 2) {
      setPlacedItems(wardrobeItems.slice(0, 3));
    }
  };

  const handleSaveOutfit = () => {
    if (placedItems.length === 0) return;
    const newOutfit = {
      title: 'Custom Outfit Look',
      description: 'Hand-curated ensemble built in Outfit Studio',
      styleTag: 'Bespoke',
      weather: '22°C Clear',
      items: placedItems.map((item) => ({
        id: item.id,
        title: item.title,
        category: item.category,
        imageUrl: item.imageUrl,
      })),
      imageUrl: placedItems[0]?.imageUrl || '',
      isFavorite: true,
    };

    fetch('/api/outfits/build', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newOutfit),
    })
      .then((res) => res.json())
      .then(() => {
        setSavedSuccess(true);
        setTimeout(() => setSavedSuccess(false), 3000);
      });
  };

  const filteredWardrobe =
    categoryFilter === 'All'
      ? wardrobeItems
      : wardrobeItems.filter((i) => i.category.toLowerCase() === categoryFilter.toLowerCase());

  return (
    <div className={`font-body min-h-screen flex overflow-hidden ${darkMode ? 'bg-inverse-surface text-inverse-on-surface' : 'bg-background text-on-background'}`}>
      <Sidebar />

      <main className="md:ml-64 flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Header Actions */}
        <header className={`flex flex-wrap justify-between items-center px-gutter py-4 z-10 border-b ${darkMode ? 'border-gray-800 bg-inverse-surface' : 'border-surface-container-highest/50 bg-surface-bright'}`}>
          <div>
            <h1 className={`font-display text-2xl font-semibold ${darkMode ? 'text-primary-fixed-dim' : 'text-primary'}`}>
              Curate Your Look
            </h1>
            <p className="text-xs text-on-surface-variant">Click or drag items onto the canvas to assemble an outfit.</p>
          </div>

          <div className="flex items-center gap-3 mt-2 sm:mt-0">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full border transition-colors ${darkMode ? 'bg-gray-800 border-gray-700 text-yellow-300' : 'bg-surface border-outline-variant text-gray-700'}`}
              title="Toggle Dark Mode"
            >
              <span className="material-symbols-outlined text-sm">{darkMode ? 'light_mode' : 'dark_mode'}</span>
            </button>

            <button
              onClick={handleAiSuggest}
              className="flex items-center justify-center px-4 py-2 bg-secondary-container text-on-secondary-container text-xs font-semibold rounded-[14px] hover:bg-surface-container-highest transition-colors shadow-soft"
            >
              <span className="material-symbols-outlined mr-1 text-base">psychology</span>
              AI Match
            </button>

            <button
              onClick={handleSaveOutfit}
              className="flex items-center justify-center px-5 py-2 bg-primary text-on-primary text-xs font-semibold rounded-[14px] hover:bg-primary-fixed-dim transition-colors shadow-soft"
            >
              <span className="material-symbols-outlined mr-1 text-base">save</span>
              Save Outfit
            </button>
          </div>
        </header>

        {savedSuccess && (
          <div className="bg-emerald-600 text-white text-xs px-4 py-2 text-center font-medium shadow">
            Outfit successfully saved to your Favorites & Looks!
          </div>
        )}

        {/* Workspace Layout */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden p-4 md:p-gutter gap-4 max-w-container-max mx-auto w-full">
          {/* Canvas */}
          <div className={`flex-1 flex flex-col rounded-[24px] shadow-soft border overflow-hidden relative ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-surface border-surface-container-highest'}`}>
            {/* Toolbar */}
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              <button
                onClick={clearCanvas}
                className="w-9 h-9 rounded-full bg-surface-bright shadow flex items-center justify-center text-on-surface-variant hover:text-error transition-colors"
                title="Clear Canvas"
              >
                <span className="material-symbols-outlined text-sm">delete_sweep</span>
              </button>
            </div>

            {/* Canvas Area */}
            <div className="flex-1 flex flex-wrap items-center justify-center p-6 relative min-h-[350px]">
              {placedItems.length === 0 ? (
                <div className="text-center z-10 pointer-events-none opacity-50 flex flex-col items-center">
                  <span className="material-symbols-outlined text-5xl mb-2 text-outline">dry_cleaning</span>
                  <p className="font-display text-lg text-on-surface-variant">Canvas is empty</p>
                  <p className="text-xs text-on-surface-variant">Click items from your wardrobe to place them here</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 z-10 w-full max-w-lg">
                  {placedItems.map((item) => (
                    <div
                      key={item.id}
                      className="relative p-3 rounded-2xl bg-surface-bright border border-surface-variant shadow-md flex flex-col items-center group transition-transform hover:scale-105"
                    >
                      <button
                        onClick={() => removeItemFromCanvas(item.id)}
                        className="absolute top-2 right-2 w-5 h-5 bg-error text-on-error rounded-full flex items-center justify-center opacity-80 hover:opacity-100"
                      >
                        <span className="material-symbols-outlined text-xs">close</span>
                      </button>
                      <img src={item.imageUrl} alt={item.title} className="w-full h-32 object-contain mb-2" />
                      <p className="text-xs font-medium text-on-surface text-center truncate w-full">{item.title}</p>
                      <span className="text-[10px] text-on-surface-variant">{item.category}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Panel: Wardrobe Sidebar */}
          <div className={`w-full md:w-80 flex flex-col rounded-[24px] shadow-soft border overflow-hidden ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-surface border-surface-container-highest'}`}>
            <div className="p-4 border-b border-surface-container-highest">
              <h3 className="font-display text-base font-semibold mb-3">Your Wardrobe</h3>
              <div className="flex gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
                {['All', 'Tops', 'Bottoms', 'Shoes'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-3 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap ${
                      categoryFilter === cat ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-3 grid grid-cols-2 gap-3 max-h-[500px]">
              {filteredWardrobe.map((item) => (
                <div
                  key={item.id}
                  onClick={() => addItemToCanvas(item)}
                  className="bg-surface-bright rounded-xl p-2 border border-surface-container-highest hover:border-primary cursor-pointer transition-all hover:shadow-md flex flex-col items-center"
                >
                  <img src={item.imageUrl} alt={item.title} className="w-full h-24 object-contain mb-1" />
                  <p className="text-xs font-semibold text-on-surface text-center truncate w-full">{item.title}</p>
                  <span className="text-[10px] text-primary mt-0.5">+ Add to look</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
