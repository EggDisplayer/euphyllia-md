import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
let anu = await fetch(`https://api.zahwazein.xyz/randomanime/hololive?apikey=${wibu}`)
let data  = await anu.json()
let cap = data.result.caption
conn.sendFile(m.chat, data.result.image, 'image.jpg', `${cap}`, m)
}	
handler.command = /^(hololive|hololiveid)$/i
handler.tags = ['anime']
handler.help = ['hololive']
handler.limit = true
export default handler