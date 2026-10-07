import React from 'react';
import { useApp } from '../context/AppContext';

export default function ToastContainer() {
  const { toasts, removeToast } = useApp();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed top-5 right-5 z-[9999] flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-start justify-between p-4 bg-[#141414] border border-[#D4AF37]/50 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.2)] animate-slide-up"
        >
          <div className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA771C] flex items-center justify-center text-black shrink-0 font-bold shadow">
              <span className="material-symbols-outlined text-lg">auto_awesome</span>
            </div>
            <div>
              <h4 className="font-display text-sm font-semibold text-[#FFF0C2]">{toast.title}</h4>
              {toast.message && <p className="text-xs text-gray-300 mt-0.5">{toast.message}</p>}
            </div>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-gray-400 hover:text-[#D4AF37] transition-colors ml-2 p-1"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      ))}
    </div>
  );
}
