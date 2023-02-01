import React from "react";
import SearchBar from "../searchbar/SearchBar";
import styles from './nav.module.css';
import { Link } from 'react-router-dom';
import { useReducer } from "react";

function Nav(props) {
    const desloguear= ()=>{
        props.logout();
    }

    const randomCard=()=>{
        const numero= parseInt(Math.random()*(826-1)+1);
        console.log(numero);
        props.onSearch(numero);
    }

    return (
        <div className={styles.nav}>
            <div className={styles.botones}>
                <Link to="/Home" className={styles.boton}>Home</Link>
                <Link to="/About" className={styles.boton}>About</Link>
                <Link to="/Favoritos" className={styles.boton}>Favoritos</Link>
                <button className={styles.boton} onClick={randomCard}>Random</button>
                <Link to="/" className={styles.boton} onClick={desloguear}>Logout</Link>
            </div>
            <div className={styles.search}>
                <SearchBar onSearch={props.onSearch} />
            </div>
        </div>
    )
}

export default Nav;
