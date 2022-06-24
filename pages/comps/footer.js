import styles from '/styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                Powered by {' '}
                <code className={styles.code}>brain wrinkles</code>
            </p>
        </footer>
    )
}