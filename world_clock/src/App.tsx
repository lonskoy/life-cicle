import { useState } from 'react';
import './App.css';
import { Clock } from './components/Clock';

function App() {
  const [clocks, setClocks] = useState([]);
  const [countryName, setCountryName] = useState('');
  const [timezone, setTimezone] = useState(0);

  const addClock = () => {
    setClocks([...clocks, <Clock key={clocks.length} onRemove={() => removeClock(clocks.length)} country={countryName} timezone={timezone} />]);
  };

  const removeClock = (id) => {
    setClocks(clocks.filter((clock, index) => index !== id));
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
export default App
