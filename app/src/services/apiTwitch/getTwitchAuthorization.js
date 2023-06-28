export async function getTwitchAuthorization () {

    const url = `https://id.twitch.tv/oauth2/token?client_id=ec5tshbkdsf449ra5mw24rviljcrcy&client_secret=g2dhzsfhz2tkt0uxhqzv3136stv0mp&grant_type=client_credentials`

    const data = await fetch(url, {method: 'POST'})
    const dataJson = await data.json()

    return await dataJson
}

