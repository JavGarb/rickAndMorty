import styles from './Favorites.module.css';
import React from 'react';
import { connect } from 'react-redux';
import Card from '../card/Card';


export const Favorites = (props) => {
  return (
    <div className={styles.favoritos}>
        {
        props.myFavorites.map((elemento)=>{
           return (
              <Card 
              onClose={props.onClose}
              key={elemento.name} 
              detailId={elemento.id}
              name={elemento.name}
              species={elemento.species}
              gender={elemento.gender}
              image={elemento.image}
              />)
            })
         }

        </div>
  )
}

const mapStateToProps = (state) => ({
    myFavorites:state.myFavorites
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)