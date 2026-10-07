import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopHeader from '../components/TopHeader';
import FashionImage from '../components/FashionImage';
import { useApp } from '../context/AppContext';

export default function StylePreferences() {
  const navigate = useNavigate();
  const { updateProfile, addToast } = useApp();
  const [currentStep, setCurrentStep] = useState(0);

  const [answers, setAnswers] = useState({
    aesthetic: 'Korean Minimalist',
    palette: 'Noir, Gold & Champagne',
    occasion: 'Executive & Dusk Soirees',
    silhouette: 'Oversized & Architectural',
    accessory: 'Gold Chronograph Watch',
  });

  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 'aesthetic',
      title: '1. What is your primary aesthetic DNA?',
      subtitle: 'Select the core fashion philosophy that defines your personal wardrobe.',
      options: [
        { label: 'Korean Minimalist', desc: 'Clean fluid silhouettes, oversized trenches, soft neutral tones.', icon: 'checkroom' },
        { label: 'Soft Luxury', desc: 'Fine cashmere knits, silk slip blouses, tailored wool pants.', icon: 'diamond' },
        { label: 'Monochrome Luxe', desc: 'Sleek dark palettes, architectural leather pieces, bold gold highlights.', icon: 'palette' },
        { label: 'Ethnic Glamour', desc: 'Rich Banarasi silks, gold thread embroidery, royal heritage drapes.', icon: 'auto_awesome' },
      ],
    },
    {
      id: 'palette',
      title: '2. Which color palette defines your style?',
      subtitle: 'Choose your signature color tones for daily and evening curations.',
      options: [
        { label: 'Noir, Gold & Champagne', desc: 'Jet black, warm champagne silk, gold hardware accents.', icon: 'palette' },
        { label: 'Ivory, Cream & Beige', desc: 'Soft organic neutrals, cashmere creams, oat tones.', icon: 'brightness_6' },
        { label: 'Deep Crimson & Emerald', desc: 'Rich jewel tones, burgundy velvet, midnight emerald.', icon: 'color_lens' },
        { label: 'Charcoal & Slate Navy', desc: 'Cool slate wools, charcoal tailoring, muted navy.', icon: 'dark_mode' },
      ],
    },
    {
      id: 'occasion',
      title: '3. What is your primary occasion focus?',
      subtitle: 'Tell us where you spend most of your style moments.',
      options: [
        { label: 'Executive & Dusk Soirees', desc: 'Tailored blazers, sleek trousers, cocktail slip dresses.', icon: 'business_center' },
        { label: 'High Street Casual Chic', desc: 'Oversized knits, designer sneakers, vintage washed denim.', icon: 'directions_walk' },
        { label: 'Gala & Red Carpet Elegance', desc: 'Haute couture gowns, silk saris, statement jewelry.', icon: 'grade' },
        { label: 'Weekend Brunch & Travel', desc: 'Relaxed linens, leather tote bags, stylish shades.', icon: 'flight_takeoff' },
      ],
    },
    {
      id: 'silhouette',
      title: '4. Preferred silhouette & tailoring fit?',
      subtitle: 'How do you like your garments to fall on your body?',
      options: [
        { label: 'Oversized & Architectural', desc: 'Dropped shoulders, wide-leg trousers, fluid drapes.', icon: 'crop_square' },
        { label: 'Structured & Tailored', desc: 'Defined shoulders, nipped waists, sharp lapels.', icon: 'square' },
        { label: 'Fluid & Flowing Silk', desc: 'Unstructured silk satin, gentle bias cuts.', icon: 'waves' },
        { label: 'Form-Fitting & Sleek', desc: 'Body-skimming silhouettes, ribbed knits.', icon: 'accessibility' },
      ],
    },
    {
      id: 'accessory',
      title: '5. What is your go-to statement accessory?',
      subtitle: 'The finishing luxury touch that completes your look.',
      options: [
        { label: 'Gold Chronograph Watch', desc: 'Classic timepiece with polished gold link band.', icon: 'watch' },
        { label: 'Quilted Leather Clutch', desc: 'Soft calfskin handbag with gold chain strap.', icon: 'local_mall' },
        { label: 'Pointed Stiletto Boots', desc: 'High-shine leather boots with gold heel caps.', icon: 'footprint' },
        { label: 'Gold Statement Shades', desc: 'Retro tinted sunglasses with gold rim frames.', icon: 'visibility' },
      ],
    },
  ];

  const handleSelectOption = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      updateProfile({ persona: `${answers.aesthetic} DNA` });
      addToast('Style Quiz Completed!', `Your persona is set to: ${answers.aesthetic}`);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const currentQ = questions[currentStep];
  const progressPercent = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="bg-[#0a0a0a] text-white font-body min-h-screen">
      <Sidebar />

      <main className="md:ml-64 p-4 md:p-8 max-w-[1200px] mx-auto w-full pb-20">
        <TopHeader />

        {/* Page Title */}
        <div className="mb-8">
          <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">AI Onboarding</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gold-gradient mt-1">Style DNA Quiz</h1>
          <p className="text-gray-400 text-xs md:text-sm mt-1">
            Answer 5 quick aesthetic questions to train your personal AI Concierge.
          </p>
        </div>

        {!isCompleted ? (
          <div className="card-dark p-6 md:p-10 relative overflow-hidden animate-fade-in">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
                <span className="font-semibold text-[#D4AF37]">
                  Question {currentStep + 1} of {questions.length}
                </span>
                <span>{Math.round(progressPercent)}% Completed</span>
              </div>
              <div className="w-full h-2 bg-[#0d0d0d] rounded-full overflow-hidden border border-[#262626]">
                <div
                  className="h-full bg-gradient-to-r from-[#D4AF37] to-[#AA771C] transition-all duration-500 shadow-gold-glow"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Current Question Header */}
            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold text-white mb-2">{currentQ.title}</h2>
              <p className="text-xs text-gray-400">{currentQ.subtitle}</p>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {currentQ.options.map((opt) => {
                const isSelected = answers[currentQ.id] === opt.label;
                return (
                  <div
                    key={opt.label}
                    onClick={() => handleSelectOption(currentQ.id, opt.label)}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 flex items-start gap-4 ${
                      isSelected
                        ? 'border-[#D4AF37] bg-[#1e1a10] shadow-gold-glow'
                        : 'border-[#262626] bg-[#0d0d0d] hover:border-gray-600 hover:bg-[#141414]'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-[#D4AF37] text-black font-bold' : 'bg-[#181818] text-[#D4AF37]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl">{opt.icon}</span>
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-display text-base font-bold text-white">{opt.label}</h3>
                        {isSelected && (
                          <span className="material-symbols-outlined text-[#D4AF37] text-lg">check_circle</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">{opt.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center border-t border-[#262626] pt-6">
              <button
                onClick={handlePrev}
                disabled={currentStep === 0}
                className={`px-5 py-2.5 rounded-xl border border-[#262626] text-xs font-semibold ${
                  currentStep === 0 ? 'opacity-40 cursor-not-allowed text-gray-600' : 'text-gray-300 hover:text-white'
                }`}
              >
                &larr; Previous
              </button>

              <button
                onClick={handleNext}
                className="btn-gold px-8 py-3 rounded-xl text-xs uppercase font-bold tracking-wider shadow-gold-glow flex items-center gap-2"
              >
                <span>{currentStep === questions.length - 1 ? 'Finish & See Results' : 'Next Question'}</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        ) : (
          /* Quiz Results Card */
          <div className="card-dark p-8 md:p-12 relative overflow-hidden text-center animate-slide-up">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA771C] flex items-center justify-center text-black font-bold mx-auto mb-4 shadow-gold-glow-lg">
              <span className="material-symbols-outlined text-3xl">auto_awesome</span>
            </div>

            <span className="text-xs uppercase font-bold text-[#D4AF37] tracking-widest">
              Style Archetype Generated
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-2 mb-3">
              {answers.aesthetic} & {answers.palette.split(',')[0]}
            </h2>
            <p className="text-xs md:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed mb-8">
              Your profile is now calibrated for high-end minimal tailoring, {answers.silhouette.toLowerCase()} fits, paired with {answers.accessory.toLowerCase()}.
            </p>

            {/* Matching Curated Outfits Preview */}
            <div className="mb-10 text-left">
              <h3 className="font-display text-lg font-bold text-[#FFF0C2] mb-4">Recommended Outfits for Your Archetype:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="card-dark p-3 bg-[#0d0d0d] flex items-center gap-3 border-[#262626]">
                  <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                    <FashionImage src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop" alt="Look 1" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs font-bold text-white">Parisian Trench Look</h4>
                    <span className="text-[10px] text-[#D4AF37]">98% Match</span>
                  </div>
                </div>

                <div className="card-dark p-3 bg-[#0d0d0d] flex items-center gap-3 border-[#262626]">
                  <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                    <FashionImage src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" alt="Look 2" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs font-bold text-white">Champagne Silk Slip</h4>
                    <span className="text-[10px] text-[#D4AF37]">96% Match</span>
                  </div>
                </div>

                <div className="card-dark p-3 bg-[#0d0d0d] flex items-center gap-3 border-[#262626]">
                  <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                    <FashionImage src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop" alt="Look 3" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs font-bold text-white">Tailored Wide Trouser</h4>
                    <span className="text-[10px] text-[#D4AF37]">95% Match</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="btn-gold px-8 py-3 rounded-xl text-xs uppercase font-bold tracking-wider shadow-gold-glow"
              >
                View Recommendations
              </button>
              <button
                onClick={() => {
                  setIsCompleted(false);
                  setCurrentStep(0);
                }}
                className="px-6 py-3 rounded-xl border border-[#262626] text-xs font-semibold text-gray-300 hover:text-white"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
