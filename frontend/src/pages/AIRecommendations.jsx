import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopHeader from '../components/TopHeader';
import FashionImage from '../components/FashionImage';
import { useApp } from '../context/AppContext';

export default function AIRecommendations() {
  const navigate = useNavigate();
  const { aiOutfits, toggleFavoriteOutfit, addToast } = useApp();
  const [selectedOutfit, setSelectedOutfit] = useState(null);
  const [searchFilter, setSearchFilter] = useState('');

  const trendingLooks = [
    {
      id: 't1',
      title: 'Monochrome Velvet Gala',
      tag: 'Red Carpet',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 't2',
      title: 'Seville Gold Silk Sari',
      tag: 'Haute Couture',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 't3',
      title: 'Milanese Leather Overcoat',
      tag: 'Runway Special',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 't4',
      title: 'Tokyo Asymmetric Tailoring',
      tag: 'Avant-Garde',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 't5',
      title: 'Parisian Trench & Cashmere',
      tag: 'Streetwear Chic',
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const filteredOutfits = aiOutfits.filter(
    (o) =>
      o.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      o.styleTag.toLowerCase().includes(searchFilter.toLowerCase()) ||
      o.description.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="bg-[#0a0a0a] text-white font-body min-h-screen">
      <Sidebar />

      <main className="md:ml-64 p-4 md:p-8 max-w-[1400px] mx-auto w-full flex flex-col gap-8 pb-20">
        <TopHeader onSearch={(val) => setSearchFilter(val)} />

        {/* Hero Banner */}
        <section className="relative rounded-3xl overflow-hidden border border-[#262626] bg-gradient-to-r from-[#141414] via-[#1a1710] to-[#0d0d0d] shadow-2xl p-6 md:p-10 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 z-10 relative">
            <div className="max-w-xl flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1f1a0e] border border-[#D4AF37]/40 rounded-full w-fit">
                <span className="material-symbols-outlined text-sm text-[#D4AF37]">auto_awesome</span>
                <span className="text-xs font-semibold text-[#FFF0C2] uppercase tracking-wider">
                  AI Personal Stylist Curation
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-gold-gradient leading-tight">
                Your Daily Style Curation
              </h1>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Mindfully selected ensembles tailored to today's crisp Paris weather (22°C Clear) and your Korean Minimalist & Soft Luxury aesthetic DNA.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => navigate('/builder')}
                  className="btn-gold px-6 py-3 rounded-xl text-xs uppercase tracking-wider font-bold shadow-gold-glow"
                >
                  Explore Outfit Builder
                </button>
                <button
                  onClick={() => navigate('/quiz')}
                  className="px-6 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
                >
                  Retake Style Quiz
                </button>
              </div>
            </div>

            {/* Hero Image Card */}
            <div className="w-full md:w-80 h-96 rounded-2xl overflow-hidden border border-[#D4AF37]/40 relative group shadow-gold-glow shrink-0">
              <FashionImage
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop"
                alt="Editorial Fashion"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] bg-[#D4AF37] text-black font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest">
                  Featured Ensemble
                </span>
                <h3 className="font-display text-lg font-bold text-white mt-1">Parisian Trench Look</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Now Section */}
        <section className="flex flex-col gap-4">
          <div className="flex justify-between items-end border-b border-[#262626] pb-3">
            <div>
              <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">Vogue Edition</span>
              <h2 className="font-display text-2xl font-bold text-white">Trending Now</h2>
            </div>
            <span className="text-xs text-gray-400">Swipe to discover &rarr;</span>
          </div>

          <div className="flex gap-4 overflow-x-auto custom-scrollbar pb-3 pt-1">
            {trendingLooks.map((item) => (
              <div
                key={item.id}
                onClick={() => addToast('Look Inspiration', `Exploring ${item.title}`)}
                className="shrink-0 w-64 card-dark overflow-hidden cursor-pointer group"
              >
                <div className="relative h-72 overflow-hidden">
                  <FashionImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#0a0a0a]/80 backdrop-blur-md border border-[#D4AF37]/50 text-[#FFF0C2] text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">
                    {item.tag}
                  </span>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="font-display text-base font-bold text-white">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8 Outfit Recommendation Cards Grid */}
        <section className="flex flex-col gap-6">
          <div className="flex justify-between items-center border-b border-[#262626] pb-3">
            <div>
              <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">Bespoke Curation</span>
              <h2 className="font-display text-2xl font-bold text-white">Daily Outfit Recommendations (8)</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredOutfits.map((outfit) => (
              <div key={outfit.id} className="card-dark overflow-hidden flex flex-col group relative">
                {/* Outfit Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#181818]">
                  <FashionImage
                    src={outfit.imageUrl}
                    alt={outfit.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  {/* Weather Tag */}
                  <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md border border-[#262626] text-gray-200 text-[10px] px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs text-[#D4AF37]">thermostat</span>
                    {outfit.weather}
                  </span>

                  {/* Heart / Favorite Toggle Button */}
                  <button
                    onClick={() => toggleFavoriteOutfit(outfit.id)}
                    className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all ${
                      outfit.isFavorite
                        ? 'bg-[#D4AF37] text-black shadow-gold-glow'
                        : 'bg-black/60 text-gray-300 hover:text-[#D4AF37] hover:bg-black/90'
                    }`}
                    title={outfit.isFavorite ? 'Saved to Favorites' : 'Save to Favorites'}
                  >
                    <span className={`material-symbols-outlined text-base ${outfit.isFavorite ? 'fill' : ''}`}>
                      favorite
                    </span>
                  </button>

                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#FFF0C2] text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                      {outfit.styleTag}
                    </span>
                    <h3 className="font-display text-lg font-bold text-white mt-1 leading-snug">{outfit.title}</h3>
                  </div>
                </div>

                {/* Outfit Description & Breakdown */}
                <div className="p-4 flex flex-col flex-1 justify-between gap-4">
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">{outfit.description}</p>

                  {/* Breakdown mini items list */}
                  <div className="bg-[#0d0d0d] p-3 rounded-xl border border-[#262626] flex flex-col gap-2">
                    <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-wider">Items in Look</span>
                    <div className="flex gap-2">
                      {outfit.items?.slice(0, 3).map((item, idx) => (
                        <div
                          key={idx}
                          className="w-10 h-10 rounded-lg overflow-hidden border border-[#262626] bg-[#1a1a1a] shrink-0"
                          title={item.title}
                        >
                          <FashionImage src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-1">
                    <button
                      onClick={() => {
                        addToast('Ensemble Selected', `Loading "${outfit.title}" into studio canvas.`);
                        navigate('/builder');
                      }}
                      className="btn-gold flex-1 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-sm">auto_fix_high</span>
                      Try This Look
                    </button>
                    <button
                      onClick={() => setSelectedOutfit(outfit)}
                      className="p-2 bg-[#1c1c1c] border border-[#262626] hover:border-[#D4AF37]/50 text-gray-300 hover:text-[#D4AF37] rounded-xl transition-colors"
                      title="View Details"
                    >
                      <span className="material-symbols-outlined text-sm">visibility</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Outfit Detail Modal */}
        {selectedOutfit && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="bg-[#141414] border border-[#D4AF37]/50 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative p-6 flex flex-col md:flex-row gap-6">
              <button
                onClick={() => setSelectedOutfit(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white bg-[#0a0a0a] rounded-full p-1 border border-[#262626]"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>

              <div className="w-full md:w-1/2 aspect-[3/4] rounded-xl overflow-hidden border border-[#262626]">
                <FashionImage
                  src={selectedOutfit.imageUrl}
                  alt={selectedOutfit.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <span className="bg-[#D4AF37]/20 border border-[#D4AF37] text-[#FFF0C2] text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                    {selectedOutfit.styleTag}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white mt-3">{selectedOutfit.title}</h3>
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed">{selectedOutfit.description}</p>

                  <div className="mt-4 pt-4 border-t border-[#262626]">
                    <h4 className="text-xs uppercase font-bold text-[#D4AF37] mb-2">Garment Specs</h4>
                    <ul className="space-y-2">
                      {selectedOutfit.items?.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                          <span className="material-symbols-outlined text-xs text-[#D4AF37]">check_circle</span>
                          <span>{item.title} ({item.category})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-[#262626] mt-4">
                  <button
                    onClick={() => {
                      toggleFavoriteOutfit(selectedOutfit.id);
                      setSelectedOutfit(null);
                    }}
                    className="flex-1 py-2.5 rounded-xl border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 text-xs font-semibold"
                  >
                    {selectedOutfit.isFavorite ? 'Remove Favorite' : 'Save to Favorites'}
                  </button>
                  <button
                    onClick={() => {
                      setSelectedOutfit(null);
                      navigate('/builder');
                    }}
                    className="btn-gold flex-1 py-2.5 rounded-xl text-xs font-semibold"
                  >
                    Open Studio
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
