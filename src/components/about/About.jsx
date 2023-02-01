import React from 'react'
import styles from './about.module.css'
import imagen from "./myAvatar.png"


function About() {
  return (
    <div className={styles.personal}>
      <div className={styles.ficha}>
      <h1>Name: Javier Garbalena</h1>
      <h3>Genre: Male</h3>
      <h3>Specie: Human</h3>
      </div>
      <div >
        <img className={styles.foto} src={imagen} alt="myAvatar" />
      </div>

    </div>
  )
}

export default About
