import styles from './styles.module.css'

import { getStreamerClips } from '../../services/apiTwitch/getStreamerClips'

import {useChannelName} from '../../services/store/channelNameStore'

import { useEffect, useState } from 'react'

function DisplayVideo () {

    const channelName = useChannelName((state) => state.channelName)

    const [clips , setClips] = useState()
    const [url , setUrl] = useState('')
    const [flag , setFlag] = useState(0)

    useEffect(() => {

        const getClips = async () => {
            const data = await getStreamerClips(channelName)
            setClips(data)
        }
        getClips()
        
    }, [channelName])

    useEffect(() => {
        if (clips !== undefined && clips !== 'error' && clips.data.length !== 0) {
            setUrl(clips.data[flag].embed_url)
        }else {
            setUrl('')
        }
    }, [clips , flag])

    function nextClip () {
        if(flag === clips.data.length - 1) {
            setFlag(0)
        } else {
            setFlag((oldFlag) => oldFlag + 1)
        }
    }

    function lastClip () {
        if(flag === 0) {
            setFlag(clips.data.length - 1)
        } else {
            setFlag((oldFlag) => oldFlag - 1)
        }
    }



    return (
        <div className={styles.dsiplayVideoContainer}>

            <div className={styles.iframeContainer}>
                {url !== '' ?
                    <iframe 
                        title='Clip from twitch' 
                        src={`${url}&parent=localhost&parent=localhost&autoplay=true`}
                        className={styles.iframe}
                    ></iframe> : <h4 
                        style={(channelName.length === 0) ? {display: 'none'} : {display: 'block'}}
                    >
                        Este Usuário não faz Live Stream!!
                    </h4> 
                }               
            </div>

            {url !== '' && 
                <div className={styles.buttonsContainer}>
                    <button onClick={lastClip}><img src={require('../../assets/img/arrow.png')} alt="White aroow" /></button>
                    <button onClick={nextClip}><img src={require('../../assets/img/arrow.png')} alt="White aroow" /></button>
                </div>
            }    
        </div>
    )
}

export default DisplayVideo