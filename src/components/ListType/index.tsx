import { PokemonType } from "@/api/fetchType"
import PokedexFilter from "@/components/TypeFilter"
import { useState } from "react";

type PokedexFilterProps = {

    pokemonType: PokemonType[]
    handleTypeSelect: (selectedType: string) => void;
}
export function DerouleType({pokemonType, handleTypeSelect}:PokedexFilterProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen((prev) => !prev);
    };
    const handleButtonClick = () => {
      handleTypeSelect('');
      toggleDropdown();
  };
    return (
      <div className="group relative">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdownType"
          onClick={toggleDropdown}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Choisi un type
          <svg
            className={`w-2.5 h-2.5 ms-3 transform transition-transform ${
              isDropdownOpen ? 'rotate-180' : 'rotate-0'
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div
          id="dropdownType"
          className={`${isDropdownOpen ? 'block' : 'hidden'} absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
        >
          <ul
            className={`${isDropdownOpen ? 'block' : 'hidden'}py-2 text-sm text-gray-700 dark:text-gray-200`}
            aria-labelledby="dropdownDefaultButton"
          >
          <option
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            value={''}
            onClick={handleButtonClick}
          > 
            OK
          </option>
            
          {pokemonType.map((p) => (
            <PokedexFilter key={p.id} pokemonType={p} handleTypeSelect={handleTypeSelect} />
          ))}
          </ul>
        </div>
      </div>
    );
}