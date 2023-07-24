import style from './Unfound.module.css'

function Unfound(){
    return(
        <section className={style.container}>
            <h2>Ops!</h2>
            <p>O conteúdo que está procurando não foi encontradod</p>
        </section>
    )
}

export default Unfound;