import { Link } from 'react-router-dom'
import appError from '../assets/App-Error.png'
import styles from './AppNotFound.module.css'

export default function AppNotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <img src={appError} alt="App Not Found" className={styles.image} />
        <h1 className={styles.title}>OPPS!! APP NOT FOUND</h1>
        <p className={styles.desc}>
          The app you are looking for is not available — please search for other apps.
        </p>
        <Link to="/apps" className={styles.btn}>Browse All Apps</Link>
      </div>
    </div>
  )
}
