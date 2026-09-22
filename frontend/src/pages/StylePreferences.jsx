import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function StylePreferences() {
  const navigate = useNavigate();
  const [selectedStyle, setSelectedStyle] = useState('Korean Minimal');
  const [selectedColors, setSelectedColors] = useState(['Beige', 'Cream', 'Sage']);

  const styles = [
    { title: 'Korean Minimal', desc: 'Clean silhouettes, fluid trousers, oversized trenches, soft neutral tones.', icon: 'checkroom' },
    { title: 'Soft Luxury', desc: 'Fine cashmere knits, silk blouses, tailored wool pants, gold accent tones.', icon: 'diamond' },
    { title: 'Modern Preppy', desc: 'Structured blazers, classic pleated skirts, crisp button-downs, loafers.', icon: 'school' },
    { title: 'Monochrome Luxe', desc: 'Sleek dark palettes, architectural leather pieces, bold contrasts.', icon: 'palette' },
  ];

  const colorsList = ['Cream', 'Beige', 'Sage', 'Plum', 'Burgundy', 'Charcoal', 'Ivory', 'Black'];

  const toggleColor = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handleSave = () => {
    fetch('/api/preferences', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        archetype: selectedStyle,
        colorPalettes: selectedColors,
        fitPreference: 'Oversized & Fluid',
      }),
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="bg-surface text-on-surface font-body min-h-screen">
      <Sidebar />

      <main className="md:ml-64 p-margin-mobile md:p-gutter max-w-container-max mx-auto w-full pb-16">
        <div className="my-6">
          <h1 className="font-display text-3xl font-bold text-on-surface mb-1">Style Onboarding Quiz</h1>
          <p className="text-on-surface-variant text-sm">Select your aesthetic DNA to train your AI Concierge.</p>
        </div>

        {/* Archetypes Grid */}
        <section className="mb-8">
          <h2 className="font-display text-lg font-semibold text-primary mb-4">1. Choose your primary aesthetic</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {styles.map((s) => (
              <div
                key={s.title}
                onClick={() => setSelectedStyle(s.title)}
                className={`p-5 rounded-[24px] border cursor-pointer transition-all duration-300 ${
                  selectedStyle === s.title
                    ? 'border-primary bg-primary/5 shadow-md'
                    : 'border-surface-variant bg-white hover:border-primary/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-primary">{s.icon}</span>
                  <h3 className="font-display text-lg font-semibold text-on-surface">{s.title}</h3>
                  {selectedStyle === s.title && (
                    <span className="material-symbols-outlined ml-auto text-primary text-xl fill">check_circle</span>
                  )}
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-8">
          <h2 className="font-display text-lg font-semibold text-primary mb-4">2. Select favorite color palette tones</h2>
          <div className="flex flex-wrap gap-3">
            {colorsList.map((color) => {
              const isSel = selectedColors.includes(color);
              return (
                <button
                  key={color}
                  onClick={() => toggleColor(color)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    isSel
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'bg-white border border-surface-variant text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  {color} {isSel && '✓'}
                </button>
              );
            })}
          </div>
        </section>

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-8 py-3 rounded-[16px] bg-primary text-on-primary font-medium text-sm hover:bg-primary-container transition-colors shadow-md flex items-center gap-2"
          >
            <span>Complete Setup & Generate Recommendations</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </div>
      </main>
    </div>
  );
}
