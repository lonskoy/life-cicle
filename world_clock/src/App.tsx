import { useState } from 'react';
import './App.css';
import { Clock } from './components/Clock';
import { TClock } from './types';

export default function App() {
  const [clocks, setClocks]= useState<TClock[]>([]);
  const [countryName, setCountryName] = useState('');
  const [timezone, setTimezone] = useState(0);

  const addClock = () => {
    const newClock = {
      id: Date.now(),
      country: countryName,
      timeZone: timezone 
    }
    const newId = Date.now(); // Генерируем уникальный идентификатор
      setClocks([...clocks, newClock]);
    console.log('Добавлены часы с id :' +  newId)
  };

  const removeClock = (id: number) => {
    setClocks(clocks.filter((clock) => clock.id !== id));
    console.log("Удалены часы с id: " + id)
  };

  return (
    <div className="App">
      <div className='fieldsBox'>      
        <input type="text" value={countryName} onChange={(e) => setCountryName(e.target.value)} placeholder="Страна" />
        <input type="number" value={timezone} onChange={(e) => setTimezone(parseInt(e.target.value))} placeholder="Временная зона" />
        <button onClick={addClock}>Add</button>
      </div>

      {clocks.map(elem => {
        return(
          <Clock onRemove={removeClock} country={elem.country} timezone={elem.timeZone}  id={elem.id}/>
        ) 
      })}
    </div>
  );
}
