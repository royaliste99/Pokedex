"use client"
import { useEffect, useState } from 'react';
import { fetchPokemon } from '@/api/fetchPokemon';

interface PokemonDetailPageProps {
  params: {
    id: string;
  };
}

const PokemonDetailPage: React.FC<PokemonDetailPageProps> = ({ params }) => {
  const [pokeDesc, setPokeDesc] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const id = parseInt(params.id, 10);
        const pokemonSolo = await fetchPokemon(id);

        const speciesResponse = await fetch(pokemonSolo.species);
        if (!speciesResponse.ok) {
          throw new Error(`Failed to fetch species data. Status: ${speciesResponse.status}`);
        }

        const speciesData = await speciesResponse.json();
        const descriptionEntry = speciesData.flavor_text_entries.find(
          (entry: any) => entry.language.name === 'fr'
        );
        setPokeDesc(descriptionEntry ? descriptionEntry.flavor_text : 'No description available');
      } catch (error) {
        console.error('Erreur fetch Pokemon :', error);
        setError('Erreur fetch Pokemon details.');
      }
    };

    fetchPokemonDetails();
  }, [params.id]);


  return (<div>
    {error ? (
      <p>{error}</p>
    ) : (
      <>
        <h1>Détails du Pokémon</h1>
        <p>Description: {pokeDesc}</p>
      </>
    )}
  </div>
  );
};

export default PokemonDetailPage;
