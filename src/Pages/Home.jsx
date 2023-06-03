import React from 'react'
import { Container, Grid } from '@mui/material';
import NavBar from '../Components/Navbar/navbar';
import PokemonCard from '../Components/PokemonCard/Card';
import { useEffect,useState } from 'react';
import axios from 'axios'

const Home = () => {
    const[pokemons,setPokemons]=useState();

    useEffect(()=>{
        getPokemons();
    },[])

    const getPokemons = ()=>{

        axios.get("https://pokeapi.co/api/v2/pokemon?limit=50")
        .then((res)=> console.log(res))
        .catch((err)=>console.log(err));
    }
    return (
    <>
        <NavBar />
        <Container maxWidth="xg">
            <Grid container> 
                  {pokemons.map((pokemon)=>(
                    <Grid item xs={3}>
                            <PokemonCard />
                    </Grid>  
                  ))}
            </Grid>
            
        </Container>
    </>
  )
}

export default Home