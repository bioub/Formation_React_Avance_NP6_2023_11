function Item({ pokemon, onDelete }) {
  console.log(pokemon);
  return <div>{pokemon.name} <button onClick={() => onDelete(pokemon)}>-</button></div>
}
export default Item;