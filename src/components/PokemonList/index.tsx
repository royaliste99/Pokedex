import { Pokemon } from "@/api/fetchPokemon";
import PokedexCard from "../PokemonCard";

interface PokemonListProps {
  pokemon: Pokemon[];
  selectedType: string | null; 
}

export function PokemonList({ pokemon, selectedType }: PokemonListProps) {

  const filteredPokemon = selectedType
    ? pokemon.filter((p) => p.type.includes(selectedType))
    : pokemon;

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {filteredPokemon.map((p) => (
        <PokedexCard key={p.id} pokemon={p} />
      ))}
    </div>
  );
}
