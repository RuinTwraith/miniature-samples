import React, { useState, useRef, useEffect } from "react";

export default function ProgressBar(props) {
  const [value, setValue] = useState(25);

  const progressBarRef = useRef(null);

  useEffect(() => {
    progressBarRef.current.style.width = `${value}%`;
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
    // console.log(getComputedStyle(progressBarRef.current));
    progressBarRef.current.style.width = `${e.target.value}%`;
  };

  return (
    <div className="w-full">
      <label className="mr-2" htmlFor="progress">
        Progress
      </label>
      <input
        type="number"
        value={value}
        name="progress"
        id="progress"
        className="border p-2 rounded-lg w-20 mb-4"
        max={100}
        min={0}
        onChange={handleChange}
      />
      <div className="progress-bar__containter max-w-[200px] border border-slate-950 rounded">
        <div
          ref={progressBarRef}
          className="h-5 max-w-[200px] rounded"
          style={{
            backgroundImage:
              "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)",
          }}
        />
      </div>
    </div>
  );
}
