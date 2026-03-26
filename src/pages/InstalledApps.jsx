import { useState } from 'react'
import { Link } from 'react-router-dom'
import { installedApps } from '../data'
import styles from './InstalledApps.module.css'

export default function InstalledApps() {
  const [search, setSearch] = useState('')

  const filtered = installedApps.filter(app =>
    app.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.topBar}>
          <div>
            <h1 className={styles.title}>Your Installed Apps</h1>
            <p className={styles.sub}>Click on 'Get' to find any app in the market downloaded for you to use</p>
          </div>
          <div className={styles.searchWrap}>
            <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              className={styles.search}
              type="text"
              placeholder="Search installed apps..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        <p className={styles.countLabel}>{filtered.length} Apps Found</p>

        {filtered.length > 0 ? (
          <div className={styles.list}>
            {filtered.map(app => (
              <div key={app.id} className={styles.row}>
                <img src={app.icon} alt={app.name} className={styles.icon} />
                <div className={styles.info}>
                  <h3 className={styles.name}>{app.name}</h3>
                  <div className={styles.meta}>
                    <span className={styles.category}>{app.category}</span>
                    <span className={styles.dot}>·</span>
                    <div className={styles.stars}>
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg key={i} viewBox="0 0 16 16" width="11" height="11" fill={i < Math.floor(app.rating) ? '#F59E0B' : '#E2E8F0'}>
                          <path d="M8 1l1.854 3.757L14 5.528l-3 2.924.708 4.13L8 10.557 4.292 12.582 5 8.452 2 5.528l4.146-.771z"/>
                        </svg>
                      ))}
                      <span className={styles.ratingText}>{app.rating}</span>
                    </div>
                    <span className={styles.dot}>·</span>
                    <span className={styles.version}>v{app.version}</span>
                  </div>
                </div>
                <Link to={`/app/${app.id}`} className={styles.getBtn}>Open</Link>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <p>No installed apps match "<strong>{search}</strong>"</p>
            <Link to="/apps" className={styles.browseLink}>Browse All Apps →</Link>
          </div>
        )}
      </div>
    </div>
  )
}
