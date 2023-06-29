import { useEffect, useState } from 'react'
import InputSearch from '../InputSearch'
import StreamerCard from '../StreamerCard'
import styles from './styles.module.css'

import { getStreamerInfo } from '../../services/apiTwitch/getStreamerInfo'

function SearchAndShowStreamerInfo () {

    const [streamerChannelName , setStreamerChannelName] = useState('')
    const [streamerInfo , setStreamerInfo] = useState({})

    function getFinalInputValue(inputValue) {
        setStreamerChannelName(inputValue)
    }

    useEffect(() => {
      const apiStreamerInfo = async () => {
        const apiStreamerInfo = await getStreamerInfo(streamerChannelName)
        setStreamerInfo(apiStreamerInfo)
      }
  
      apiStreamerInfo()
    }, [streamerChannelName])

    return (
        <section className={styles.streamerContainer}>
            <InputSearch 
                getFinalInputValue={getFinalInputValue}
            />
            <StreamerCard 
                streamerInfo={streamerInfo}
            />
        </section>
    )
}

export default SearchAndShowStreamerInfo