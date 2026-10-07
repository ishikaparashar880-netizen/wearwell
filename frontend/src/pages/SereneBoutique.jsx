import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopHeader from '../components/TopHeader';
import FashionImage from '../components/FashionImage';
import { useApp } from '../context/AppContext';

export default function SereneBoutique() {
  const { addToast } = useApp();
  const [activeTab, setActiveTab] = useState('boutiques'); // boutiques | collection

  const boutiquesList = [
    {
      id: 'b1',
      name: 'Maison de L’Élégance Paris',
      location: 'Place Vendôme, Paris, France',
      rating: '4.9',
      reviews: 128,
      tag: 'Haute Couture',
      image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=800&auto=format&fit=crop',
      desc: 'Flagship atelier featuring bespoke evening gowns, silk tailoring and private fitting salons.',
    },
    {
      id: 'b2',
      name: 'Galleria Nocturne Milan',
      location: 'Via Montenapoleone, Milan, Italy',
      rating: '5.0',
      reviews: 94,
      tag: 'Italian Leather & Cashmere',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
      desc: 'Exclusive Italian craftsmanship showcase offering tailored suits, fine leatherwear and shoes.',
    },
    {
      id: 'b3',
      name: 'Ginza Minimalist Studio Tokyo',
      location: 'Ginza 6-Chome, Tokyo, Japan',
      rating: '4.9',
      reviews: 156,
      tag: 'Architectural Minimal',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=800&auto=format&fit=crop',
      desc: 'Clean structured silhouettes, Japanese raw denims, asymmetric tailoring and silk knitwear.',
    },
    {
      id: 'b4',
      name: 'Mayfair Heritage Atelier London',
      location: 'Bond Street, London, UK',
      rating: '4.8',
      reviews: 82,
      tag: 'British Savile Row',
      image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=800&auto=format&fit=crop',
      desc: 'Bespoke wool overcoats, double-breasted blazers, tweed suits and heritage luxury coats.',
    },
    {
      id: 'b5',
      name: 'Fifth Avenue Vogue Salon New York',
      location: '5th Avenue, New York, USA',
      rating: '4.9',
      reviews: 210,
      tag: 'Modern High Street',
      image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800&auto=format&fit=crop',
      desc: 'Contemporary luxury streetwear, statement handbags, designer footwear and accessories.',
    },
    {
      id: 'b6',
      name: 'Rodeo Drive Private Atelier Beverly Hills',
      location: 'Rodeo Drive, Los Angeles, USA',
      rating: '5.0',
      reviews: 115,
      tag: 'Resort & Cocktail',
      image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=800&auto=format&fit=crop',
      desc: 'Sunset cocktail slip dresses, diamond-encrusted jewelry and red-carpet premiere gowns.',
    },
  ];

  const handleVisit = (name) => {
    addToast('Private Fitting Reserved', `Appointment invitation requested at ${name}.`);
  };

  return (
    <div className="bg-[#0a0a0a] text-white font-body min-h-screen">
      <Sidebar />

      <main className="md:ml-64 p-4 md:p-8 max-w-[1400px] mx-auto w-full pb-20">
        <TopHeader />

        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
          <div>
            <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">Global Haute Couture</span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-gold-gradient mt-1">Luxury Partner Boutiques</h1>
            <p className="text-gray-400 text-xs md:text-sm mt-1">
              Explore 6 exclusive partner ateliers across Paris, Milan, Tokyo, London, New York and Beverly Hills.
            </p>
          </div>

          <div className="flex bg-[#141414] border border-[#262626] p-1 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveTab('boutiques')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'boutiques' ? 'bg-[#D4AF37] text-black font-bold shadow' : 'text-gray-400 hover:text-white'
              }`}
            >
              Partner Ateliers (6)
            </button>
            <button
              onClick={() => setActiveTab('capsule')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'capsule' ? 'bg-[#D4AF37] text-black font-bold shadow' : 'text-gray-400 hover:text-white'
              }`}
            >
              Editorial Showcase
            </button>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/40 bg-gradient-to-r from-[#141414] via-[#1a1710] to-[#0a0a0a] p-8 mb-10 shadow-2xl">
          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Private VIP Concierge Fitting
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-2 mb-3">
              Personal Shopping & Fitting Salons
            </h2>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed mb-6">
              WearWell members receive priority access to private fitting suites, custom tailoring commissions, and early access to seasonal haute couture capsules.
            </p>
            <button
              onClick={() => addToast('VIP Access Unlocked', 'Concierge booking code: WEARWELL-GOLD-VIP')}
              className="btn-gold px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-gold-glow"
            >
              Book VIP Appointment
            </button>
          </div>
        </div>

        {/* 6 Boutique Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {boutiquesList.map((item) => (
            <div key={item.id} className="card-dark overflow-hidden flex flex-col group relative">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#181818]">
                <FashionImage
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-[#D4AF37]/40 text-[#FFF0C2] text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                  {item.tag}
                </span>

                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-[#262626] text-[#D4AF37] text-xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1">
                  ★ {item.rating} <span className="text-[10px] text-gray-400">({item.reviews})</span>
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#D4AF37] flex items-center gap-1 mt-1 font-medium">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    {item.location}
                  </p>
                  <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-4 border-t border-[#262626] flex items-center justify-between">
                  <span className="text-[11px] text-gray-400">Open 10:00 - 20:00</span>
                  <button
                    onClick={() => handleVisit(item.name)}
                    className="btn-gold px-5 py-2 rounded-xl text-xs uppercase font-bold flex items-center gap-1.5"
                  >
                    <span>Visit Atelier</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
