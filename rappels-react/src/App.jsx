import { useRef, useState } from 'react';
import Select from './Select';

function App() {
  const [value, setValue] = useState('Titi');
  const selectRef = useRef(null);

  return (
    <div className="App">
      <Select
        ref={selectRef}
        value={value}
        onChange={setValue}
        items={['Toto', 'Titi', 'Tata']}
      />
      <button onClick={(event) => {
        event.stopPropagation();
        selectRef.current.openMenu()
      }}>Open Menu</button>
    </div>
  );
}

export default App;
