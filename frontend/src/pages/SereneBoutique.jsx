import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function SereneBoutique() {
  const [activeMode, setActiveMode] = useState('narrative'); // narrative | nocturne

  const narrativeItems = [
    {
      title: 'Serene Capsule Wool Coat',
      price: '$580',
      tag: 'Boutique Exclusive',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC27tAKzxfwa44DUDTppvuK7_wGBaTqhl5EDyI2C7vyIYGLGK1iFFz0xwtQLzc3aQv7Wv4s0_QHDOa5zvWfEdn0DZ4-GJltCiw6WTRQW3XmPO1zn3SXupPtKBOJmcnqoyjCm2-l-ecnMyYPSp6Kx4ZDsX1NAeWh3BwXud60s39F2hIV9YnopvUJK7UTL7NUq8wqlOH2W60c_ANbuQL0irxDnq-TU8NqblgL12yn_MxAuU4LcFp1xkqyMw'
    },
    {
      title: 'Artisanal Cashmere Knit',
      price: '$340',
      tag: 'Soft Minimal',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJPQMRFEAkHeZcnZCbpaFhw9MJNkuV0fcVp8--djGgzRh_wWLYnrN6dEWPI7H52kln6Iw67LTz57gFWWa-l7fkWZlMGNbXz-NcIqH_whpcRdy1ElQUBCI0ZiXXN4W83np1-SvIVBmF8FYzgj_LiLpmobm0axacXhrgJzAHJk3m440DFL5PPSMitJZ_RJSSOO_dPAhC5M2JJiiLQ6CgGH_lyjA62lvVLmuX4noT5-SOxtg8U8UTLK-Pbw'
    }
  ];

  const nocturneItems = [
    {
      title: 'Nocturne Silk Evening Blazer',
      price: '$720',
      tag: 'Midnight Edition',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-1fRANIqca7kh4fy52p5hWG97nyKx8nl2rp1KnyQBUPJy8IG_5Stz2T0uqhJVrpBc577dYLcJcJYJA8LxrXQtu9lGE8XnEkmbgzk-qS8PhjjIXknTgVEu1pvJePbql0OSPGGf-cmQWPG4HG87vrjTbICLHFgziEq5XkXsNoBhBcWhbB-PhMFkff6Pmt28sa-gVIDix37i5F5HpAjiKD5HnP8W-yAzTkKlp3zLJAISyeBFM1JA3GMs4Q'
    },
    {
      title: 'Charcoal Pleated Trousers',
      price: '$290',
      tag: 'Tailored Luxury',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCfNldJK-n3_fxiww_AunA1n9FeBveoeDjn8_meAgMQx5On1gy-czkKZ0QUs29PzeuVLpbB7N1sg-cGDXR2kNnPTgCRaVPXWR_L0btwKcYK0P5z3U6mchkD_NitRSlRUWAqn2VD30e_c_quORexVoGUlpyB_Y306x0xINK5GKXyuR4ZndrVL4PfDj-FmLgGZ3XvpLjl5sH4ZbZ61bPTi1e5s0JtBNcS-Db8Rv6zjfkQsjPRgMhItUxRQ'
    }
  ];

  const isNocturne = activeMode === 'nocturne';

  return (
    <div className={`font-body min-h-screen transition-colors duration-500 ${isNocturne ? 'bg-inverse-surface text-inverse-on-surface' : 'bg-surface text-on-surface'}`}>
      <Sidebar />

      <main className="md:ml-64 p-margin-mobile md:p-gutter max-w-container-max mx-auto w-full pb-16">
        {/* Toggle Mode */}
        <div className="flex justify-between items-center my-6">
          <div>
            <span className="text-xs uppercase font-semibold tracking-widest text-primary">WearWell Editorial</span>
            <h1 className="font-display text-4xl font-bold mt-1">Serene Boutique Showcase</h1>
          </div>
          <div className="flex bg-surface-container p-1 rounded-full border border-surface-variant">
            <button
              onClick={() => setActiveMode('narrative')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeMode === 'narrative' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant'
              }`}
            >
              Editorial Narrative
            </button>
            <button
              onClick={() => setActiveMode('nocturne')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeMode === 'nocturne' ? 'bg-inverse-primary text-inverse-surface shadow-sm' : 'text-on-surface-variant'
              }`}
            >
              Nocturne Luxe (Dark)
            </button>
          </div>
        </div>

        {/* Hero editorial banner */}
        <div className={`rounded-[32px] overflow-hidden p-8 md:p-12 mb-10 relative ${isNocturne ? 'bg-gray-900 border border-gray-800' : 'bg-surface-container-high border border-outline-variant/30'}`}>
          <div className="max-w-xl z-10 relative">
            <span className="text-xs font-label uppercase tracking-widest text-primary font-bold">
              {isNocturne ? 'Midnight Nocturne Capsule' : 'Autumn Narrative Collection'}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              {isNocturne ? 'Sophisticated Shadows & Dark Luxe' : 'Mindful Elegance & Soft Minimalist Drapes'}
            </h2>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              {isNocturne
                ? 'Curated evening aesthetics crafted with rich textures, deep charcoal wools, and subtle architectural silhouettes.'
                : 'Experience understated luxury through organic cotton gabardine, soothing sage tones, and airy morning silhouettes.'}
            </p>
            <button className="px-6 py-3 rounded-full bg-primary text-on-primary text-xs font-semibold tracking-wider uppercase hover:scale-105 transition-transform shadow-md">
              Explore Collection
            </button>
          </div>
        </div>

        {/* Collection items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(isNocturne ? nocturneItems : narrativeItems).map((item, idx) => (
            <div key={idx} className={`rounded-[24px] overflow-hidden border shadow-soft transition-all duration-300 hover:-translate-y-1 ${isNocturne ? 'bg-gray-900 border-gray-800' : 'bg-white border-surface-container'}`}>
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[11px] px-3 py-1 rounded-full font-semibold">
                  {item.tag}
                </span>
              </div>
              <div className="p-6 flex justify-between items-center">
                <div>
                  <h3 className="font-display text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-primary font-semibold mt-0.5">{item.price}</p>
                </div>
                <button className="px-4 py-2 rounded-xl border border-primary text-primary text-xs font-semibold hover:bg-primary hover:text-on-primary transition-colors">
                  Request Fitting
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
