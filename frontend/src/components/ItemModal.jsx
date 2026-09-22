import React, { useState } from 'react';

export default function ItemModal({ isOpen, onClose, onAddItem }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Top');
  const [imageUrl, setImageUrl] = useState('');
  const [style, setStyle] = useState('Minimalist');
  const [color, setColor] = useState('Neutral');

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
      tags: [style, category]
    });
    setTitle('');
    setImageUrl('');
    onClose();
  };

  const presetImages = [
    { label: 'Silk Blouse', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYKOQPOSaZXWyoipx2tZRi4zs1ySIVbHtFTkxs7INb_b8guIDX82pDs0Z2q0KLuWi7GxEUXVZXXuqQaILOXz7GQ_s4Q9UtZP77NtkXDzJdWRA6TLlXk3Ojem55DiywKAcRM36g3lVdj2X1oSxEPjZyFO7hj3ZnvfrELIJ2N8Dlpjlv8Rr9tb6hiJh1ckeCAfAV9IIkyTXfuCNq8RwWv2QH1sq6NoIgcMelczAMKhgFB9vA5h79CsnZ0A' },
    { label: 'Beige Trousers', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC16-5Q1f_PHbGUcV-pi6f2CzM8A1TEl3tlRNOOw4ZLZNflRZBhkYxP5_h5DPvJ53p9KvfOqABywRz-JvWDi0GZwia-gqOGxkFdJnwm-_-0ztGs11xBhfmuKzHYtNCLNlJ1Q_rYeEtojiC0WLqX2heCHSVwCwn2WOPnQauZ4FjQbYbsorS032YyT8CqPP8wFCxVjD6AEQCfTbHXUeXuMg8TuyGTjYheMEGcXPi35Iw9CHYeuxByHNsCaQ' },
    { label: 'Burgundy Loafers', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-1fRANIqca7kh4fy52p5hWG97nyKx8nl2rp1KnyQBUPJy8IG_5Stz2T0uqhJVrpBc577dYLcJcJYJA8LxrXQtu9lGE8XnEkmbgzk-qS8PhjjIXknTgVEu1pvJePbql0OSPGGf-cmQWPG4HG87vrjTbICLHFgziEq5XkXsNoBhBcWhbB-PhMFkff6Pmt28sa-gVIDix37i5F5HpAjiKD5HnP8W-yAzTkKlp3zLJAISyeBFM1JA3GMs4Q' },
    { label: 'Trench Coat', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzDi0qCr-Gw7x8C8tv_JzecCNqhJ4vebx7lbrOB0vcQRPk3ar8OrLMECYOOx21a9Dj9aGEEuEb6fLBmi2riBTqQPEADHn8mH53TkrOCqnH6KnM_WzeitOrPLUSXZVMmAIQEaOOCmpVChW7TJ3FiLrLxwZQatPZ0oXm4rZFrhOGSoAs2EAFp0F3f4H7CjWCqFFfEvcB7ECjwOI48VCsQoiVaTY5T_YCpQO1Z4USiNiB9PVVLDCnTlvm_w' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-surface rounded-[24px] shadow-2xl max-w-lg w-full p-6 border border-surface-variant relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors p-1"
        >
          <span class="material-symbols-outlined">close</span>
        </button>

        <h2 className="font-display text-2xl font-semibold text-primary mb-1">Add Wardrobe Item</h2>
        <p className="text-sm text-on-surface-variant mb-6">Upload or describe your fashion piece to add it to your digital closet.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase font-semibold text-on-surface-variant mb-1">Item Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Linen Cream Blazer"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-surface-container-lowest border border-surface-variant rounded-xl py-2.5 px-4 text-on-surface focus:outline-none focus:ring-1 focus:ring-primary text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase font-semibold text-on-surface-variant mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-surface-container-lowest border border-surface-variant rounded-xl py-2.5 px-3 text-on-surface text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="Top">Top</option>
                <option value="Bottom">Bottom</option>
                <option value="Outerwear">Outerwear</option>
                <option value="Shoes">Shoes</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase font-semibold text-on-surface-variant mb-1">Style Tag</label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full bg-surface-container-lowest border border-surface-variant rounded-xl py-2.5 px-3 text-on-surface text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="Minimalist">Minimalist</option>
                <option value="Korean Minimal">Korean Minimal</option>
                <option value="Soft Luxury">Soft Luxury</option>
                <option value="Smart Casual">Smart Casual</option>
                <option value="Preppy">Preppy</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase font-semibold text-on-surface-variant mb-1">Image URL</label>
            <input
              type="url"
              required
              placeholder="https://images.unsplash.com/photo-..."
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full bg-surface-container-lowest border border-surface-variant rounded-xl py-2.5 px-4 text-on-surface focus:outline-none focus:ring-1 focus:ring-primary text-sm"
            />
            <p className="text-[11px] text-on-surface-variant mt-1">Or choose a quick demo image:</p>
            <div className="flex gap-2 mt-2 overflow-x-auto pb-1">
              {presetImages.map((preset, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => setImageUrl(preset.url)}
                  className="px-2.5 py-1 text-xs bg-surface-container-high rounded-lg text-on-surface hover:bg-primary hover:text-on-primary transition-colors shrink-0"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-surface-variant text-on-surface-variant text-sm font-medium hover:bg-surface-container transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-primary text-on-primary text-sm font-medium hover:bg-primary-container transition-colors shadow-sm"
            >
              Save to Wardrobe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
