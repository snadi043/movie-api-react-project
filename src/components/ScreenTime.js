import React, { useState, useEffect } from 'react';
import '../styles/ScreenTime.css';

const ScreenTime = () => {
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });

  useEffect(() => {
    let isCancelled = false;

    const advanceTime = () => {
      setTimeout(() => {
        let nSeconds = time.seconds;
        let nMinutes = time.minutes;
        let nHours = time.hours;

        nSeconds++;

        if (nSeconds > 59) {
          nMinutes++;
          nSeconds = 0;
        }
        if (nMinutes > 59) {
          nHours++;
          nMinutes = 0;
        }
        if (nHours > 24) {
          nHours = 0;
        }

        !isCancelled && setTime({ seconds: nSeconds, minutes: nMinutes, hours: nHours });
      }, 1000);
    };
    advanceTime();

    return () => {
      isCancelled = true;
    };
  }, [time]);

  return (
    <div className='Timer'>
      <h1>
        {`
          ${time.hours < 10 ? '0' + time.hours : time.hours} :
          ${time.minutes < 10 ? '0' + time.minutes : time.minutes} :
          ${time.seconds < 10 ? '0' + time.seconds : time.seconds}
        `}
      </h1>
    </div>
  );
};

export default ScreenTime;