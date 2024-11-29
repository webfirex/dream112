'use client';

import { useEffect, useState } from 'react';

const Countdown = () => {
  const initialTime = (1 * 24 * 60 * 60 + 17 * 60 * 60 + 30 * 60) * 1000; // 1 day, 17 hours, and 30 minutes in milliseconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1000) return initialTime; // Reset timer
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [initialTime]);

  const formatTime = (time: number) => {
    const totalSeconds = Math.floor(time / 1000);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className='flex flex-col'>
      <div className="flex justify-center gap-4 scale-[0.85]">
        {/* <div className="text-center">
          <div className="bg-black text-white font-bold text-2xl rounded-md p-2">{String(days).padStart(2, '0')}</div>
          <p className="text-xs mt-1 text-white">Days</p>
        </div> */}
        <div className="text-center">
          <div className="bg-black text-white font-bold text-2xl rounded-md p-2">{String(hours).padStart(2, '0')}</div>
          <p className="text-xs mt-1 text-white">Hours</p>
        </div>
        <div className="text-center">
          <div className="bg-black text-white font-bold text-2xl rounded-md p-2">{String(minutes).padStart(2, '0')}</div>
          <p className="text-xs mt-1 text-white">Minutes</p>
        </div>
        <div className="text-center">
          <div className="bg-black text-white font-bold text-2xl rounded-md p-2">{String(seconds).padStart(2, '0')}</div>
          <p className="text-xs mt-1 text-white">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
