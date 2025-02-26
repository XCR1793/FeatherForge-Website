// import Logo from '../assets/Logo.svg'
// import styles from './header.module.css'

// function Header(){
//     return(
//         <>
//             <header className={styles.header}>
//                 <nav className={styles.nav}>
//                     <ul>
//                         <li>
//                             <a href="#Store">Store</a>
//                         </li>
//                         <li>
//                             <a href="#Contacts">Contacts</a>
//                         </li>
//                         <li>
//                             <a href="#TOS">TOS</a>
//                         </li>
//                     </ul>
//                 </nav>
//                 <a target="_blank"><img src={Logo} className={styles.logo}/></a>
//                 <a href="#FeatherForge" className={styles.featherforge}>Feather Forge</a>
//             </header>
//         </>
//     )
// }

// export default Header

import Logo from '../assets/Logo.svg'
import styles from './header.module.css'

function Header(){
    return(
        <>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <a href="#Store">Store</a>
                        </li>
                        <li>
                            <a href="#Contacts">Contacts</a>
                        </li>
                        <li>
                            <a href="#TOS">TOS</a>
                        </li>
                    </ul>
                </nav>
                <a target="_blank" className={styles.logoLink}>
                    <img src={Logo} className={styles.logo} alt="Logo"/>
                </a>
                <a href="#FeatherForge" className={styles.featherforge}>Feather Forge</a>
            </header>
        </>
    )
}

export default Header
