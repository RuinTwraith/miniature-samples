import React, { useState } from 'react';

export default function StarRatings() {
  const [selectedImage, setSelectedImage] = useState(0);

  const imgSrc = [
    'https://images.unsplash.com/photo-1641911363969-13272827e63d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1641735735134-763d2f9bedbb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1575296400075-f0ef1e248ede?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const handlePrev = () => {
    if (selectedImage != 0) {
      setSelectedImage((prevState) => prevState - 1);
    }
  };
  const handleNext = () => {
    if (selectedImage < imgSrc.length - 1) {
      setSelectedImage((prevState) => prevState + 1);
    }
  };

  return (
    <div className="w-full">
      <div className="flex gap-2">
        <button onClick={handlePrev}>⏮️</button>
        <img className="w-80 rounded-lg" src={imgSrc[selectedImage]} />
        <button onClick={handleNext}>⏭️</button>
      </div>
      {/* <ul className="flex gap-4 overflow-auto w-screen">
        {imgSrc.map((image) => (
          <li className="w-80 h-80 border">
            <img className="w-80 h-80 object-contain rounded-lg" src={image} />
          </li>
        ))}
      </ul> */}
    </div>
  );
}
