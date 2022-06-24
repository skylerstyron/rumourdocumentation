import Link from 'next/link'
import styles from '/styles/Nav.module.css'

export default function Nav() {
    return (
        <div>
            <Link href="/">
                <a className={styles.backtohome}><code className={styles.code}>back to home</code></a>
            </Link>
        </div>
    )
}