import { useState } from 'react'
import AppCard from '../components/AppCard'
import { apps } from '../data'
import styles from './AllApps.module.css'

const CATEGORIES = ['All', 'Productivity', 'Education', 'Health & Fitness']

export default function AllApps() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = apps.filter(app => {
    const matchSearch = app.name.toLowerCase().includes(search.toLowerCase())
    const matchCat = category === 'All' || app.category === category
    return matchSearch && matchCat
  })

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.topBar}>
          <div>
            <h1 className={styles.title}>Our All Applications</h1>
            <p className={styles.sub}>Explore all apps on the market, handpicked to find the best ones</p>
          </div>
          <div className={styles.searchWrap}>
            <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              className={styles.search}
              type="text"
              placeholder="Search apps..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.filters}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${category === cat ? styles.active : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
          <span className={styles.count}>{filtered.length} Apps Found</span>
        </div>

        {filtered.length > 0 ? (
          <div className={styles.grid}>
            {filtered.map(app => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <p>No apps found matching "<strong>{search}</strong>"</p>
          </div>
        )}
      </div>
    </div>
  )
}
