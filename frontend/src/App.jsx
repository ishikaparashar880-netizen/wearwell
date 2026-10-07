import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import ToastContainer from './components/ToastContainer';

import LoginSignUp from './pages/LoginSignUp';
import AIRecommendations from './pages/AIRecommendations';
import MyWardrobe from './pages/MyWardrobe';
import OutfitBuilder from './pages/OutfitBuilder';
import SavedFavorites from './pages/SavedFavorites';
import ProfileSettings from './pages/ProfileSettings';
import StylePreferences from './pages/StylePreferences';
import SereneBoutique from './pages/SereneBoutique';

export default function App() {
  return (
    <AppProvider>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<AIRecommendations />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/wardrobe" element={<MyWardrobe />} />
        <Route path="/builder" element={<OutfitBuilder />} />
        <Route path="/favorites" element={<SavedFavorites />} />
        <Route path="/profile" element={<ProfileSettings />} />
        <Route path="/quiz" element={<StylePreferences />} />
        <Route path="/boutiques" element={<SereneBoutique />} />
      </Routes>
    </AppProvider>
  );
}
