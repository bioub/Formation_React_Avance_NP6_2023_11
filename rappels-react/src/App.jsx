import { useMemo, useRef, useState } from 'react';
import Select from './Select';

function App() {
  const [value, setValue] = useState('Titi');
  const selectRef = useRef(null);

  const itemsRef = useRef(['Toto', 'Titi', 'Tata']);

  // console.log('ABC');
  // const items = useMemo(() => ['Toto', 'Titi', 'Tata'], []);

  return (
    <div className="App">
      <Select
        ref={selectRef}
        value={value}
        onChange={setValue}
        items={itemsRef.current}
      />
      <button onClick={(event) => {
        event.stopPropagation();
        selectRef.current.openMenu()
      }}>Open Menu</button>
    </div>
  );
}

export default App;
