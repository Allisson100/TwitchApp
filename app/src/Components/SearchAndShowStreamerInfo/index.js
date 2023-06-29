import { useEffect, useState } from 'react'
import InputSearch from '../InputSearch'
import StreamerCard from '../StreamerCard'
import styles from './styles.module.css'

import { getStreamerInfo } from '../../services/apiTwitch/getStreamerInfo'

import useChannelName from '../../services/store/channelNameStore'

function SearchAndShowStreamerInfo () {

    const [streamerChannelName , setStreamerChannelName] = useState('')
    const [streamerInfo , setStreamerInfo] = useState({})

    const setChannelName = useChannelName((state) => state.setChannelName)

    function getFinalInputValue(inputValue) {
        setStreamerChannelName(inputValue)
    }

    useEffect(() => {
        setChannelName(streamerChannelName)
    }, [streamerChannelName , setChannelName])


    useEffect(() => {
      const apiStreamerInfo = async () => {
        const apiStreamerInfo = await getStreamerInfo(streamerChannelName)
        setStreamerInfo(apiStreamerInfo)
      }
  
      apiStreamerInfo()
    }, [streamerChannelName])

    // console.log(streamerChannelName);

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