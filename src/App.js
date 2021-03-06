import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import NavBar from './components/layout/NavBar'
import PokemonList from './components/pokemon/PokemonList';
import Pokemon from './components/pokemon/Pokemon';
import Pagination from './components/layout/Pagination';
import axios from 'axios';
import { Route } from 'react-router-dom';

function App() {
  const [pokemon, setPokemon] = useState([]); 
  const [currentPageUrl, setcurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=12'); // por default le paso la primera pagina de la api a current page url
  const [nextPageUrl, setnextPageUrl] = useState(); 
  const [prevPageUrl, setprevPageUrl] = useState();
  const [loading, setLoading] = useState(true); //by default app is loading

  //axios hace una request a la api y la retorna como una promesa
  useEffect(() => {
    setLoading(true) //cada vez que inicia el efecto re reinicia el loading
    let cancel;
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken (c => cancel = c)
    }).then(res => {
      setLoading(false); //request succesful loading = false
      setnextPageUrl(res.data.next) ;//url for the next page
      setprevPageUrl(res.data.previous);
      setPokemon(res.data.results); //recibo un array vacio con los nombres de los poke y con el map los divido en cada uno
    });

    return () => cancel() //cancela la request a la api cada vez que hacemos una nueva

  }, [currentPageUrl]) // cada vez que currentPageUrl CAMBIA re renderiza el code dentro del useEffect


  // DID MOUNT (CUANDO SE MONTA EL COMPONENTE)
  // DID UPDATE (CUANDO SE ACTUALIZA)
  // WILL UNMOUNT (CUANDO SE DESMONTA)

  function gotoNextPage() {
    setcurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setcurrentPageUrl(prevPageUrl)
  }

  if (loading) return (
    <div className="spinner">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );

    return (
      <React.Fragment>  
        <NavBar />
        <Route exact path='/'>
          <PokemonList pokemon={pokemon}/>
          <Pagination 
            gotoNextPage={nextPageUrl ? gotoNextPage : null} 
            gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
          />
        </Route>
        <Route path='/pokemon/:name' render={({ match }) => <Pokemon name={match.params.name} />} />
      </React.Fragment>
    );
};

export default App;
