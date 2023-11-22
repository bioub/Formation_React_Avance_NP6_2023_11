import { Suspense, lazy, useCallback, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './Clock';
import List from './List';
// import Presidents from './Presidents';

const Presidents = lazy(() => import('./Presidents'));

function App() {
  const [name, setName] = useState('Romain');
  const [show, setShow] = useState(false);
  const [pokemons, setPokemons] = useState(
    (new Array(10)).fill({}).map((e, i) => ({id: i+1, name: 'ABC'}))
  )

 
  // const handleDelete = useMemo(() => function handleDelete(pokemon) {
  //   setPokemons(pokemons.filter((p) => pokemon.id !== p.id));
  // }, []);

  const handleDelete = useCallback(function handleDelete(pokemon) {
    setPokemons(pokemons.filter((p) => pokemon.id !== p.id));
  }, [pokemons]);

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Clock />}
      <List pokemons={pokemons} onDelete={handleDelete} />
      <Suspense fallback={<div>Loading...</div>}>
      {show && <Presidents />}
      </Suspense>
    </>
  )
}

export default App
