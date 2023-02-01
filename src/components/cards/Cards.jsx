import Card from '../card/Card';
import styles from './cards.module.css';
import {Link} from 'react-router-dom';
export default function Cards(props) {
   const { characters } = props;
   return (
   <div className={styles.contenedor}>

     {
        characters.map((elemento)=>{
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
   );
}
