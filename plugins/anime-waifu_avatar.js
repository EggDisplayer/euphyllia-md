import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let hehe = `https://api.zahwazein.xyz/api/anime/sfw/waifu?apikey=${wibu}`
	conn.sendMessage(m.chat, { image: { url: hehe }, caption: 'Nih anime avatar yg kawai' }, m)
}
handler.command = /^(avatar|waifuavatar)$/i
handler.tags = ['anime']
handler.help = ['avatar']
handler.limit = true
export default handler
