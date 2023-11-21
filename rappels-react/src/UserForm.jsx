import { useState } from 'react';

function UserForm() {
  const [name, setName] = useState('Romain');

  return (
    <div>
      <input placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello {name}</p>
    </div>
  );
}

export default UserForm;
