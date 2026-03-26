import { useParams, Link, useNavigate } from 'react-router-dom'
import { apps } from '../data'
import AppCard from '../components/AppCard'
import styles from './AppDetail.module.css'

const RATINGS_DIST = [
  { stars: 5, pct: 72 },
  { stars: 4, pct: 18 },
  { stars: 3, pct: 6 },
  { stars: 2, pct: 2 },
  { stars: 1, pct: 2 },
]

export default function AppDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const app = apps.find(a => a.id === Number(id))

  if (!app) {
    navigate('/not-found')
    return null
  }

  const related = apps.filter(a => a.id !== app.id && a.category === app.category).slice(0, 4)
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(app.rating))

  return (
    <div className={styles.page}>
      <div className={styles.inner}>

        {/* breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/apps">Apps</Link>
          <span>/</span>
          <span className={styles.breadActive}>{app.name}</span>
        </nav>

        {/* App header card */}
        <div className={styles.appHeader}>
          <img src={app.icon} alt={app.name} className={styles.appIcon} />
          <div className={styles.appMeta}>
            <div className={styles.appTopLine}>
              {app.badge && <span className={styles.badge}>{app.badge}</span>}
              <span className={styles.categoryTag}>{app.category}</span>
            </div>
            <h1 className={styles.appName}>{app.name}</h1>
            <div className={styles.ratingRow}>
              <div className={styles.stars}>
                {stars.map((filled, i) => (
                  <svg key={i} viewBox="0 0 16 16" width="16" height="16" fill={filled ? '#F59E0B' : '#E2E8F0'}>
                    <path d="M8 1l1.854 3.757L14 5.528l-3 2.924.708 4.13L8 10.557 4.292 12.582 5 8.452 2 5.528l4.146-.771z"/>
                  </svg>
                ))}
                <span className={styles.ratingNum}>{app.rating}</span>
              </div>
              <span className={styles.reviewCount}>({app.reviews.toLocaleString()} reviews)</span>
            </div>
            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <span className={styles.statVal}>{app.downloads}</span>
                <span className={styles.statLbl}>Downloads</span>
              </div>
              <div className={styles.statDiv} />
              <div className={styles.stat}>
                <span className={styles.statVal}>{app.rating}</span>
                <span className={styles.statLbl}>Rating</span>
              </div>
              <div className={styles.statDiv} />
              <div className={styles.stat}>
                <span className={styles.statVal}>{app.reviews.toLocaleString()}</span>
                <span className={styles.statLbl}>Reviews</span>
              </div>
            </div>
            <a href="#" className={styles.installBtn}>
              Install Now — Free
            </a>
          </div>
        </div>

        <div className={styles.twoCol}>
          {/* LEFT */}
          <div className={styles.left}>

            {/* Screenshots */}
            {app.screenshots?.length > 0 && (
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Screenshots</h2>
                <div className={styles.screenshots}>
                  {app.screenshots.map((src, i) => (
                    <img key={i} src={src} alt={`Screenshot ${i + 1}`} className={styles.screenshot} />
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Description</h2>
              <div className={styles.desc}>
                {app.description.split('\n').map((para, i) =>
                  para.trim() ? <p key={i}>{para}</p> : <br key={i} />
                )}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            {/* Ratings breakdown */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Ratings</h3>
              <div className={styles.ratingBig}>
                <span className={styles.ratingBigNum}>{app.rating}</span>
                <div>
                  <div className={styles.stars}>
                    {stars.map((filled, i) => (
                      <svg key={i} viewBox="0 0 16 16" width="14" height="14" fill={filled ? '#F59E0B' : '#E2E8F0'}>
                        <path d="M8 1l1.854 3.757L14 5.528l-3 2.924.708 4.13L8 10.557 4.292 12.582 5 8.452 2 5.528l4.146-.771z"/>
                      </svg>
                    ))}
                  </div>
                  <p className={styles.ratingSmall}>{app.reviews.toLocaleString()} ratings</p>
                </div>
              </div>
              <div className={styles.bars}>
                {RATINGS_DIST.map(({ stars: s, pct }) => (
                  <div key={s} className={styles.barRow}>
                    <span className={styles.barLabel}>{s}★</span>
                    <div className={styles.barTrack}>
                      <div
                        className={styles.barFill}
                        style={{ width: `${pct}%`, background: s >= 4 ? '#F59E0B' : s === 3 ? '#FB923C' : '#EF4444' }}
                      />
                    </div>
                    <span className={styles.barPct}>{pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* App Info */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>App Info</h3>
              <div className={styles.infoList}>
                <div className={styles.infoRow}><span>Version</span><strong>{app.version}</strong></div>
                <div className={styles.infoRow}><span>Size</span><strong>{app.size}</strong></div>
                <div className={styles.infoRow}><span>Category</span><strong>{app.category}</strong></div>
                <div className={styles.infoRow}><span>Downloads</span><strong>{app.downloads}</strong></div>
              </div>
            </div>
          </div>
        </div>

        {/* Related apps */}
        {related.length > 0 && (
          <div className={styles.related}>
            <h2 className={styles.relatedTitle}>You Might Also Like</h2>
            <div className={styles.relatedGrid}>
              {related.map(a => <AppCard key={a.id} app={a} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
