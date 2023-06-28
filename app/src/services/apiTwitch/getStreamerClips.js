import { getTwitchAuthorization } from './getTwitchAuthorization'
import { getStreamerInfo } from './getStreamerInfo'

export async function getStreamerClips () {

    let { access_token, token_type } = await getTwitchAuthorization()

    // Primeira letra maiúscula
    token_type = token_type[0].toUpperCase() + token_type.substring(1)

    const authorization = `${token_type} ${access_token}`

    let headers = {
        authorization,
        "Client-Id": 'ec5tshbkdsf449ra5mw24rviljcrcy',
    };

    const channel = await getStreamerInfo()
    const idChannel = channel.data[0].id

    const endpointClips = `https://api.twitch.tv/helix/clips?broadcaster_id=${idChannel}`

    const fetchClips = await fetch(endpointClips, {headers})
    const clips = await fetchClips.json()

    return await clips
}
