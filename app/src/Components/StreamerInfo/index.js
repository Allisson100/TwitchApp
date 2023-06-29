import { useEffect, useState } from 'react'
import Error from '../Error'
import styles from './styles.module.css'

function StreamerInfo ({ info }) {

    const [flag , setFlag] = useState(0)
    // const [getError , setGetError] = useState('')

    useEffect(() => {
        const size = Object.keys(info).length
        setFlag(size)

    }, [info])

    const error = info.error || ''

    return (
        
        <div className={styles.streamerInfoContainer}>
            {(flag === 1 && error !== 'Bad Request') && (
                <>
                    {info.data.length === 0 && 
                    <Error 
                        color={'red'}
                    >
                        Usuário não encontrado, digite outro nome!!
                    </Error>}
        
        
                    {info.data.length === 1 && (
                        <div className={styles.infoContainer}>
                            <h3>{info.data && info.data[0].display_name}</h3>
                            <img src={info.data &&  info.data[0].profile_image_url} alt="Streamer profile" />
                            <h4>{info.data &&  info.data[0].description}</h4>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default StreamerInfo