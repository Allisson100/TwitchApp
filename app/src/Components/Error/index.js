import styles from './styles.module.css'

function Error ({ children , color }) {
    
    return (
        <div className={styles.errorContainer}>
            <h3 style={{color: `${color}`}} className={styles.errorText} >{children}</h3>
        </div>
        
    )
}

export default Error