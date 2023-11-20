import { ReactNode, useEffect, useState } from "react"
import PokemonCardDetails from "../components/pokemon-card-details";
import { getPokemon } from "../services/pokemon-service";
import { Pokemon } from "../models/pokemon";
import { useCompare } from "../context/compare-context";

function PokemonCompare(): ReactNode {

  const { pokemonsIdsToCompare } = useCompare();
  const [pokemon1, setPokemon1] = useState<Pokemon | undefined>(undefined);
  const [pokemon2, setPokemon2] = useState<Pokemon | undefined>(undefined);

  useEffect(() => {
    getPokemon(pokemonsIdsToCompare[0]).then((pokemon) => {
      setPokemon1(pokemon);
    }) 
    getPokemon(pokemonsIdsToCompare[1]).then((pokemon) => {
      setPokemon2(pokemon);
    }) 
  }, []);

 return (
   <div className="PokemonCompare">
     <div className="row">
  <div className="col s6">
  	<PokemonCardDetails pokemon={pokemon1} />
  </div>
  <div className="col s6">
  	<PokemonCardDetails pokemon={pokemon2} />
  </div>
</div>
   </div>
 )
}

export default PokemonCompare;
