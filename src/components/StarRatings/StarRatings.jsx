import React, { useState } from 'react';
import './style';

export default function StarRatings() {
  const [ratings, setRatings] = useState(0);
  const [hoverRatings, setHoverRatings] = useState(0);

  const handleClick = (value) => {
    setRatings(value);
  };
  const handleMouseEnter = (value) => {
    setHoverRatings(value);
  };
  const handleMouseLeave = (value) => {
    setHoverRatings(0);
  };

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap-2">
      {stars.map((item) => (
        <button
          className={`p-2 border rounded-lg text-xl ${
            item <= hoverRatings && 'bg-yellow-100'
          }`}
          onClick={() => handleClick(item)}
          onMouseEnter={() => handleMouseEnter(item)}
          onMouseLeave={() => handleMouseLeave(item)}
        >
          <div
            className={`button-text ${item <= ratings && '!bg-yellow-500'}`}
          ></div>
        </button>
      ))}
    </div>
  );
}
