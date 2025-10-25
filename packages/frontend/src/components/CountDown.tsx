import type { FC } from "react";
import { useState, useEffect } from "react";

interface CountDownProps {
  h: number;
  m: number;
  s: number;
}

interface TimeState {
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountDown: FC<CountDownProps> = ({ h, m, s }) => {
  const [time, setTime] = useState<TimeState>({
    hours: h,
    minutes: m,
    seconds: s,
  });

  useEffect(() => {
    if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
      return;
    }

    const timer = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;

        seconds--;

        if (seconds < 0) {
          seconds = 59;
          minutes--;

          if (minutes < 0) {
            minutes = 59;
            hours--;

            if (hours < 0) {
              hours = 0;
              minutes = 0;
              seconds = 0;
            }
          }
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <h6 className='text-white'>
      {time.hours < 10 ? "0" + time.hours : time.hours}h :{" "}
      {time.minutes < 10 ? "0" + time.minutes : time.minutes}m :{" "}
      {time.seconds < 10 ? "0" + time.seconds : time.seconds}s
    </h6>
  );
};
