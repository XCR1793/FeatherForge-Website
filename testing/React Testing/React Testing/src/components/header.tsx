import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import styles from './header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link to="/" className={styles.logoLink}>
                    <img src={Logo} className={styles.logo} alt="Logo"/>
                </Link>
                <Link to="/" className={styles.featherforge} style={{ textDecoration: 'none', color: 'inherit' }}>Feather Forge</Link>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li className={styles.dropdown}>
                        <span style={{ textDecoration: 'none', color: 'inherit' }}>Store</span>
                        <div className={styles.dropdownContent}>
                            <Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>Products</Link>
                            <Link to="/commissions" style={{ textDecoration: 'none', color: 'inherit' }}>Commissions</Link>
                        </div>
                    </li>
                    <li>
                        <Link to="/contacts" style={{ textDecoration: 'none', color: 'inherit' }}>Contacts</Link>
                    </li>
                    <li>
                        <Link to="/tos" style={{ textDecoration: 'none', color: 'inherit' }}>TOS</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
