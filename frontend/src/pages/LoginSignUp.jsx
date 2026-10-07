import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FashionImage from '../components/FashionImage';

export default function LoginSignUp() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row bg-[#141414] border border-[#D4AF37]/40 rounded-3xl shadow-2xl overflow-hidden min-h-[600px] animate-fade-in">
        {/* Left Side: Dark Luxury Editorial Image */}
        <div className="hidden md:block md:w-1/2 relative min-h-[550px] bg-[#0d0d0d]">
          <FashionImage
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop"
            alt="Dark Luxury Fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-10 left-8 right-8 z-10">
            <span className="text-[10px] bg-[#D4AF37] text-black font-bold px-3 py-0.5 rounded-full uppercase tracking-widest">
              Haute Couture AI Concierge
            </span>
            <h2 className="font-display text-3xl font-bold text-white mt-2 drop-shadow-md">
              Curate Your Style DNA
            </h2>
            <p className="text-xs text-gray-300 mt-2 max-w-sm leading-relaxed drop-shadow">
              Step into your digital luxury closet. Discover bespoke outfit curations tailored to your taste and local weather.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12">
          <div className="mb-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] flex items-center justify-center text-black font-bold font-display text-xl shadow-gold-glow">
                W
              </div>
              <h1 className="font-display text-3xl font-bold text-gold-gradient tracking-wider">WEARWELL</h1>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              {isSignUp ? 'Create your personal concierge account.' : 'Welcome back to your haute couture portal.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto md:mx-0">
            {isSignUp && (
              <div>
                <label className="block text-xs uppercase font-bold text-[#D4AF37] mb-1">Full Name</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                    person
                  </span>
                  <input
                    className="w-full bg-[#0d0d0d] border border-[#262626] focus:border-[#D4AF37] rounded-xl py-3 pl-10 pr-4 text-xs text-white focus:outline-none"
                    placeholder="Sophia Chen"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs uppercase font-bold text-[#D4AF37] mb-1">Email Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                  mail
                </span>
                <input
                  className="w-full bg-[#0d0d0d] border border-[#262626] focus:border-[#D4AF37] rounded-xl py-3 pl-10 pr-4 text-xs text-white focus:outline-none"
                  placeholder="sophia@example.com"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase font-bold text-[#D4AF37] mb-1">Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                  lock
                </span>
                <input
                  className="w-full bg-[#0d0d0d] border border-[#262626] focus:border-[#D4AF37] rounded-xl py-3 pl-10 pr-4 text-xs text-white focus:outline-none"
                  placeholder="••••••••"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-gold w-full py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-bold shadow-gold-glow mt-4"
            >
              {isSignUp ? 'Create Concierge Account' : 'Sign In'}
            </button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#262626]" />
              </div>
              <div className="relative flex justify-center text-[10px] uppercase font-bold text-gray-400">
                <span className="px-3 bg-[#141414] text-[#D4AF37]">Or access demo concierge</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate('/')}
              className="w-full flex justify-center items-center py-2.5 px-4 border border-[#262626] rounded-xl bg-[#0d0d0d] text-xs font-semibold text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-colors"
            >
              Enter as Guest Member &rarr;
            </button>
          </form>

          <p className="mt-6 text-center md:text-left text-xs text-gray-400">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-[#D4AF37] hover:underline font-bold ml-1"
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
