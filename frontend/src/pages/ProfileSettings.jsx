import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function ProfileSettings() {
  const [name, setName] = useState('Sophia Chen');
  const [email, setEmail] = useState('sophia.chen@example.com');
  const [persona, setPersona] = useState('Korean Minimalist');
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  return (
    <div className="bg-surface text-on-surface font-body min-h-screen">
      <Sidebar />

      <main className="md:ml-64 p-margin-mobile md:p-gutter max-w-container-max mx-auto w-full pb-16">
        <div className="my-6">
          <h1 className="font-display text-3xl font-bold text-on-surface mb-1">Profile & Concierge Settings</h1>
          <p className="text-on-surface-variant text-sm">Fine-tune your personal style parameters and AI recommendations.</p>
        </div>

        {savedNotice && (
          <div className="mb-6 bg-primary text-on-primary p-3 rounded-xl text-xs font-semibold shadow text-center">
            Profile settings updated successfully!
          </div>
        )}

        <div className="bg-white rounded-[24px] shadow-soft border border-surface-container p-6 max-w-3xl">
          <div className="flex items-center gap-4 border-b border-surface-variant pb-6 mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLVbnVHc9o_mufdVNT4NZhXysPI4IrB3KRBcTAlmsrYYQWlB_Dg0rU5SEp3tU6_thCRNqSdvlAe7cPKBZ6Qo0qNVOCJOgXaI3LVetsN1R_QWW0A0Gi5mREAPSe3971PIRn1vYMJQVNZC16cYBfaKDyvZJbZzR4mLjkEePigDAqe66r0-ZmFfrDHnBNFg7C6dGgB8RGZUTJ1auiwE4y0PxzadogrvsWbi-PNsQX0gwTcnYyPI7TUdqYXg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-primary">{name}</h2>
              <p className="text-xs text-on-surface-variant font-medium">Style Persona: <span className="text-primary">{persona}</span></p>
              <span className="inline-block mt-2 px-3 py-1 bg-surface-container-high rounded-full text-[11px] font-medium text-on-surface-variant">
                Premium Member
              </span>
            </div>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase font-semibold text-on-surface-variant mb-1">Display Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-surface-container-lowest border border-surface-variant rounded-xl py-2.5 px-4 text-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-semibold text-on-surface-variant mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-surface-container-lowest border border-surface-variant rounded-xl py-2.5 px-4 text-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase font-semibold text-on-surface-variant mb-1">Primary Style Aesthetic</label>
              <select
                value={persona}
                onChange={(e) => setPersona(e.target.value)}
                className="w-full bg-surface-container-lowest border border-surface-variant rounded-xl py-2.5 px-4 text-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="Korean Minimalist">Korean Minimalist</option>
                <option value="Soft Luxury">Soft Luxury</option>
                <option value="Classic Elegance">Classic Elegance</option>
                <option value="Streetwear Minimal">Streetwear Minimal</option>
                <option value="Preppy Tailored">Preppy Tailored</option>
              </select>
            </div>

            <div className="border-t border-surface-variant pt-4">
              <h3 className="font-display text-base font-semibold text-primary mb-3">AI Recommendations Preferences</h3>
              <div className="space-y-3">
                <label className="flex items-center justify-between text-xs text-on-surface cursor-pointer">
                  <span>Include daily local weather in outfit recommendations</span>
                  <input type="checkbox" defaultChecked className="rounded text-primary focus:ring-primary" />
                </label>
                <label className="flex items-center justify-between text-xs text-on-surface cursor-pointer">
                  <span>Suggest capsule wardrobe pairing items</span>
                  <input type="checkbox" defaultChecked className="rounded text-primary focus:ring-primary" />
                </label>
                <label className="flex items-center justify-between text-xs text-on-surface cursor-pointer">
                  <span>Notify for new boutique arrivals</span>
                  <input type="checkbox" defaultChecked className="rounded text-primary focus:ring-primary" />
                </label>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-primary text-on-primary font-medium text-sm hover:bg-primary-container transition-colors shadow-sm"
              >
                Save Preferences
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
