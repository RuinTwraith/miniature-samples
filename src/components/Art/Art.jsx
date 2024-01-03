import React, { useState } from 'react';
import './Art.css';

export default function Art(props) {
  const { title, description } = props;

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="box-parent m-auto mt-14 flex">
      <div className="box box-1">
        <p>1</p>
      </div>
      <div className="box box-2">
        <p>2</p>
      </div>
      <div className="box box-3">
        <p>3</p>
      </div>
      <div className="box box-4">
        <p>4</p>
      </div>
      <div className="box box-5">
        <p>5</p>
      </div>
      <div className="box box-6">
        <p>6</p>
      </div>
      <div className="box box-7">
        <p>7</p>
      </div>
    </div>
  );
}
