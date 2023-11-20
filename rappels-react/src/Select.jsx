import './Select.css';
import { useEffect, useRef, useState } from 'react';

function Select({ value, onChange, items }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const hostRef = useRef(null);

  useEffect(() => {
    const callback = (event) => {
      if (!hostRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    window.addEventListener('click', callback);
    return () => {
      window.removeEventListener('click', callback);
    }
  }, []);

  return (
    <div className="Select" ref={hostRef}>
      <div className="selected" onClick={() => setMenuOpen(!menuOpen)}>
        {value}
      </div>
      {menuOpen && (
        <div className="menu">
          {items.map((item) => (
            <div key={item} onClick={() => onChange(item)}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
