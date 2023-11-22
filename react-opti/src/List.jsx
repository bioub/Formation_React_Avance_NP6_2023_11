import { memo } from "react";
import Item from "./Item";

function List({pokemons = [], onDelete}) {
  return <div>
    {pokemons.map((p) => <Item pokemon={p} key={p.id} onDelete={onDelete} />)}
  </div>
}

export default memo(List);
// export default memo(List, (prevProps, nextProps) => prevProps.pokemons === nextProps.pokemons);