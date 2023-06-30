import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import StreamerInfo from '../StreamerInfo'
import Error from '../Error'

import {useGetDoubleName} from '../../services/store/channelNameStore'

function StreamerCard ({ streamerInfo }) {

    const getDoubleName = useGetDoubleName((state) => state.getDoubleName)

    const [info , setInfo] = useState({})
    const [infoSize , setInfoSize] = useState(0)

    useEffect(() => {
        setInfo(streamerInfo)
    }, [streamerInfo])

    useEffect(() => {
        if(getDoubleName === 2) {
            setInfoSize(2)
        }else if(getDoubleName === 4) {
            setInfoSize(4)
        }else {
            const size = Object.keys(info).length
            setInfoSize(size)
        }
    }, [info , getDoubleName])

    return (
        <div className={styles.streamerCardContainer}>
            {infoSize === 1 && <StreamerInfo info={info}/>}
            {infoSize === 4 && <Error color={'white'}>Por favor digite um usuário na barra de pesquisa para ver seus Clips ao lado!!</Error>}
            {infoSize === 2 && <Error color={'red'}>Usuário não encontrado, digite outro nome!!</Error>}
        </div>
    )
}

export default StreamerCard

// {<Error color={'red'}>Usuário não encontrado, digite outro nome!!</Error>}