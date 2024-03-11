export interface Pokemon {

    id:number;
    name: string;
    imageUrl: string;
    type: string;
    species: string;
}

export const fetchPokemon = async(id:number ): Promise <Pokemon>=> {
    const response =await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();

    const pokemon: Pokemon={
        species:data.species,
        id: data.id,
        name : data.name,
        type : data.types.map((type: any) => type.type.name).join( ' / ' ),
        imageUrl:data.sprites.front_default,

    }
    return pokemon
}