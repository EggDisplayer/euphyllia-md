import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
let anu = `https://xzn.wtf/api/loli?apikey=${global.dims}`
//let anu = `https://api.xyroinee.xyz/api/sfw/Loli?apikey=${global.xyro}`

m.reply(wait)
//conn.sendMessage(m.chat, { image: { url: hehe }, caption: `${command} aku:v` }, m)
await conn.sendFile(m.chat, anu, '', 'Nih Kak loli nya', m)
}
handler.command = /^(loli|anakkecil)$/i
handler.tags = ['anime']
handler.help = ['loli']
handler.limit = true
export default handler