import { useState } from 'react';
import './App.css';
import { Clock } from './components/Clock';

export default function App() {
  const [clocks, setClocks]= useState<React.ReactNode[]>([]);
  const [countryName, setCountryName] = useState('');
  const [timezone, setTimezone] = useState(0);

  const addClock = () => {
    const newId = Date.now(); // Генерируем уникальный идентификатор
    setClocks([...clocks, <Clock key={newId} onRemove={() => removeClock(newId)} country={countryName} timezone={timezone} />]);
    console.log('Добавлены часы с id :' +  newId)
  };

  const removeClock = (id: number) => {
    setClocks(clocks.filter((clock) => clock.key !== id));
    console.log("Удалены часы с id: " + id)
  };

  return (
    <div className="App">
      <div className='fieldsBox'>      
        <input type="text" value={countryName} onChange={(e) => setCountryName(e.target.value)} placeholder="Страна" />
        <input type="number" value={timezone} onChange={(e) => setTimezone(parseInt(e.target.value))} placeholder="Временная зона" />
        <button onClick={addClock}>Add</button>
      </div>

      {clocks}
    </div>
  );
}
