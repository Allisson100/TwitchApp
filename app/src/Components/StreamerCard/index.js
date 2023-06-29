import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import StreamerInfo from '../StreamerInfo'
import Error from '../Error'

function StreamerCard ({ streamerInfo }) {

    const [info , setInfo] = useState({})
    const [infoSize , setInfoSize] = useState(0)

    useEffect(() => {
        setInfo(streamerInfo)
    }, [streamerInfo])

    useEffect(() => {
        const size = Object.keys(info).length
        setInfoSize(size)
    }, [info])

    return (
        <div className={styles.streamerCardContainer}>
            {infoSize === 1 && <StreamerInfo info={info}/>}
            {infoSize === 3 && <Error color={'white'}>Por favor digite um usuário na barra de pesquisa para ver seus Clips ao lado!!</Error>}
        </div>
    )
}

export default StreamerCard