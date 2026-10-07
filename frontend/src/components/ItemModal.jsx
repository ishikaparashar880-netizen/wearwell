import React, { useState } from 'react';

export default function ItemModal({ isOpen, onClose, onAddItem }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Tops');
  const [imageUrl, setImageUrl] = useState('');
  const [style, setStyle] = useState('Korean Minimal');
  const [color, setColor] = useState('Black & Gold');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !imageUrl) return;
    onAddItem({
      title,
      category,
      imageUrl,
      style,
      color,
    });
    setTitle('');
    setImageUrl('');
    onClose();
  };

  const presetImages = [
    { label: 'Silk Evening Blouse', category: 'Tops', url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop' },
    { label: 'Tailored Wide Trousers', category: 'Bottoms', url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop' },
    { label: 'Charcoal Wool Coat', category: 'Outerwear', url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop' },
    { label: 'Stiletto Leather Boots', category: 'Shoes', url: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop' },
    { label: 'Banarasi Silk Sari', category: 'Dresses', url: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop' },
    { label: 'Gold Chronograph Watch', category: 'Accessories', url: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#141414] border border-[#D4AF37]/50 rounded-2xl shadow-2xl max-w-lg w-full p-6 relative overflow-hidden text-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#D4AF37] transition-colors p-1"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="flex items-center gap-2 mb-1">
          <span className="material-symbols-outlined text-[#D4AF37]">add_circle</span>
          <h2 className="font-display text-2xl font-bold text-gold-gradient">Add Wardrobe Staple</h2>
        </div>
        <p className="text-xs text-gray-400 mb-6">Upload or select a fashion item to add to your digital closet.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase font-bold text-[#D4AF37] mb-1">Garment Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Italian Cashmere Trench Coat"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-[#0d0d0d] border border-[#262626] focus:border-[#D4AF37] rounded-xl py-2.5 px-4 text-white focus:outline-none text-xs"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase font-bold text-[#D4AF37] mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#0d0d0d] border border-[#262626] focus:border-[#D4AF37] rounded-xl py-2.5 px-3 text-white text-xs focus:outline-none"
              >
                <option value="Tops">Tops</option>
                <option value="Bottoms">Bottoms</option>
                <option value="Dresses">Dresses</option>
                <option value="Outerwear">Outerwear</option>
                <option value="Shoes">Shoes</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase font-bold text-[#D4AF37] mb-1">Style Tag</label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full bg-[#0d0d0d] border border-[#262626] focus:border-[#D4AF37] rounded-xl py-2.5 px-3 text-white text-xs focus:outline-none"
              >
                <option value="Korean Minimal">Korean Minimal</option>
                <option value="Soft Luxury">Soft Luxury</option>
                <option value="Monochrome Luxe">Monochrome Luxe</option>
                <option value="Ethnic Wear">Ethnic Wear</option>
                <option value="Smart Casual">Smart Casual</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase font-bold text-[#D4AF37] mb-1">High-Res Image URL</label>
            <input
              type="url"
              required
              placeholder="https://images.unsplash.com/photo-..."
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full bg-[#0d0d0d] border border-[#262626] focus:border-[#D4AF37] rounded-xl py-2.5 px-4 text-white focus:outline-none text-xs"
            />
            <p className="text-[11px] text-gray-400 mt-2">Or select from haute couture preset images:</p>
            <div className="flex gap-2 mt-2 overflow-x-auto pb-1 custom-scrollbar">
              {presetImages.map((preset, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => {
                    setImageUrl(preset.url);
                    setTitle(preset.label);
                    setCategory(preset.category);
                  }}
                  className="px-2.5 py-1 text-[11px] bg-[#1a1a1a] border border-[#262626] rounded-lg text-gray-300 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors shrink-0"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 flex justify-end gap-3 border-t border-[#262626]">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-[#262626] text-gray-400 hover:text-white text-xs font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-gold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold"
            >
              Save to Closet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
