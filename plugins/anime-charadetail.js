import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukan nama Chara nya!!!`
  let res = await fetch(`https://api.zahwazein.xyz/animeweb/myanimelist/character?query=${text}&apikey=${wibu}`)
let anu = await res.json()
let charainfo = `• *Nama:* ${anu.result.name}
• *Detail:* ${anu.result.detail}
• *Status*: ${anu.result.status}
• *Image*: ${anu.result.image}`
conn.sendFile(m.chat, anu.result.image, 'anu.jpg', charainfo, m)
}
handler.help = ['charadetail']
handler.tags = ['anime']
handler.command = /^(charadetail)$/i
handler.limit = true

export default handler