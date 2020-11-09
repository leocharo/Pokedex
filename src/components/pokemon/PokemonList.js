import React from 'react';
import styles from './PokemonList.module.css'

export default function PokemonList({ pokemon }) {
  return (
    <div className={styles.contenedor}>

      {pokemon.map(p => (
        <div className='col-md-3 col-sm-6 nb-5'>
          <div className={styles.card}>
              <div className='card-header text-capitalize text-center' key={p} >{p}</div>
          </div> 
        </div>
      ))}

    </div>
  )
}
