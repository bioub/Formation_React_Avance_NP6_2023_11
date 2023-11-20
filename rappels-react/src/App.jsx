import { useState } from 'react';
import Select from './Select';

function App() {
  const [value, setValue] = useState('Titi');

  return (
    <div className="App">
      <Select
        value={value}
        onChange={setValue}
        items={['Toto', 'Titi', 'Tata']}
      />
    </div>
  );
}

export default App;
