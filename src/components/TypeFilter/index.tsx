import { PokemonType } from "@/api/fetchType"
import { useState } from "react";
interface PokedexFilterProps{
    pokemonType: PokemonType
    handleTypeSelect: (selectedType: string) => void;

}


export default function PokedexFilter({ pokemonType, handleTypeSelect }: PokedexFilterProps) {
    
    const handleButtonClick = () => {
        handleTypeSelect(pokemonType.type1);
    };
  
    return (
        <option
          className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
          value={pokemonType.type1}
          onClick={handleButtonClick}
        > 
          {pokemonType.type1}
        </option>
    );
  }