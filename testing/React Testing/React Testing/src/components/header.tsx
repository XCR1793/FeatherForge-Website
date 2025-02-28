import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import styles from './header.module.css';

function Header() {
  const navItems = [
    { name: 'Store', links: [{ name: 'Products', to: '/products' }, { name: 'Commissions', to: '/commissions' }] },
    { name: 'Contacts', to: '/contacts' },
    { name: 'TOS', to: '/tos' },
  ];

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
          {navItems.map((item, index) => (
            <li
              key={index}
              style={{ animationDelay: `${(index + 1) * 0.2}s` }} // Apply dynamic animation delay
              className={styles.navItem}
            >
              {item.links ? (
                <>
                  <span>{item.name}</span>
                  <div className={styles.dropdownContent}>
                    {item.links.map((link, subIndex) => (
                      <Link key={subIndex} to={link.to} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link to={item.to} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
