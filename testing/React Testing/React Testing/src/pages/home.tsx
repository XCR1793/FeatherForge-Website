import styles from './home.module.css'
import Logo from '../assets/Logo.svg'

function Home(){
    return(
        <div>
            <a target="_blank">
                <img src={Logo} className={styles.logo}/>
            </a>
        </div>
    )
}

 export default Home;