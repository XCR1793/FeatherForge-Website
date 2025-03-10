import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import styles from './header.module.css';


interface HeaderProps {
    isFlex?: boolean;
}

function Header({ isFlex = false }: HeaderProps) {
  const navItems = [
    { name: 'Store', links: [{ name: 'Products', to: 'https://www.etsy.com/au/shop/FeatherForge3D' }, { name: 'Commissions', to: '/commissions' }] },
    { name: 'Contacts', to: '/contacts' },
    { name: 'TOS', to: '/tos' },
  ];

  const renderLink = (name: string, to: string) => {
    // Check if 'to' is an external link (starting with 'http')
    if (to.startsWith('http')) {
      return <a href={to} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>{name}</a>;
    }
    return <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>{name}</Link>;
  };

  return (
    <header className={isFlex ? styles.headerForFlex : styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logoLink}>
          <img src={Logo} className={styles.logo} alt="Logo"/>
        </Link>
        <Link to="/" className={styles.featherforge} style={{ textDecoration: 'none', color: 'inherit' }}>Feather Forge</Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navUl}>
          {navItems.map((item, index) => (
            <li
              key={index}
              style={{ animationDelay: `${(index + 1) * 0.2}s` }} // Apply dynamic animation delay
              className={styles.navItem}
            >
              {item.links ? (
                <>
                  <span className={styles.dropdownSpan}>{item.name}</span>
                  <div className={styles.dropdownContent}>
                    {item.links.map((link, subIndex) => (
                      <div key={subIndex}>
                        {renderLink(link.name, link.to)}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                renderLink(item.name, item.to)  // Use the renderLink function for main items
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
