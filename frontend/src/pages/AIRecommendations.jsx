import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';

export default function AIRecommendations() {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/outfits/recommendations')
      .then((res) => res.json())
      .then((data) => {
        setRecommendations(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load outfits:', err);
        setLoading(false);
      });
  }, []);

  const toggleFavorite = (id) => {
    fetch(`/api/outfits/${id}/favorite`, { method: 'PATCH' })
      .then((res) => res.json())
      .then((resData) => {
        setRecommendations((prev) =>
          prev.map((item) => (item.id === id ? { ...item, isFavorite: resData.isFavorite } : item))
        );
      });
  };

  return (
    <div className="bg-surface text-on-surface font-body min-h-screen">
      <Sidebar />

      <main className="md:ml-64 p-margin-mobile md:p-gutter max-w-container-max mx-auto w-full flex flex-col gap-8 min-h-screen">
        {/* Weather & Hero Banner */}
        <section className="mt-6">
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-container-high rounded-full w-fit">
              <span className="material-symbols-outlined text-sm text-primary">wb_sunny</span>
              <span className="font-label text-xs text-on-surface-variant font-medium">Sunny, 20°C in Paris</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-on-background">Your Daily Style Curation</h1>
            <p className="font-body text-base text-on-surface-variant max-w-2xl">
              Mindfully selected outfits based on today's crisp weather and your preference for minimal Korean aesthetics. Swipe through your bespoke recommendations.
            </p>
          </div>
        </section>

        {/* Gallery / Bento Cards */}
        <section className="w-full relative">
          {loading ? (
            <div className="flex justify-center items-center py-20 text-on-surface-variant">
              <span className="material-symbols-outlined animate-spin text-3xl mr-2 text-primary">sync</span>
              <span>Curating your bespoke lookbook...</span>
            </div>
          ) : (
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-2">
              {recommendations.map((outfit) => (
                <article key={outfit.id} className="snap-center shrink-0 w-[88vw] md:w-[460px] flex flex-col gap-4 group">
                  {/* Image Card */}
                  <div className="relative w-full lookbook-tile rounded-[24px] overflow-hidden ambient-shadow group-hover:shadow-[0_15px_40px_rgba(67,24,48,0.1)] group-hover:-translate-y-1 transition-all duration-300">
                    <img
                      src={outfit.imageUrl || 'https://lh3.googleusercontent.com/aida-public/AB6AXuC27tAKzxfwa44DUDTppvuK7_wGBaTqhl5EDyI2C7vyIYGLGK1iFFz0xwtQLzc3aQv7Wv4s0_QHDOa5zvWfEdn0DZ4-GJltCiw6WTRQW3XmPO1zn3SXupPtKBOJmcnqoyjCm2-l-ecnMyYPSp6Kx4ZDsX1NAeWh3BwXud60s39F2hIV9YnopvUJK7UTL7NUq8wqlOH2W60c_ANbuQL0irxDnq-TU8NqblgL12yn_MxAuU4LcFp1xkqyMw'}
                      alt={outfit.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                    {/* Like button */}
                    <button
                      onClick={() => toggleFavorite(outfit.id)}
                      className={`absolute top-4 right-4 backdrop-blur-md p-2.5 rounded-full transition-colors ${
                        outfit.isFavorite ? 'bg-primary text-on-primary' : 'bg-surface/60 text-white hover:bg-surface/90 hover:text-primary'
                      }`}
                    >
                      <span className={`material-symbols-outlined text-lg ${outfit.isFavorite ? 'fill' : ''}`}>favorite</span>
                    </button>

                    {/* Bottom Details */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3">
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-surface/90 text-on-surface backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-xs">thermostat</span>
                          {outfit.weather || '20°C'}
                        </span>
                        <span className="bg-surface/90 text-on-surface backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-xs">style</span>
                          {outfit.styleTag}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-white">{outfit.title}</h3>
                    </div>
                  </div>

                  {/* Outfit Breakdown */}
                  <div className="bg-surface-container-lowest p-5 rounded-[24px] border border-outline-variant/30 ambient-shadow">
                    <p className="font-label text-xs uppercase tracking-wider text-on-surface-variant font-semibold mb-3">
                      Outfit Breakdown
                    </p>
                    <ul className="flex flex-col gap-3">
                      {outfit.items?.map((item) => (
                        <li key={item.id} className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-surface-container-high overflow-hidden shrink-0">
                            <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <p className="font-label text-sm font-semibold text-on-surface">{item.title}</p>
                            <p className="text-xs text-on-surface-variant">{item.category} • Wardrobe Match</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
