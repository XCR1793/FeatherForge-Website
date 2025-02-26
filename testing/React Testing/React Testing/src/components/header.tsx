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
                <div className={styles.logoContainer}>
                    <a target="_blank" className={styles.logoLink}>
                        <img src={Logo} className={styles.logo} alt="Logo"/>
                    </a>
                    <a href="#FeatherForge" className={styles.featherforge}>Feather Forge</a>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li className={styles.dropdown}>
                            <a href="#Store">Store</a>
                            <div className={styles.dropdownContent}>
                                <a href="#Products">Products</a>
                                <a href="#Commissions">Commissions</a>
                            </div>
                        </li>
                        <li>
                            <a href="#Contacts">Contacts</a>
                        </li>
                        <li>
                            <a href="#TOS">TOS</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header
