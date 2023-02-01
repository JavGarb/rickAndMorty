import React from 'react';
import styles from './card.module.css';
import { Link } from 'react-router-dom';
import { eliminar, agregar } from '../../redux/action';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';


function Card(props) {
   const [isFav, setIsFav] = useState(false);

   function handleFavorite() {
      if (isFav) {
         setIsFav(false);
         props.eliminar(props.detailId)
      }
      if (!isFav) {
         setIsFav(true);
         props.agregar(props)
      }
   }

   const llamarCerrar = () => {
      props.onClose(props.name);
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.detailId === props.detailId) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   return (
      <div className={styles.card}>
         {isFav ? (<button className={styles.boton2} onClick={handleFavorite}>❤️</button>) : (<button className={styles.boton2} onClick={handleFavorite}>🤍</button>)}
         <button className={styles.boton} onClick={llamarCerrar}>X</button>
            <img className={styles.image} src={props.image} alt="" />
         <Link className={props.name.length <= 17 ? styles.titulo : styles.titulo2} to={`/detail/${props.detailId}`}>
            <h2 >{props.name}</h2>
         </Link>
         <h2 className={styles.subtitulo}>{props.species}</h2>
         <h2 className={colorLetra(props.gender)}>{props.gender}</h2>
      </div>
   );
}
function mapDispatchToProps(dispatch) {
   return {
      agregar: (personaje) => dispatch(agregar(personaje)),
      eliminar: (id) => dispatch(eliminar(id))
   }
}

const mapStateToProps = (state) => {
   return { myFavorites: state.myFavorites }
};




function colorLetra(genero) {
   return (genero === 'Female') ? styles.subtitulo3 : styles.subtitulo2;
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
