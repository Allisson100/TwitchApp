import { getTwitchAuthorization } from './getTwitchAuthorization'

export async function getStreamerInfo () {

    let { access_token, token_type } = await getTwitchAuthorization()

    const endpoint = `https://api.twitch.tv/helix/users?login=alanzoka`

    // Primeira letra maiúscula
    token_type = token_type[0].toUpperCase() + token_type.substring(1)

    const authorization = `${token_type} ${access_token}`

    let headers = {
        authorization,
        "Client-Id": 'ec5tshbkdsf449ra5mw24rviljcrcy',
    };

    const fetchStreams = await fetch(endpoint, {headers})
    const streams = await fetchStreams.json()
    
    return await streams
}