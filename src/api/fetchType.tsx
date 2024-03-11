
export interface PokemonType {

    id:number;
    type1: string;
}

export const fetchPokemonType = async(id:number ): Promise <PokemonType>=> {
    const response =await fetch(`https://pokeapi.co/api/v2/type/${id}/`);
    const data = await response.json();

    const pokemonType: PokemonType={
        id: data.id,
        type1: data.name,
    }
    
 
    return pokemonType
}