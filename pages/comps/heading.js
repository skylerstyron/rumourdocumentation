import styles from '/styles/Heading.module.css'

export default function Heading(props) {
    return (
        <>
            <div className={styles.header}>
            <h1 className={styles.title}>{props.title}</h1>
          </div>
        </>
    )
}