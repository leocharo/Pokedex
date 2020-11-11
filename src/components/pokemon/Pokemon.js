import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Pokemon({ name }) {


//     <div className="card mx-auto mt-5 p-3 shadow-lg rounded border-dark" style={{{{ width: '18rem'}}>
//     <h1>{pokemon.name.toUpperCase(0)}</h1>
//     <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={'imagen de ' + pokemon.name}  height="250"/>
//     <span><strong>Height: </strong>{pokemon.height}</span>
//     <span><strong>All moves: </strong>{pokemon.moves.length}</span>
//     <span><strong>Types: </strong>{types}</span>
//     <span><strong>Weigth: </strong>{pokemon.weight}</span>
// </div>

    const [pokemon, setPokemon] = useState({})
    var TYPE_COLORS = {
        bug: 'B1C12E',
        dark: '4F3A2D',
        dragon: '755EDF',
        electric: 'FCBC17',
        fairy: 'F4B1F4',
        fighting: '823551D',
        fire: 'E73B0C',
        flying: 'A3B3F7',
        ghost: '6060B2',
        grass: '74C236',
        ground: 'D3B357',
        ice: 'A3E7FD',
        normal: 'C8C4BC',
        poison: '934594',
        psychic: 'ED4882',
        rock: 'B9A156',
        steel: 'B5B5C3',
        water: '3295F6'
      };
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => {
            setPokemon({...res.data}) 
        });
    }, [])
    console.log(pokemon);
    if(pokemon.name){
        console.log(pokemon.stats.map(el => ({base_stat: el.base_stat, name:el.stat.name})))
        if(pokemon.types.length > 1){
            var types = pokemon.types[0].type.name
        } else {
            var types = pokemon.types[0].type.name
        }
        return (
            <div className="container mt-5">
                <div className="col">
                    <div className="card shadow-lg rounded border-dark">
                        <div className="card-header bg-pink">
                            <div className="row">
                            <div className="col-5">
                                <h5>#20</h5>
                            </div>
                            <div className="col-7">
                                <div className="float-right">
                                    {pokemon.types.map(el => {
                                        console.log(el.type.name);
                                        return <span className="badge badge-pill mr-1" style={{backgroundColor: `#${TYPE_COLORS[el.type.name]}`, color: 'white'}}>{el.type.name.toUpperCase()}</span>
                                    })}
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row align-items-center">
                            <div className=" col-md-3 "><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} className="card-img-top rounded mx-auto mt-2"/></div>
                            <div className="col-md-9">
                                <h4 className="mx-auto text-capitalize">{pokemon.name}</h4>
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-3">HP</div>
                                    <div className="col-12 col-md-9">
                                        <div className="progress">
                                        <div className="progress-bar " role="progressbar" aria-valuenow="25" aria-valuemin="1" aria-valuemax="255" style={{width: '55%', backgroundColor: 'rgb(200, 196, 188)'}}><small>55</small></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-3">Attack</div>
                                    <div className="col-12 col-md-9">
                                        <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: '81%', backgroundColor: 'rgb(200, 196, 188)'}}><small>81</small></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-3">Defense</div>
                                    <div className="col-12 col-md-9">
                                        <div className="progress">
                                        <div className="progress-bar " role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: '60%', backgroundColor: 'rgb(200, 196, 188)'}}><small>60</small></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-3">Speed</div>
                                    <div className="col-12 col-md-9">
                                        <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: '97%', backgroundColor: 'rgb(200, 196, 188)'}}><small>97</small></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-3">Sp Atk</div>
                                    <div className="col-12 col-md-9">
                                        <div className="progress">
                                        <div className="progress-bar " role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '50%', backgroundColor: 'rgb(200, 196, 188)'}}><small>50</small></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-3">Sp Def</div>
                                    <div className="col-12 col-md-9">
                                        <div className="progress">
                                        <div className="progress-bar " role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%', backgroundColor: 'rgb(200, 196, 188)'}}><small>70</small></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="row mt-1">
                            <div className="col">
                                <p className="">Its hind feet are webbed. They act as flippers,
                                    so it can swim in rivers and hunt for prey.
                                </p>
                            </div>
                            </div>
                        </div>
                        <hr />
                        <div className="card-body">
                            <h5 className="card-title text-center">Profile</h5>
                            <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-6">
                                        <h6 className="float-right">Height:</h6>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="float-left">2.3 ft.</h6>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="float-right">Weight:</h6>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="float-left">40.79 lbs</h6>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="float-right">Catch Rate:</h6>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="float-left">50%</h6>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="float-right">Gender Ratio:</h6>
                                    </div>
                                    <div className="col-6">
                                        <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{ backgroundColor: 'rgb(194, 24, 91)', width: '50%'}}><small>50</small></div>
                                        <div className="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{ backgroundColor: 'rgb(25, 118, 210)', width: '50%'}}><small>50</small></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-6">
                                        <h6 className="float-right">Egg Groups:</h6>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="float-left">Ground </h6>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="float-right">Hatch Steps:</h6>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="float-left">4080</h6>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="float-right">Abilities:</h6>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="float-left">Run Away, Guts, Hustle</h6>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="float-right">EVs:</h6>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="float-left">2 Speed</h6>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="card-footer bg-pink">Data From <a href="https://pokeapi.co/" target="_blank" className="card-link">PokeAPI.co</a></div>
                    </div>
                </div>
            </div>
        )
    } else {
        return <div>Cargando...</div>
    }

}


