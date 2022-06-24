import styles from '/styles/Status.module.css'

export default function Status(props) {
    return <div className={styles.status}>{props.name}</div>
}