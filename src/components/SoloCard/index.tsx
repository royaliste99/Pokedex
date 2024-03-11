import { PokemonCard } from "@/api/fetchCard";

interface PokemonMonoCardProps {
    pokemonCard: PokemonCard;
}

const PokeCard: React.FC<PokemonMonoCardProps> = ({ pokemonCard }) => {
    return (

        <div>
            <h2>{pokemonCard.name}</h2>
            <img src={pokemonCard.imageUrl} alt={`${pokemonCard.name} image`} />
            <p>Taille : {pokemonCard.taille}</p>
            <p>Poid : {pokemonCard.poid}</p>
            <p>Abilites : {pokemonCard.abilites.join(' / ')}</p>
            <p>PV : {pokemonCard.vie}</p>
            <p>Attaque : {pokemonCard.attaque}</p>
            <p>Defense : {pokemonCard.defense}</p>
            <p>Attaque Special : {pokemonCard.attaqueSpecial}</p>
            <p>Defense Special : {pokemonCard.defenseSpecial}</p>
            <p>Vitesse : {pokemonCard.vitesse}</p>
        </div>
    );
};

export default PokeCard;