import { Pokemon } from "@/api/fetchPokemon";
import Link from "next/link";
interface PokedexCardProps {
  pokemon: Pokemon;
}

const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
  return (
    
        <div>
      <img src={pokemon.imageUrl} alt={`${pokemon.name} image`} />
      <h2>{pokemon.name}</h2>
      <p>{pokemon.type}</p>
      <Link href={`/Pokemon/${pokemon.name}`}>
        <button >Consulter</button>
      </Link>
    </div>
  );
};

export default PokedexCard;
