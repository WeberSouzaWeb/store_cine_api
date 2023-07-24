import Title from 'components/Title';
import styles from './Player.module.css'
import Banner from 'components/Banner';
import { useParams } from 'react-router-dom';
import Unfound from 'pages/Unfound';
import { useEffect, useState } from 'react';

function Player() {
    const [video, setVideo] = useState();
    const parametros = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/WeberSouzaWeb/store_cine_api/videos?id=${parametros.id}`)
            .then(answer => answer.json())
            .then(data => {
                setVideo(...data)
            })
    }, [])
    if (!video) {
        return <Unfound />
    }
    return (
        <>
            <Banner imagem="player" />
            <Title>
                <h1>Player</h1>
            </Title>
            <section className={styles.container}>
                <iframe width="100%"
                    height="100%"
                    src={video.link}
                    title={video.title}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
            </section>
        </>
    )
}

export default Player;