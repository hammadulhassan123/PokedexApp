// Home.jsx
import React, { useEffect, useState } from 'react';
import { Container, Grid, Button } from '@mui/material';
import NavBar from '../Components/Navbar/navbar';
import PokemonCard from '../Components/PokemonCard/Card';
import axios from 'axios';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(10);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 100; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => {
        const pokemonData = res.map((response) => response.data);
        setPokemons(pokemonData);
      });
  };

  const pokemonFilter = (name) => {
    if (name === '') {
      getPokemons();
    } else {
      var filteredPokemon = pokemons.filter((pokemon) => pokemon.name.includes(name));
      setPokemons(filteredPokemon);
    }
    setCurrentPage(1); // Reset to the first page after filtering
  };

  // Pagination Logic
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = pokemons.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <NavBar pokemonFilter={pokemonFilter} />
      <Container maxWidth="xl" style={{ backgroundColor: '#000' }}>
        <Grid container spacing={2}>
          {currentCards.length > 0 ? (
            currentCards.map((pokemon, key) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                <PokemonCard
                  name={pokemon.name}
                  image={pokemon.sprites.front_default}
                  types={pokemon.types}
                  attack={pokemon.stats.find((stat) => stat.stat.name === 'attack').base_stat}
                  hp={pokemon.stats.find((stat) => stat.stat.name === 'hp').base_stat}
                />
              </Grid>
            ))
          ) : (
            <div>No results found.</div>
          )}
        </Grid>
        <div style={{ marginTop: '20px', textAlign: 'center', display: 'flex', justifyContent: 'space-evenly' }}>
          {pokemons.length > cardsPerPage && (
            <Button variant="contained" disabled={currentPage === 1} onClick={() => paginate(currentPage - 1)}>
              Previous
            </Button>
          )}
          {pokemons.length > cardsPerPage && (
            <Button
              variant="contained"
              disabled={currentCards.length < cardsPerPage}
              onClick={() => paginate(currentPage + 1)}
            >
              Next
            </Button>
          )}
        </div>
      </Container>
    </>
  );
};

export default Home;
