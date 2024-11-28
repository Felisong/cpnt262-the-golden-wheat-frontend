import styles from './Hero.module.css'

function Hero(props){

    return(
        <div className={styles.hero}>
            <h1 className={styles.h1}>
            {props.title}
            </h1>
        </div>
    );
}

export default Hero