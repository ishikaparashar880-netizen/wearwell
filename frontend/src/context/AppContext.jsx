import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

// Reliable Unsplash Fashion Images (30+ unique URLs)
export const FASHION_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop';

export const SAMPLE_WARDROBE_ITEMS = [
  {
    id: 'w1',
    title: 'Minimalist Charcoal Wool Coat',
    category: 'Outerwear',
    style: 'Korean Minimal',
    color: 'Charcoal',
    imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop',
    isFavorite: true,
  },
  {
    id: 'w2',
    title: 'Silk Satin Evening Slip Dress',
    category: 'Dresses',
    style: 'Soft Luxury',
    color: 'Champagne Gold',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    isFavorite: true,
  },
  {
    id: 'w3',
    title: 'Oversized Cashmere Turtleneck',
    category: 'Tops',
    style: 'Korean Minimal',
    color: 'Ivory',
    imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop',
    isFavorite: false,
  },
  {
    id: 'w4',
    title: 'Tailored Wide-Leg Trousers',
    category: 'Bottoms',
    style: 'Monochrome Luxe',
    color: 'Jet Black',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
    isFavorite: true,
  },
  {
    id: 'w5',
    title: 'Pointed Stiletto Leather Boots',
    category: 'Shoes',
    style: 'Soft Luxury',
    color: 'Black',
    imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop',
    isFavorite: false,
  },
  {
    id: 'w6',
    title: 'Gold Accent Leather Tote',
    category: 'Accessories',
    style: 'Classic Elegance',
    color: 'Cognac Gold',
    imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop',
    isFavorite: true,
  },
  {
    id: 'w7',
    title: 'Structured Double-Breasted Blazer',
    category: 'Tops',
    style: 'Modern Preppy',
    color: 'Midnight Navy',
    imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop',
    isFavorite: false,
  },
  {
    id: 'w8',
    title: 'High-Waisted Vintage Straight Jeans',
    category: 'Bottoms',
    style: 'Smart Casual',
    color: 'Vintage Wash',
    imageUrl: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop',
    isFavorite: false,
  },
  {
    id: 'w9',
    title: 'Royal Banarasi Silk Embroidered Sari',
    category: 'Dresses',
    style: 'Ethnic Wear',
    color: 'Deep Crimson & Gold',
    imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop',
    isFavorite: true,
  },
  {
    id: 'w10',
    title: 'Minimalist Gold Chronograph Watch',
    category: 'Accessories',
    style: 'Monochrome Luxe',
    color: 'Gold',
    imageUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop',
    isFavorite: true,
  },
  {
    id: 'w11',
    title: 'Designer Retro Leather Sneakers',
    category: 'Shoes',
    style: 'Streetwear Minimal',
    color: 'Off-White & Gold',
    imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop',
    isFavorite: false,
  },
  {
    id: 'w12',
    title: 'Handcrafted Quilted Leather Clutch',
    category: 'Accessories',
    style: 'Soft Luxury',
    color: 'Black & Gold',
    imageUrl: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=800&auto=format&fit=crop',
    isFavorite: false,
  },
];

export const INITIAL_AI_OUTFITS = [
  {
    id: 'o1',
    title: 'Parisian Midnight Elegance',
    description: 'Chic layered wool coat over silk slip dress, paired with pointed stiletto boots and gold accents.',
    styleTag: 'High Couture',
    weather: '18°C Sunny',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop',
    isFavorite: true,
    items: [
      { id: 'w1', title: 'Minimalist Charcoal Wool Coat', category: 'Outerwear', imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop' },
      { id: 'w2', title: 'Silk Satin Evening Slip Dress', category: 'Dresses', imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop' },
      { id: 'w5', title: 'Pointed Stiletto Leather Boots', category: 'Shoes', imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop' },
    ]
  },
  {
    id: 'o2',
    title: 'Seoul Minimalist Luxe',
    description: 'Oversized ivory knit tucked into tailored wide trousers with retro leather sneakers.',
    styleTag: 'Korean Minimal',
    weather: '21°C Crisp',
    imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop',
    isFavorite: true,
    items: [
      { id: 'w3', title: 'Oversized Cashmere Turtleneck', category: 'Tops', imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop' },
      { id: 'w4', title: 'Tailored Wide-Leg Trousers', category: 'Bottoms', imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop' },
      { id: 'w11', title: 'Designer Retro Leather Sneakers', category: 'Shoes', imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop' },
    ]
  },
  {
    id: 'o3',
    title: 'Milanese Executive Power Ensemble',
    description: 'Structured navy blazer with high-waisted denim, gold timepiece and cognac handbag.',
    styleTag: 'Executive Chic',
    weather: '23°C Pleasant',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
    isFavorite: true,
    items: [
      { id: 'w7', title: 'Structured Double-Breasted Blazer', category: 'Tops', imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop' },
      { id: 'w8', title: 'High-Waisted Vintage Jeans', category: 'Bottoms', imageUrl: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop' },
      { id: 'w10', title: 'Minimalist Gold Watch', category: 'Accessories', imageUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop' },
    ]
  },
  {
    id: 'o4',
    title: 'Monochrome Noir Evening Statement',
    description: 'All-black tailored silhouette anchored with quilted gold-chain clutch and stiletto heels.',
    styleTag: 'Dark Luxury',
    weather: '16°C Breeze',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
    isFavorite: true,
    items: [
      { id: 'w1', title: 'Charcoal Wool Coat', category: 'Outerwear', imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop' },
      { id: 'w12', title: 'Quilted Leather Clutch', category: 'Accessories', imageUrl: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=800&auto=format&fit=crop' },
      { id: 'w5', title: 'Stiletto Leather Boots', category: 'Shoes', imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop' },
    ]
  },
  {
    id: 'o5',
    title: 'Royal Gold & Silk Gala Attire',
    description: 'Intricately embroidered Banarasi silk ensemble with statement gold accessories.',
    styleTag: 'Ethnic Glamour',
    weather: '24°C Warm',
    imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop',
    isFavorite: false,
    items: [
      { id: 'w9', title: 'Royal Banarasi Silk Sari', category: 'Dresses', imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop' },
      { id: 'w10', title: 'Minimalist Gold Chronograph', category: 'Accessories', imageUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop' },
    ]
  },
  {
    id: 'o6',
    title: 'Tokyo Streetwear Architecture',
    description: 'Asymmetric leather jacket paired with wide trousers, chunky sneakers and gold shades.',
    styleTag: 'Avant-Garde',
    weather: '19°C Mild',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
    isFavorite: false,
    items: [
      { id: 'w7', title: 'Structured Blazer', category: 'Tops', imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop' },
      { id: 'w11', title: 'Retro Leather Sneakers', category: 'Shoes', imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop' },
    ]
  },
  {
    id: 'o7',
    title: 'Cognac & Cashmere Autumn Layering',
    description: 'Luxurious cashmere turtleneck wrapped in structured wool, completed with gold tote.',
    styleTag: 'Soft Luxury',
    weather: '15°C Cool',
    imageUrl: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop',
    isFavorite: false,
    items: [
      { id: 'w3', title: 'Cashmere Turtleneck', category: 'Tops', imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop' },
      { id: 'w6', title: 'Gold Accent Leather Tote', category: 'Accessories', imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop' },
    ]
  },
  {
    id: 'o8',
    title: 'Beverly Hills Sunset Cocktail',
    description: 'Champagne silk slip dress with gold timepiece and leather clutch for dusk soirees.',
    styleTag: 'Resort Glam',
    weather: '26°C Clear',
    imageUrl: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=800&auto=format&fit=crop',
    isFavorite: false,
    items: [
      { id: 'w2', title: 'Silk Satin Evening Slip Dress', category: 'Dresses', imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop' },
      { id: 'w12', title: 'Quilted Leather Clutch', category: 'Accessories', imageUrl: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=800&auto=format&fit=crop' },
    ]
  }
];

export const AppProvider = ({ children }) => {
  const [wardrobe, setWardrobe] = useState(() => {
    const saved = localStorage.getItem('wearwell_wardrobe');
    return saved ? JSON.parse(saved) : SAMPLE_WARDROBE_ITEMS;
  });

  const [aiOutfits, setAiOutfits] = useState(() => {
    const saved = localStorage.getItem('wearwell_outfits');
    return saved ? JSON.parse(saved) : INITIAL_AI_OUTFITS;
  });

  const [userProfile, setUserProfile] = useState(() => {
    const saved = localStorage.getItem('wearwell_profile');
    return saved
      ? JSON.parse(saved)
      : {
          name: 'Sophia Chen',
          email: 'sophia.chen@vogue-luxe.com',
          persona: 'Korean Minimalist & Soft Luxury',
          photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
          weatherAlerts: true,
          aiSuggestions: true,
          boutiqueAlerts: true,
        };
  });

  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    localStorage.setItem('wearwell_wardrobe', JSON.stringify(wardrobe));
  }, [wardrobe]);

  useEffect(() => {
    localStorage.setItem('wearwell_outfits', JSON.stringify(aiOutfits));
  }, [aiOutfits]);

  useEffect(() => {
    localStorage.setItem('wearwell_profile', JSON.stringify(userProfile));
  }, [userProfile]);

  const addToast = (title, message = '') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, title, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleFavoriteOutfit = (id) => {
    let nextStatus = false;
    setAiOutfits((prev) =>
      prev.map((o) => {
        if (o.id === id) {
          nextStatus = !o.isFavorite;
          return { ...o, isFavorite: nextStatus };
        }
        return o;
      })
    );
    addToast(
      nextStatus ? 'Added to Favorites' : 'Removed from Favorites',
      nextStatus ? 'Look saved to your dark luxury collection.' : 'Look removed from your favorites.'
    );
  };

  const toggleFavoriteItem = (id) => {
    let nextStatus = false;
    setWardrobe((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          nextStatus = !item.isFavorite;
          return { ...item, isFavorite: nextStatus };
        }
        return item;
      })
    );
    addToast(
      nextStatus ? 'Item Favorited' : 'Item Unfavorited',
      nextStatus ? 'Item saved to your favorite staples.' : 'Item removed from favorites.'
    );
  };

  const addWardrobeItem = (newItem) => {
    const itemWithId = {
      id: 'w_' + Date.now(),
      isFavorite: false,
      ...newItem,
    };
    setWardrobe((prev) => [itemWithId, ...prev]);
    addToast('Wardrobe Item Added', `"${newItem.title}" has been added to your closet.`);
  };

  const saveBuiltOutfit = (outfit) => {
    const newOutfit = {
      id: 'o_' + Date.now(),
      isFavorite: true,
      ...outfit,
    };
    setAiOutfits((prev) => [newOutfit, ...prev]);
    addToast('Outfit Saved to Favorites!', `"${outfit.title}" is now available in your looks library.`);
  };

  const updateProfile = (updatedData) => {
    setUserProfile((prev) => ({ ...prev, ...updatedData }));
    addToast('Profile Updated', 'Your style concierge parameters have been saved.');
  };

  return (
    <AppContext.Provider
      value={{
        wardrobe,
        aiOutfits,
        userProfile,
        toasts,
        addToast,
        removeToast,
        toggleFavoriteOutfit,
        toggleFavoriteItem,
        addWardrobeItem,
        saveBuiltOutfit,
        updateProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
