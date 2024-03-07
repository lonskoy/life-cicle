import {useState} from 'react';
import '../App.css';

export const Clock = ({ onRemove, id, country, timezone }: {onRemove: (id: number) => void , id: number, country: string, timezone: number} ) => {
    const [time, setTime] = useState(new Date(new Date().getTime() + timezone * 60 * 60 * 1000));

  setInterval(() => {
    setTime(new Date(new Date().getTime() + timezone * 60 * 60 * 1000));
  }, 1000);

  const hourStyle = {
    transform: `rotate(${(time.getHours() % 12) * 30 + time.getMinutes() * 0.5 + time.getSeconds() * (1/120)}deg)`,
  };

  const minuteStyle = {
    transform: `rotate(${time.getMinutes() * 6 + time.getSeconds() * 0.1}deg)`,
  };

  const secondStyle = {
    transform: `rotate(${time.getSeconds() * 6}deg)`,
  };

  return (
    <div className="clock">
        <button onClick={() => onRemove(id)} className="remove-button">X</button>
        <div className="country">{country}</div>
        <div className="hand hour" style={hourStyle}></div>
        <div className="hand minute" style={minuteStyle}></div>
        <div className="hand second" style={secondStyle}></div>
    </div>
    );
  }