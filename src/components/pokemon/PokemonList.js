import React from 'react';
import styles from './PokemonList.module.css'
import { Link } from 'react-router-dom'

export default function PokemonList({ pokemon }) {
  return (
    <div className={styles.contenedor}>

      {pokemon.map(p => {
      return (
        <div className='col-md-3 col-sm-6 nb-5' key={p.name}>
          <div className={styles.card}>
              <Link to={`/pokemon/${p.name}`}>
                <div className='card-header text-capitalize text-center'> {p.name}</div>
              </Link>
          </div> 
        </div>
      )})}

    </div>
  )
}
