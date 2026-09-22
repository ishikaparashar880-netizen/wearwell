import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginSignUp() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate auth login and redirect to home reccs
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-secondary-fixed flex items-center justify-center p-gutter">
      <div className="w-full max-w-container-max flex flex-col md:flex-row bg-surface rounded-[24px] shadow-lg overflow-hidden min-h-[620px]">
        {/* Left Side: Editorial Image */}
        <div className="hidden md:block md:w-1/2 relative min-h-[550px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7moiK_rdPUZHWfwvKO32FzlHKlZPtBE71CiAUaG8YLT3jffLkPY13PbW0WzwkJRB2V-I4XGSzC0nL-KHXnqi5HXUs4OV5XqCbnvGJX2G1S7NbEDyG0j7BB3GIK6ZuK4tpJMYNjOSLio3tg77remyDldw9l9pEyZ0oZfCsRP9Y2HocbterPWzjoXGD5O_G9Qk_JHV92W4e6oGiGKHHMJ9u79s3j8jSC087UoNZut6kdzMwnxP3I12USw')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute bottom-stack-lg left-gutter text-on-primary p-6">
            <h2 className="font-display text-3xl font-semibold mb-2 text-white drop-shadow-md">Curate Your Style</h2>
            <p className="font-body text-sm text-white/90 max-w-sm drop-shadow-md">
              Welcome to your digital wardrobe concierge. Discover pieces that perfectly match your aesthetic.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-stack-lg bg-surface">
          <div className="mb-8 text-center md:text-left">
            <h1 className="font-display text-4xl text-primary font-bold mb-2">WearWell</h1>
            <p className="font-body text-on-surface-variant text-base">
              {isSignUp ? 'Create your personal concierge account.' : 'Welcome back. Please enter your details.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto md:mx-0">
            {isSignUp && (
              <div>
                <label className="block font-label text-xs uppercase tracking-wider text-on-surface-variant mb-1" htmlFor="name">
                  Full Name
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-lg">person</span>
                  <input
                    className="w-full bg-surface-container-lowest border border-surface-variant rounded-full py-3 pl-10 pr-4 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm"
                    id="name"
                    placeholder="Sophia Chen"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block font-label text-xs uppercase tracking-wider text-on-surface-variant mb-1" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-lg">mail</span>
                <input
                  className="w-full bg-surface-container-lowest border border-surface-variant rounded-full py-3 pl-10 pr-4 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm"
                  id="email"
                  placeholder="sophia@example.com"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block font-label text-xs uppercase tracking-wider text-on-surface-variant mb-1" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-lg">lock</span>
                <input
                  className="w-full bg-surface-container-lowest border border-surface-variant rounded-full py-3 pl-10 pr-4 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm"
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {!isSignUp && (
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center">
                  <input className="h-4 w-4 text-primary focus:ring-primary border-outline-variant rounded" id="remember-me" type="checkbox" />
                  <label className="ml-2 text-on-surface-variant" htmlFor="remember-me">Remember me</label>
                </div>
                <a className="text-primary hover:underline font-medium" href="#">Forgot password?</a>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 rounded-[16px] shadow-sm font-medium text-sm text-on-primary bg-primary hover:bg-primary-container focus:outline-none transition-all hover:scale-[1.01] active:scale-[0.99] mt-2"
              >
                {isSignUp ? 'Create Account' : 'Sign in'}
              </button>
            </div>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-surface-variant"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-surface text-on-surface-variant font-label text-[11px] uppercase tracking-wider">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="w-full flex justify-center items-center py-2.5 px-4 border border-surface-variant rounded-[16px] bg-surface-container-lowest text-xs font-medium text-on-surface hover:bg-surface-container-low transition-colors"
              >
                <span className="material-symbols-outlined mr-2 text-base text-primary">cruelty_free</span> Google
              </button>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="w-full flex justify-center items-center py-2.5 px-4 border border-surface-variant rounded-[16px] bg-surface-container-lowest text-xs font-medium text-on-surface hover:bg-surface-container-low transition-colors"
              >
                <span className="material-symbols-outlined mr-2 text-base text-primary">file_download</span> Apple
              </button>
            </div>
          </form>

          <p className="mt-6 text-center md:text-left text-sm text-on-surface-variant">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-primary hover:underline font-semibold ml-1"
            >
              {isSignUp ? 'Sign in' : 'Sign up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
