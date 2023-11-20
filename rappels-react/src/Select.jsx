import { useState } from 'react';

function Select({ value, onChange, items }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="Select">
      <div className="selected" onClick={() => setMenuOpen(!menuOpen)}>{value}</div>
      {menuOpen && (
        <div className="menu">
          {items.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
