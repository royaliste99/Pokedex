import { PokemonCard } from "@/api/fetchCard";
import PokeCard from "../SoloCard";


interface PokemonMonoProps {
    PokemonCard: PokemonCard[];
    selectedName: string ; 
  }
  
  export function PokeCardInfo({ PokemonCard, selectedName }: PokemonMonoProps) {
  
    const filteredPokemon = selectedName
    ? PokemonCard.filter((p) => p.name.includes(selectedName))
    : PokemonCard;

    return (
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredPokemon.map((p) => (
          <PokeCard key={p.id} pokemonCard={p} />
          ))}
      </div>
    );
  }