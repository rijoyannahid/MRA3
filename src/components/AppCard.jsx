import { Link } from 'react-router-dom'
import styles from './AppCard.module.css'

export default function AppCard({ app }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(app.rating))

  return (
    <Link to={`/app/${app.id}`} className={styles.card}>
      <div className={styles.iconWrap}>
        <img src={app.icon} alt={app.name} className={styles.icon} />
        {app.badge && <span className={styles.badge}>{app.badge}</span>}
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{app.name}</h3>
        <p className={styles.category}>{app.category}</p>
        <div className={styles.meta}>
          <div className={styles.stars}>
            {stars.map((filled, i) => (
              <svg key={i} viewBox="0 0 16 16" width="12" height="12" fill={filled ? '#F59E0B' : '#E2E8F0'}>
                <path d="M8 1l1.854 3.757L14 5.528l-3 2.924.708 4.13L8 10.557 4.292 12.582 5 8.452 2 5.528l4.146-.771z"/>
              </svg>
            ))}
            <span className={styles.ratingNum}>{app.rating}</span>
          </div>
          <span className={styles.downloads}>{app.downloads}</span>
        </div>
      </div>
    </Link>
  )
}
