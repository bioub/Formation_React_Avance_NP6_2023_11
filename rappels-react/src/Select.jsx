import styles from './Select.module.css';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

const Select = forwardRef(
  function Select({ value, onChange, items }, ref) {
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
      };
    }, []);

    useImperativeHandle(ref, () => ({
      openMenu() {
        setMenuOpen(true);
      }
    }));
  
    return (
      <div className="Select" ref={hostRef}>
        <div className={styles.selected} onClick={() => setMenuOpen(!menuOpen)}>
          {value}
        </div>
        {menuOpen && (
          <div className={styles.menu}>
            {items.map((item) => (
              <div key={item} onClick={() => onChange(item)}>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  })

export default Select;
