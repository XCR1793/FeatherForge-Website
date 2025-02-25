import Logo from '../assets/Logo.svg'
import styles from './header.module.css'

function Header(){
    return(
        <>
            <temp>
                <a target="_blank">
                    <img src={Logo} className={styles.logo}/>
                </a>
            </temp>
        </>
    )
}

export default Header