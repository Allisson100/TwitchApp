import SearchAndShowStreamerInfo from '../../Components/SearchAndShowStreamerInfo'
import styles from './styles.module.css'

function Home () {
    return (
        <main className={styles.mainContainer}>
            <SearchAndShowStreamerInfo />
        </main>
    )
}

export default Home