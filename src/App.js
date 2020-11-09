import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import NavBar from './components/layout/NavBar'
import PokemonList from './components/pokemon/PokemonList';
import Pagination from './components/layout/Pagination';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]); 
  const [currentPageUrl, setcurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon'); // por default le paso la primera pagina de la api a current page url
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
      setPokemon(res.data.results.map(p => p.name)); //recibo un array vacio con los nombres de los poke y con el map los divido en cada uno
    });

    return () => cancel() //cancela la request a la api cada vez que hacemos una nueva

  }, [currentPageUrl]) // cada vez que currentPageUrl CAMBIA re renderiza el code dentro del useEffect

  function gotoNextPage() {
    setcurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setcurrentPageUrl(prevPageUrl)
  }

  if (loading) return 'Loading...';

    return (
      <div className='App'>  
        <NavBar />
          <div>
            <PokemonList pokemon={pokemon} />
            <Pagination  //le paso al componente pagination las funciones gotoNextPage y gotoPrevPage para que las pueda utilizar
              gotoNextPage={nextPageUrl ? gotoNextPage : null}
              gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
            />
         </div>
      </div>
    );
};

export default App;
