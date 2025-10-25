import type { FC } from "react";
import { useState } from "react";

interface CountDownProps {
  h: number;
  m: number;
  s: number;
}

export const CountDown: FC<CountDownProps> = ({ h, m, s }) => {
  const [hours, setHour] = useState(h);
  const [minutes, setMinutes] = useState(m);
  const [seconds, setSeconds] = useState(s);

  const timer = setTimeout(() => {
    setSeconds(seconds - 1);
    if (seconds === 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    }
    if (minutes === 0 && seconds === 0) {
      setHour(hours - 1);
      setMinutes(59);
    }
  }, 1000);

  if (hours === 0 && minutes === 0 && seconds === 0) {
    clearTimeout(timer);
  }

  return (
    <h6 className='text-white'>
      {hours < 10 ? "0" + hours : hours}h :{" "}
      {minutes < 10 ? "0" + minutes : minutes}m :{" "}
      {seconds < 10 ? "0" + seconds : seconds}s
    </h6>
  );
};
