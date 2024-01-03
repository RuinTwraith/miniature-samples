import React, { useState, useRef } from 'react';

export default function Timer(props) {
  const timeIntervalId = useRef(null);
  const [time, setTime] = useState(0);
  const [isTimerRunning, setTimerRunning] = useState(false);

  const handleStart = () => {
    setTimerRunning(true);
    timeIntervalId.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };
  const handlePause = () => {
    setTimerRunning(false);
    clearInterval(timeIntervalId.current);
  };
  const handleStop = () => {
    handlePause();
    setTime(0);
  };
  const getFormattedTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    let formattedSeconds = ('0' + seconds).slice(-2);
    let formattedMinutes = ('0' + minutes).slice(-2);

    return `${formattedMinutes} : ${formattedSeconds}`;
  };

  return (
    <div className="w-full">
      <h2 className="font-bold">Timer</h2>
      <div className="flex flex-col gap-4 items-center">
        <p className="font-bold text-2xl">{getFormattedTime(time)}</p>
        <div className="flex">
          {!isTimerRunning ? (
            <button
              onClick={handleStart}
              className="border px-3 py-1 mr-3 rounded-lg bg-emerald-400"
            >
              {time > 0 ? 'Resume' : 'Start'}
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="border px-3 py-1 mr-3 rounded-lg bg-orange-400"
            >
              Pause
            </button>
          )}
          <button
            onClick={handleStop}
            className="border px-3 py-1 rounded-lg bg-red-400"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
