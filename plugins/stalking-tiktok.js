import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan Username', m)
    let res = await fetch(`https://api.zahwazein.xyz/stalker/tiktok?username=${text}&apikey=${wibu}`)
    let json = await res.json()
    let thumb = await (await fetch(json.result.profile)).buffer()
    let hasil = `
• *Name*: ${json.result.name}
• *Username*: ${json.result.username}
• *Follower:* ${json.result.followers}
• *Following:* ${json.result.following}
• *Description:* ${json.result.description}
`

    conn.sendFile(m.chat, thumb, 'tiktok.jpg', hasil, m)
		}
handler.help = ['tiktokstalk']
handler.tags = ['internet']
handler.command = /^(tiktokstalk)$/i
handler.limit = true

export default handler