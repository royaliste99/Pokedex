"use client"
import  LoadingSpinner  from "@/app/loading";
import { PokemonCard, fetchPokemonCard } from '@/api/fetchCard';
import { PokeCardInfo } from '@/components/StrucCard';
import { useEffect, useState } from 'react';

const PokemonDetailPage = ({ params }: { params: { name: string } }) => {
  console.log(params);

  const [pokemonDetails, setPokemonDetails] = useState<PokemonCard | null>(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const pokemonCard = await fetchPokemonCard(params.name);
        setPokemonDetails(pokemonCard);
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
      }
    };

    fetchPokemonDetails();
  }, [params.name]);


  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simuler le chargement des données
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simule un chargement de 2 secondes

    return () => clearTimeout(timer); // Nettoyage
  }, []);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <h1>{params.name} Details</h1>
      {pokemonDetails && <PokeCardInfo PokemonCard={[pokemonDetails]} selectedName="" />}
    </div>
  );
};

export default PokemonDetailPage;



