import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import styles from './Header.module.css'

export default function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Apps', path: '/apps' },
    { label: 'App Installation', path: '/installed' },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Logo" className={styles.logoImg} />
          <span className={styles.logoText}>AppStore</span>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link to="/apps" className={styles.ctaBtn}>
          Explore Apps
        </Link>

        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
