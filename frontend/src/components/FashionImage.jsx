import React, { useState } from 'react';
import { FASHION_FALLBACK_IMAGE } from '../context/AppContext';

export default function FashionImage({ src, alt, className, style }) {
  const [imgSrc, setImgSrc] = useState(src || FASHION_FALLBACK_IMAGE);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(FASHION_FALLBACK_IMAGE);
    }
  };

  return (
    <img
      src={imgSrc || FASHION_FALLBACK_IMAGE}
      alt={alt || 'Fashion item'}
      onError={handleError}
      className={className}
      style={style}
      loading="lazy"
    />
  );
}
