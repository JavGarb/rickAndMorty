import React from 'react';
import styles from './Form.module.css';
import { useState, useEffect } from 'react';
import validation from './validation';

function Form(props) {

  const [userData, setUserData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: '', password: '' })
  let validado = false;
  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    setErrors(validation(userData));
  }, [userData]);

  const clickHandle = () => {
    props.login(userData);
  }

  return (
    <div className={styles.formulario}>
      <label className={styles.user}>User:
        <input className={styles.inp} name="username"
          onChange={handleInputChange}
          type="text"
          value={userData.username} /></label>
      <span className={styles.aviso}>{errors.username}</span>
      <label className={styles.user}>Pass:
        <input className={styles.inp}
          name="password"
          onChange={handleInputChange}
          type="password"
          value={userData.password} /></label>
      <span className={styles.aviso}>{errors.password}</span>
      <button className={styles.boton} onClick={clickHandle} >LOGIN</button>

    </div>
  )
}

export default Form