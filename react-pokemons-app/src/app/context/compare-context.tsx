import { ReactNode, createContext, useContext, useState } from 'react';

type Context = {
  pokemonsIdsToCompare: number[];
  toggleSelection(pokemonId: number): void;
};

export const CompareContext = createContext<Context>({
  pokemonsIdsToCompare: [],
  toggleSelection() {},
});

type Props = {
  children: ReactNode;
};

export function CompareProvider({ children }: Props) {
  const [pokemonsIdsToCompare, setPokemonsIdsToCompare] = useState<
    Context['pokemonsIdsToCompare']
  >([]);

  function toggleSelection(pokemonId: number) {
    if (pokemonsIdsToCompare.includes(pokemonId)) {
      setPokemonsIdsToCompare(
        pokemonsIdsToCompare.filter((pId) => pId !== pokemonId)
      );
    } else if (pokemonsIdsToCompare.length < 2) {
      setPokemonsIdsToCompare([...pokemonsIdsToCompare, pokemonId]);
    }
  }

  return (
    <CompareContext.Provider value={{ pokemonsIdsToCompare, toggleSelection }}>
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  return useContext(CompareContext);
}