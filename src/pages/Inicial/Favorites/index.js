import Banner from 'components/Banner';
import styles from './Favorites.module.css'
import Card from 'components/Card';
import { useFavoriteContext } from 'context/Favorites';

function Favorites() {
    const { favorite } = useFavoriteContext();
    return (
        <>
            <Banner imagem='favoritos' />
            <section className={styles.container}>
                {favorite.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}

export default Favorites;