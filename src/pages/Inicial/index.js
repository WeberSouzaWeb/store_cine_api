import Banner from "components/Banner";
import Card from "components/Card";
import Title from "components/Title";
import styles from './Inicial.module.css';
import { useEffect, useState } from "react";

function Inicial() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/WeberSouzaWeb/store_cine_api/videos')
            .then(answers => answers.json())
            .then(datas => { setVideos(datas) })
    }, [])

    return (
        <>
            <Banner imagem='home' />
            <Title>
                <h1>A melhor loja para seu infoproduto</h1>
            </Title>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>

    )
}

export default Inicial;