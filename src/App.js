
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Pokemon from './componentes/pokemon/pokemon';

// https://pokeapi.co/api/v2/pokemon/ y https://pokeapi.co/



function App() {

  const [pokemon, setpokemon] = useState('pikachu')
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonImage, setPokemonImage] = useState('')
  const [pokemonId, setPokemonId] = useState(null)
  const [pokemonAbilities, setPokemonAbilities] = useState([])

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    axios.get(url)
    .then(res => {
      console.log(res.data)
      setPokemonName(res.data.name)
      setPokemonImage(res.data.sprites.front_default)
      setPokemonId(res.data.id)
      setPokemonAbilities(res.data.abilities)
    })
    .catch(error => console.log(error));
  }, [pokemon])
  console.log(pokemonAbilities)

  return (
    <div className="App">
    <Pokemon name={pokemonName} image={pokemonImage} id={pokemonId} abilities={pokemonAbilities} />
    <input onChange={(e) => setpokemon(e.target.value)} type="text" />
      <button onClick={() => {
        setpokemon('gliscor')
      }}>Change to Charizad</button>
    </div>
  );
}

export default App;
