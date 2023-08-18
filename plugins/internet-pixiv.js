/*import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
if (!text) throw `Text nya?`
let res = await fetch(`https://api.zahwazein.xyz/searching/pixiv?query=${text}&apikey=${wibu}`)
let anu = await fetch(``)
//let pixiv = await res.json()
let pixivinfo = `
• *Title:* ${data.result.title}
• *Author:* ${data.result.author}
• *Tag*: ${data.result.tags}`
conn.sendFile(m.chat, data.result.image, 'pixiv.jpeg', pixivinfo, m)
}
handler.command = /^(pixiv|pixivsearch)$/i
handler.tags = ['anime']
handler.help = ['pixivsearch']
handler.limit = true
export default handler/*