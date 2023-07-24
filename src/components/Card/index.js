import { useFavoriteContext } from 'context/Favorites';
import styles from './Card.module.css'
import iconeFavoritar from './favoritar.png'
import iconeDesfavoritar from './desfavoritar.png'
import { Link } from 'react-router-dom';

function Card({ id, title, cover }) {
    const { favorite, addFavorite } = useFavoriteContext();
    const isFavorite = favorite.some((fav) => fav.id === id);
    const icone = !isFavorite ? iconeFavoritar : iconeDesfavoritar;
    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={cover} alt={title} className={styles.cover} />
                <h2>{title}</h2>
            </Link>
            <img src={icone} alt="Favoritar filme" className={styles.favoritar}
                onClick={() => {
                    addFavorite({ id, title, cover })
                }} />
        </div>
    )

}
export default Card;