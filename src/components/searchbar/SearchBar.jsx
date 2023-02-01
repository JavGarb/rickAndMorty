import React from 'react';
import styles from './searchbar.module.css'
import {useState} from 'react';
import { useRef } from 'react';

export default function SearchBar(props) {

   let [estado, setEstado]= useState('');
   const borrarInput = useRef('');

   const cambiarEstado = (evento)=>{
      setEstado(estado= evento.target.value);
   }

   const llamarSearch=()=>{
       props.onSearch(estado);
       borrarInput.current.value='';
      
   }

   return (
      <div className={styles.buscar}>
         <input 
         className={styles.recuadro} 
         type='search' 
         onChange={cambiarEstado}
         ref={borrarInput} />

         <button 
         className={styles.boton} 
         onClick={llamarSearch }>Agregar</button>

      </div>
   );
}

