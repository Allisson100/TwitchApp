import { getTwitchAuthorization } from './getTwitchAuthorization'
import { getStreamerInfo } from './getStreamerInfo'

export async function getStreamerClips (channelName) {

    let { access_token, token_type } = await getTwitchAuthorization()

    const clipsDate = getLastDay()

    // Primeira letra maiúscula
    token_type = token_type[0].toUpperCase() + token_type.substring(1)

    const authorization = `${token_type} ${access_token}`

    let headers = {
        authorization,
        "Client-Id": 'ec5tshbkdsf449ra5mw24rviljcrcy',
    };

    const channel = await getStreamerInfo(channelName)

    if (channel.error || channel.data.length === 0) {
        return 'error'
    }

    const idChannel = channel.data[0].id

    const endpointClips = `https://api.twitch.tv/helix/clips?broadcaster_id=${idChannel}&first=20&started_at=${clipsDate}T00:00:00Z&sort=views`

    const fetchClips = await fetch(endpointClips, {headers})
    const clips = await fetchClips.json()

    clips.data.sort((a, b) => {
        return b.view_count - a.view_count
    })

    console.log(clips);

    return await clips
}

function getLastDay () {
    let date = new Date()

    let lastDay = new Date(date)
    lastDay.setDate(date.getDate() - 1)

    let day = lastDay.getDate()
    let month = (lastDay.getMonth() + 1)
    let year = lastDay.getFullYear()

    day = day < 10 && `0${day}`
    month = month < 10 && `0${month}`

    const finalDate = `${year}-${month}-${day}`

    return finalDate
}