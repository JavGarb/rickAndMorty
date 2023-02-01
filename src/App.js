import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import About from './components/about/About.jsx';
import Details from './components/details/Detail.jsx';
import Favorites from './components/favorites/Favorites.jsx';
import styles from './app.module.css';
import Form from './components/form/Form.jsx'
import { useState, useEffect } from 'react';
import { Navigate, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [acceso, setAcceso] = useState(false);
  const usuario = "";//aaaaa@gmail.com
  const clave = "";//123ABc
  const navegar = useNavigate();

  const logout=()=>{
    setAcceso(false);
  }

  const login = (userData) => {
    if (userData.username === usuario && userData.password === clave) {
      setAcceso(true);
      navegar('/Home');
    }else alert("Usuario o Clave incorrecta!!")
  }

  useEffect(() => {
    !acceso && navegar('/');
  }, [acceso]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);//
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  const onClose = (name) => {
    let result = characters.filter(elemento => elemento.name !== name)
    setCharacters(result);
  }

  return (
    <div className={styles.App}>

      {location.pathname !== "/" && <Nav logout={logout} onSearch={onSearch} />}
      <Routes>
        //<Route path="/" element={<Form login={login}/>} />
        <Route path="/Home" element={<Cards characters={characters} onClose={onClose} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Favoritos" element={<Favorites />}></Route>
        <Route path="/detail/:detailId" element={<Details />}></Route>
      </Routes>
    </div>
  )
}
//className={styles.barra}

export default App
/*<Navigate to="/Home"/> */