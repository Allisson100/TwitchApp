import { useEffect, useState } from 'react'
import InputSearch from '../InputSearch'
import StreamerCard from '../StreamerCard'
import styles from './styles.module.css'

import { getStreamerInfo } from '../../services/apiTwitch/getStreamerInfo'

import { useChannelName } from '../../services/store/channelNameStore'
import { useGetDoubleName } from '../../services/store/channelNameStore'


function SearchAndShowStreamerInfo () {

    const [streamerChannelName , setStreamerChannelName] = useState('')
    const [streamerInfo , setStreamerInfo] = useState({})

    const setChannelName = useChannelName((state) => state.setChannelName)
    const setGetDoubleName = useGetDoubleName((state) => state.setGetDoubleName)

    function getFinalInputValue(inputValue) {
        setStreamerChannelName(inputValue)
    }

    useEffect(() => {
        const array = streamerChannelName.split(' ')
        
        if(array.length >= 2) {
            setGetDoubleName(2)
        } else if(streamerChannelName.length === 0) {
            setGetDoubleName(4)
        } else {
            setGetDoubleName(1)
        }

        setChannelName(streamerChannelName)
        
    }, [streamerChannelName , setChannelName , setGetDoubleName])


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