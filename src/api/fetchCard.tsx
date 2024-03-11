export interface PokemonCard {

    id: number;
    name: string;
    type: string[];
    imageUrl: string;
    taille: number;
    poid: number;
    abilites: string[];
    cris: string;
    vie: string;
    attaque: string;
    defense: string;
    attaqueSpecial: string;
    defenseSpecial: string;
    vitesse: string;
}
const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export const fetchPokemonCard = async (name: string): Promise<PokemonCard> => {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    const data = await response.json();

    const types: string[] = data.types.map((type: any) => capitalizeFirstLetter(type.type.name));
    const nameMaj: string = capitalizeFirstLetter(data.name);

    const pokemonCard: PokemonCard = {

        id: data.id,
        name: nameMaj,
        type: types,
        imageUrl: data.sprites.front_default,
        taille: data.height,
        poid: data.weight,
        abilites: data.abilities.map((ability: any) => ability.ability.name),
        cris: data.cries.legacy, // Vous devrez adapter cela en fonction de la structure de l'API
        vie: data.stats[0].base_stat,
        attaque: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        attaqueSpecial: data.stats[3].base_stat,
        defenseSpecial: data.stats[4].base_stat,
        vitesse: data.stats[5].base_stat,

    }
    return pokemonCard
}