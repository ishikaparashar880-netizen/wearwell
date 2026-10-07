import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopHeader from '../components/TopHeader';
import FashionImage from '../components/FashionImage';
import { useApp } from '../context/AppContext';

export default function OutfitBuilder() {
  const { wardrobe, saveBuiltOutfit, addToast } = useApp();
  const [selectedTop, setSelectedTop] = useState(wardrobe.find((i) => i.category === 'Tops') || wardrobe[0]);
  const [selectedBottom, setSelectedBottom] = useState(wardrobe.find((i) => i.category === 'Bottoms') || wardrobe[1]);
  const [selectedShoes, setSelectedShoes] = useState(wardrobe.find((i) => i.category === 'Shoes') || wardrobe[4]);
  const [selectedAccessory, setSelectedAccessory] = useState(wardrobe.find((i) => i.category === 'Accessories') || wardrobe[5]);
  const [outfitTitle, setOutfitTitle] = useState('Bespoke Gold & Midnight Look');

  const tops = wardrobe.filter((i) => i.category === 'Tops' || i.category === 'Outerwear');
  const bottoms = wardrobe.filter((i) => i.category === 'Bottoms' || i.category === 'Dresses');
  const shoes = wardrobe.filter((i) => i.category === 'Shoes');
  const accessories = wardrobe.filter((i) => i.category === 'Accessories');

  const handleAiAutoMatch = () => {
    if (tops.length) setSelectedTop(tops[Math.floor(Math.random() * tops.length)]);
    if (bottoms.length) setSelectedBottom(bottoms[Math.floor(Math.random() * bottoms.length)]);
    if (shoes.length) setSelectedShoes(shoes[Math.floor(Math.random() * shoes.length)]);
    if (accessories.length) setSelectedAccessory(accessories[Math.floor(Math.random() * accessories.length)]);
    addToast('AI Auto-Match Applied', 'Created an optimal haute couture color & texture combination.');
  };

  const handleSave = () => {
    const combinedItems = [selectedTop, selectedBottom, selectedShoes, selectedAccessory].filter(Boolean);
    if (combinedItems.length === 0) return;

    saveBuiltOutfit({
      title: outfitTitle || 'Studio Custom Outfit',
      description: `Bespoke ensemble featuring ${selectedTop?.title || 'garment'} and ${selectedBottom?.title || 'pants'}.`,
      styleTag: 'Studio Bespoke',
      weather: '22°C Clear',
      imageUrl: selectedTop?.imageUrl || selectedBottom?.imageUrl || combinedItems[0]?.imageUrl,
      items: combinedItems,
    });
  };

  const handleClearCanvas = () => {
    setSelectedTop(null);
    setSelectedBottom(null);
    setSelectedShoes(null);
    setSelectedAccessory(null);
    addToast('Canvas Cleared', 'All garment selections reset.');
  };

  return (
    <div className="bg-[#0a0a0a] text-white font-body min-h-screen">
      <Sidebar />

      <main className="md:ml-64 p-4 md:p-8 max-w-[1400px] mx-auto w-full pb-20">
        <TopHeader />

        {/* Page Title & Header Actions */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
          <div>
            <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">Interactive Studio</span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-gold-gradient mt-1">Outfit Builder Studio</h1>
            <p className="text-gray-400 text-xs md:text-sm mt-1">
              Select tops, bottoms, shoes, and luxury accessories to assemble your bespoke look preview.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={handleAiAutoMatch}
              className="px-4 py-2.5 rounded-xl border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors text-xs font-semibold flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">psychology</span>
              AI Auto-Match
            </button>
            <button
              onClick={handleSave}
              className="btn-gold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold shadow-gold-glow flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">save</span>
              Save Outfit
            </button>
          </div>
        </div>

        {/* Studio Canvas & Selection Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left / Center: Live Outfit Canvas (7 cols) */}
          <div className="lg:col-span-7 flex flex-col card-dark p-6 relative overflow-hidden">
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-[#262626]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#D4AF37]">checkroom</span>
                <input
                  type="text"
                  value={outfitTitle}
                  onChange={(e) => setOutfitTitle(e.target.value)}
                  className="bg-[#0d0d0d] border border-[#262626] focus:border-[#D4AF37] px-3 py-1.5 rounded-xl text-sm font-display font-bold text-white focus:outline-none"
                  placeholder="Name your outfit..."
                />
              </div>

              <button
                onClick={handleClearCanvas}
                className="text-gray-400 hover:text-red-400 text-xs font-semibold flex items-center gap-1 p-1"
                title="Clear Canvas"
              >
                <span className="material-symbols-outlined text-base">delete_sweep</span>
                Clear Canvas
              </button>
            </div>

            {/* Combined Outfit Preview Canvas */}
            <div className="grid grid-cols-2 gap-4 flex-1 min-h-[420px] bg-[#0d0d0d] p-4 rounded-2xl border border-[#262626] relative">
              {/* Top Placement */}
              <div className="card-dark p-3 flex flex-col items-center justify-between border-[#262626] relative group">
                <span className="text-[10px] uppercase font-bold text-[#D4AF37] self-start">Top / Outerwear</span>
                {selectedTop ? (
                  <>
                    <div className="w-full h-44 overflow-hidden rounded-xl bg-[#141414] my-2">
                      <FashionImage src={selectedTop.imageUrl} alt={selectedTop.title} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs font-semibold text-white truncate w-full text-center">{selectedTop.title}</p>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-10 text-gray-500">
                    <span className="material-symbols-outlined text-3xl mb-1">dry_cleaning</span>
                    <span className="text-xs">No Top Selected</span>
                  </div>
                )}
              </div>

              {/* Bottom Placement */}
              <div className="card-dark p-3 flex flex-col items-center justify-between border-[#262626] relative group">
                <span className="text-[10px] uppercase font-bold text-[#D4AF37] self-start">Bottom / Dress</span>
                {selectedBottom ? (
                  <>
                    <div className="w-full h-44 overflow-hidden rounded-xl bg-[#141414] my-2">
                      <FashionImage src={selectedBottom.imageUrl} alt={selectedBottom.title} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs font-semibold text-white truncate w-full text-center">{selectedBottom.title}</p>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-10 text-gray-500">
                    <span className="material-symbols-outlined text-3xl mb-1">strikethrough_s</span>
                    <span className="text-xs">No Bottom Selected</span>
                  </div>
                )}
              </div>

              {/* Shoes Placement */}
              <div className="card-dark p-3 flex flex-col items-center justify-between border-[#262626] relative group">
                <span className="text-[10px] uppercase font-bold text-[#D4AF37] self-start">Footwear</span>
                {selectedShoes ? (
                  <>
                    <div className="w-full h-36 overflow-hidden rounded-xl bg-[#141414] my-2">
                      <FashionImage src={selectedShoes.imageUrl} alt={selectedShoes.title} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs font-semibold text-white truncate w-full text-center">{selectedShoes.title}</p>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-gray-500">
                    <span className="material-symbols-outlined text-3xl mb-1">roller_skating</span>
                    <span className="text-xs">No Shoes Selected</span>
                  </div>
                )}
              </div>

              {/* Accessories Placement */}
              <div className="card-dark p-3 flex flex-col items-center justify-between border-[#262626] relative group">
                <span className="text-[10px] uppercase font-bold text-[#D4AF37] self-start">Accessories</span>
                {selectedAccessory ? (
                  <>
                    <div className="w-full h-36 overflow-hidden rounded-xl bg-[#141414] my-2">
                      <FashionImage src={selectedAccessory.imageUrl} alt={selectedAccessory.title} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs font-semibold text-white truncate w-full text-center">{selectedAccessory.title}</p>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-gray-500">
                    <span className="material-symbols-outlined text-3xl mb-1">watch</span>
                    <span className="text-xs">No Accessory Selected</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Garment Picker Panel (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Tops Picker */}
            <div className="card-dark p-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-display text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  Select Top / Jacket
                </h3>
                <span className="text-[10px] text-gray-400">{tops.length} options</span>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
                {tops.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedTop(item)}
                    className={`shrink-0 w-24 p-2 rounded-xl border cursor-pointer transition-all ${
                      selectedTop?.id === item.id
                        ? 'border-[#D4AF37] bg-[#1e1a10] shadow-gold-glow'
                        : 'border-[#262626] bg-[#0d0d0d] hover:border-gray-600'
                    }`}
                  >
                    <div className="w-full h-20 rounded-lg overflow-hidden mb-1">
                      <FashionImage src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-[10px] text-gray-200 truncate font-medium text-center">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottoms Picker */}
            <div className="card-dark p-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-display text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  Select Bottom / Dress
                </h3>
                <span className="text-[10px] text-gray-400">{bottoms.length} options</span>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
                {bottoms.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedBottom(item)}
                    className={`shrink-0 w-24 p-2 rounded-xl border cursor-pointer transition-all ${
                      selectedBottom?.id === item.id
                        ? 'border-[#D4AF37] bg-[#1e1a10] shadow-gold-glow'
                        : 'border-[#262626] bg-[#0d0d0d] hover:border-gray-600'
                    }`}
                  >
                    <div className="w-full h-20 rounded-lg overflow-hidden mb-1">
                      <FashionImage src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-[10px] text-gray-200 truncate font-medium text-center">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Shoes & Accessories Row */}
            <div className="grid grid-cols-2 gap-4">
              {/* Shoes Picker */}
              <div className="card-dark p-4">
                <h3 className="font-display text-xs font-bold text-white mb-2">Shoes</h3>
                <div className="flex flex-col gap-2 max-h-40 overflow-y-auto custom-scrollbar pr-1">
                  {shoes.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedShoes(item)}
                      className={`flex items-center gap-2 p-1.5 rounded-lg border cursor-pointer transition-all ${
                        selectedShoes?.id === item.id
                          ? 'border-[#D4AF37] bg-[#1e1a10]'
                          : 'border-[#262626] bg-[#0d0d0d]'
                      }`}
                    >
                      <div className="w-8 h-8 rounded overflow-hidden shrink-0">
                        <FashionImage src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[10px] text-gray-200 truncate">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accessories Picker */}
              <div className="card-dark p-4">
                <h3 className="font-display text-xs font-bold text-white mb-2">Accessories</h3>
                <div className="flex flex-col gap-2 max-h-40 overflow-y-auto custom-scrollbar pr-1">
                  {accessories.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedAccessory(item)}
                      className={`flex items-center gap-2 p-1.5 rounded-lg border cursor-pointer transition-all ${
                        selectedAccessory?.id === item.id
                          ? 'border-[#D4AF37] bg-[#1e1a10]'
                          : 'border-[#262626] bg-[#0d0d0d]'
                      }`}
                    >
                      <div className="w-8 h-8 rounded overflow-hidden shrink-0">
                        <FashionImage src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[10px] text-gray-200 truncate">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
