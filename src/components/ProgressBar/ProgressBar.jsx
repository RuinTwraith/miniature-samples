import React, { useState } from 'react';

export default function Accordion(props) {
  const { title, description } = props;

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full">
      <div
        className="header w-full flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <h3>{title}</h3> <button>{open ? '△' : '▽'}</button>
      </div>
      {open && <p>{description}</p>}
    </div>
  );
}
