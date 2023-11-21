import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button className="Counter" onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

export default Counter;
