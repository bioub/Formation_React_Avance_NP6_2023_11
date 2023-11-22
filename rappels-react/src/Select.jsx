import styles from './Select.module.css';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

function useEventListener(element, eventName, callback) {
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = function wrapperCallback(e) {
      callback(e);
    };
  }, [callback]);

  useEffect(() => {
    element.addEventListener(eventName, callbackRef.current);
    return () => {
      element.removeEventListener(eventName, callbackRef.current);
    };
  }, [element, eventName]);
}

const Select = forwardRef(
  function Select({ value, onChange, items }, ref) {
    const [menuOpen, setMenuOpen] = useState(false);
    const hostRef = useRef(null);
  
    useEventListener(window, 'click', (event) => {
      if (!hostRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    });

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
