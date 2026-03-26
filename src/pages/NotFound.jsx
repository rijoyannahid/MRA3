import { Link } from 'react-router-dom'
import error404 from '../assets/error-404.png'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <img src={error404} alt="404" className={styles.image} />
        <h1 className={styles.title}>Oops, page not found!</h1>
        <p className={styles.desc}>
          The page you're looking for doesn't exist or has been moved. <br />
          Let's get you back on track.
        </p>
        <Link to="/" className={styles.btn}>Go Back Home</Link>
      </div>
    </div>
  )
}
