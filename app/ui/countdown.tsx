import { useEffect, useState } from "react";
import TimerElement from "./timerElement";

export default function CountDown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "December, 31, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);
    return (
        <>
          <div className={`text-3xl text-white md:text-lg md:leading-normal font-bold`} style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <p style={{
                marginTop: '1rem',
                marginBottom: '1rem',
            }}>
                FALTAN
            </p>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: '1rem',
            }}>
                <TimerElement time={days} text='DÍAS'/>
                <TimerElement time={hours} text='HRS'/>
                <TimerElement time={minutes} text='MIN'/>
                <TimerElement time={seconds} text='SEG'/>
            </div>
          </div>
        </>
    );
};