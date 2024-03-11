"use client"
import  LoadingSpinner  from "@/app/loading";
import React, { useEffect, useState } from 'react';
import { Pokemon, fetchPokemon } from '@/api/fetchPokemon';
import { PokemonType, fetchPokemonType } from '@/api/fetchType';
import { PokemonList } from '@/components/PokemonList';
import { DerouleType } from '@/components/ListType';


export default function Home() {


  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleTypeSelect = (selectedType: string) => {

    setSelectedType(selectedType);
  };
  useEffect(() => {

    const fetchPokemonList = async () => {
      const fetchedPokemonList: Pokemon[] = [];
      for (let i = 1; i <= 151; i++) {
        const pokemon = await fetchPokemon(i);
        fetchedPokemonList.push(pokemon);
      }
  
      const filteredPokemonList = selectedType
        ? fetchedPokemonList.filter((pokemon) => pokemon.type.includes(selectedType))
        : fetchedPokemonList;
  
      // Utilisez la liste filtrée pour mettre à jour l'état
      setPokemonList(filteredPokemonList);
    };
  
    fetchPokemonList();
  }, [selectedType]);
  
  const [derouleType, setDerouleType] = useState<PokemonType[]>([]);

  useEffect(() => {
    const fetchPokemonListType = async () => {
      const fetchedPokemonListType: PokemonType[] = [];
      for (let i = 1; i <= 18; i++) {
        const pokemonType = await fetchPokemonType(i);
        fetchedPokemonListType.push(pokemonType);
      }
      setDerouleType(fetchedPokemonListType);
    };

    fetchPokemonListType();
  }, []);


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
    <main>
      <h1>Bienvenue dans le Pokedex</h1>
      <DerouleType pokemonType={derouleType} handleTypeSelect={handleTypeSelect} />
      <PokemonList key={selectedType} pokemon={pokemonList} selectedType={selectedType} />

    </main>
  );
}
