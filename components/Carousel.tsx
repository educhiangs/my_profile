// components/Carousel.tsx

import Image from 'next/image';
import React from 'react';

interface Image {
  src: string;
  alt: string;
}

interface CarouselProps {
  images: Image[];
  altText?: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, altText }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  return (
    <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-inner">
      <button onClick={handlePrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 text-violet-600 hover:text-white transition-colors">
        &larr;
      </button>
      <Image
        src={images[currentIndex].src}
        alt={`${altText || 'Product'} ${currentIndex + 1}`}
        fill
        priority
        className="object-cover hover:scale-105 transition-transform duration-500"
      />
      <button onClick={handleNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 text-violet-600 hover:text-white transition-colors">
        &rarr;
      </button>
    </div>
  );
};

export default Carousel;