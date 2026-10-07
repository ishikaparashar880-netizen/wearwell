import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopHeader from '../components/TopHeader';
import FashionImage from '../components/FashionImage';
import { useApp } from '../context/AppContext';

export default function ProfileSettings() {
  const { userProfile, updateProfile } = useApp();
  const [name, setName] = useState(userProfile.name || 'Sophia Chen');
  const [email, setEmail] = useState(userProfile.email || 'sophia.chen@vogue-luxe.com');
  const [persona, setPersona] = useState(userProfile.persona || 'Korean Minimalist & Soft Luxury');
  const [photoUrl, setPhotoUrl] = useState(userProfile.photo);

  const [weatherAlerts, setWeatherAlerts] = useState(userProfile.weatherAlerts ?? true);
  const [aiSuggestions, setAiSuggestions] = useState(userProfile.aiSuggestions ?? true);
  const [boutiqueAlerts, setBoutiqueAlerts] = useState(userProfile.boutiqueAlerts ?? true);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile({
      name,
      email,
      persona,
      photo: photoUrl,
      weatherAlerts,
      aiSuggestions,
      boutiqueAlerts,
    });
  };

  return (
    <div className="bg-[#0a0a0a] text-white font-body min-h-screen">
      <Sidebar />

      <main className="md:ml-64 p-4 md:p-8 max-w-[1200px] mx-auto w-full pb-20">
        <TopHeader />

        {/* Page Header */}
        <div className="mb-8">
          <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">Personal Account</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gold-gradient mt-1">Profile & Concierge Settings</h1>
          <p className="text-gray-400 text-xs md:text-sm mt-1">
            Fine-tune your personal style parameters, photo avatar, and AI concierge notifications.
          </p>
        </div>

        <div className="card-dark p-6 md:p-8 max-w-3xl">
          {/* Profile Header Avatar Banner */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 mb-6 border-b border-[#262626]">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-gold-glow shrink-0">
              <FashionImage src={photoUrl} alt={name} className="w-full h-full object-cover" />
            </div>

            <div className="text-center sm:text-left flex-1">
              <span className="text-[10px] bg-[#D4AF37] text-black font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                Vogue Gold Member
              </span>
              <h2 className="font-display text-2xl font-bold text-white mt-1">{name}</h2>
              <p className="text-xs text-[#D4AF37] mt-0.5 font-medium">Style Persona: {persona}</p>
              <p className="text-xs text-gray-400 mt-1">{email}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Display Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase font-bold text-[#D4AF37] mb-1.5">Display Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#0d0d0d] border border-[#262626] focus:border-[#D4AF37] rounded-xl py-3 px-4 text-xs text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-[#D4AF37] mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0d0d0d] border border-[#262626] focus:border-[#D4AF37] rounded-xl py-3 px-4 text-xs text-white focus:outline-none"
                />
              </div>
            </div>

            {/* Profile Avatar Image URL */}
            <div>
              <label className="block text-xs uppercase font-bold text-[#D4AF37] mb-1.5">Avatar Image URL</label>
              <input
                type="url"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                className="w-full bg-[#0d0d0d] border border-[#262626] focus:border-[#D4AF37] rounded-xl py-3 px-4 text-xs text-white focus:outline-none"
                placeholder="https://images.unsplash.com/photo-..."
              />
            </div>

            {/* Primary Style Aesthetic */}
            <div>
              <label className="block text-xs uppercase font-bold text-[#D4AF37] mb-1.5">Primary Style Aesthetic</label>
              <select
                value={persona}
                onChange={(e) => setPersona(e.target.value)}
                className="w-full bg-[#0d0d0d] border border-[#262626] focus:border-[#D4AF37] rounded-xl py-3 px-4 text-xs text-white focus:outline-none"
              >
                <option value="Korean Minimalist & Soft Luxury">Korean Minimalist & Soft Luxury</option>
                <option value="Monochrome Luxe">Monochrome Luxe</option>
                <option value="Classic Haute Couture">Classic Haute Couture</option>
                <option value="Ethnic Silk Glamour">Ethnic Silk Glamour</option>
                <option value="Executive Chic">Executive Chic</option>
              </select>
            </div>

            {/* AI Preferences Toggles */}
            <div className="pt-4 border-t border-[#262626]">
              <h3 className="font-display text-sm font-bold text-[#FFF0C2] mb-4">AI Concierge Preferences</h3>
              <div className="space-y-4">
                <label className="flex items-center justify-between text-xs text-gray-300 cursor-pointer p-3 rounded-xl bg-[#0d0d0d] border border-[#262626] hover:border-[#D4AF37]/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#D4AF37]">thermostat</span>
                    <div>
                      <p className="font-semibold text-white">Local Weather Integration</p>
                      <p className="text-[11px] text-gray-400">Match outfit recommendations to today's Paris weather forecast.</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={weatherAlerts}
                    onChange={(e) => setWeatherAlerts(e.target.checked)}
                    className="w-4 h-4 accent-[#D4AF37] rounded"
                  />
                </label>

                <label className="flex items-center justify-between text-xs text-gray-300 cursor-pointer p-3 rounded-xl bg-[#0d0d0d] border border-[#262626] hover:border-[#D4AF37]/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#D4AF37]">psychology</span>
                    <div>
                      <p className="font-semibold text-white">Daily AI Style Recommendations</p>
                      <p className="text-[11px] text-gray-400">Receive 8 bespoke outfit curations every morning.</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={aiSuggestions}
                    onChange={(e) => setAiSuggestions(e.target.checked)}
                    className="w-4 h-4 accent-[#D4AF37] rounded"
                  />
                </label>

                <label className="flex items-center justify-between text-xs text-gray-300 cursor-pointer p-3 rounded-xl bg-[#0d0d0d] border border-[#262626] hover:border-[#D4AF37]/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#D4AF37]">storefront</span>
                    <div>
                      <p className="font-semibold text-white">Boutique VIP Arrival Alerts</p>
                      <p className="text-[11px] text-gray-400">Notify when partner boutiques in Paris/Milan drop new capsules.</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={boutiqueAlerts}
                    onChange={(e) => setBoutiqueAlerts(e.target.checked)}
                    className="w-4 h-4 accent-[#D4AF37] rounded"
                  />
                </label>
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                className="btn-gold px-8 py-3 rounded-xl text-xs uppercase tracking-wider font-bold shadow-gold-glow flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">save</span>
                Save Preferences
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
