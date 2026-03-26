import { Link } from 'react-router-dom'
import hero from '../assets/hero.png'
import iconDownloads from '../assets/icon-downloads.png'
import iconRatings from '../assets/icon-ratings.png'
import iconReview from '../assets/icon-review.png'
import AppCard from '../components/AppCard'
import { apps, trendingApps } from '../data'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.page}>

      {/* ───── HERO ───── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.heroPre}>🚀 Discover Top Productivity Apps</p>
            <h1 className={styles.heroTitle}>
              We Build <br />
              <span className={styles.heroAccent}>Productive Apps</span>
            </h1>
            <p className={styles.heroDesc}>
              At AppStore, we are your comprehensive platform for discovering and downloading
              the best apps that will help you to get more done every single day.
            </p>
            <div className={styles.heroBtns}>
              <a href="#" className={styles.btnStore}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                App Store
              </a>
              <a href="#" className={styles.btnStore}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M3.18 23.76c.31.17.67.19 1.01.07l11.62-6.5-2.5-2.5-10.13 8.93zm-1.1-20.01A1.99 1.99 0 002 5v14c0 .36.09.7.26 1l10.44-10.17-10.62-6.08zm19.66 7.76l-2.61-1.48-2.82 2.75 2.82 2.75 2.64-1.49A2 2 0 0021.74 12a2 2 0 00-1-1.49zm-18.04 9.72l10.13-8.93-2.5-2.5-11.62 6.5c-.33.19-.58.49-.7.84l4.69 4.09z"/></svg>
                Google Play
              </a>
            </div>
          </div>

          <div className={styles.heroImage}>
            <img src={hero} alt="App Preview" />
          </div>
        </div>

        {/* Stats banner */}
        <div className={styles.statsBanner}>
          <div className={styles.statItem}>
            <img src={iconDownloads} alt="Downloads" className={styles.statIcon} />
            <div>
              <p className={styles.statLabel}>Total Downloads</p>
              <p className={styles.statValue}>29.6M</p>
              <p className={styles.statSub}>Happy Users</p>
            </div>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <img src={iconRatings} alt="Ratings" className={styles.statIcon} />
            <div>
              <p className={styles.statLabel}>App Ratings</p>
              <p className={styles.statValue}>906K</p>
              <p className={styles.statSub}>Total Ratings</p>
            </div>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <img src={iconReview} alt="Reviews" className={styles.statIcon} />
            <div>
              <p className={styles.statLabel}>App Reviews</p>
              <p className={styles.statValue}>132+</p>
              <p className={styles.statSub}>Total Apps</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── TRUSTED BY ───── */}
      <section className={styles.trusted}>
        <p className={styles.trustedLabel}>Trusted By Millions, Built For You</p>
      </section>

      {/* ───── TRENDING ───── */}
      <section className={styles.trending}>
        <div className={styles.sectionHead}>
          <div>
            <h2 className={styles.sectionTitle}>Trending Apps</h2>
            <p className={styles.sectionSub}>Most popular apps right now — downloaded by thousands every day</p>
          </div>
          <Link to="/apps" className={styles.viewAll}>View All →</Link>
        </div>
        <div className={styles.grid}>
          {trendingApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>

    </div>
  )
}
