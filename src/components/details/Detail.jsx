import React from 'react'
import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import styles from './detail.module.css'

function Detail() {
  const [character, setCharacter]= useState({});
  const {detailId}= useParams()

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
       .then((response) => response.json())
       .then((char) => {
          if (char.name) {
             setCharacter(char);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       })
       .catch((err) => {
          window.alert('No hay personajes con ese ID');
       });
    return setCharacter({});
 }, [detailId]);

  return (
    <div className={styles.div}>
      <div className={styles.texto}>
      <h3>Nombre: {character.name}</h3>
      <h4>Estatus: {character.status}</h4>
      <h4>Especie: {character.species}</h4>
      <h4>Tipo: {character.type}</h4>
      <h4>Genero: {character.gender}</h4>
      <Link to="/Home" className={styles.boton}>Atras</Link>

      </div>
      <div className={styles.imagen}>
        <img src={character.image} alt="" />
      </div>
      
    </div>
  )
}

export default Detail

/*
Name
Status
Specie
Genrer
Origin
Image
*/