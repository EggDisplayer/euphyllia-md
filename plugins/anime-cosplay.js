import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let hehe = `https://api.zahwazein.xyz/randomimage/cosplay?apikey=${wibu}`
	conn.sendMessage(m.chat, { image: { url: hehe }, caption: 'Cosplay Anime' }, m)
}
handler.command = /^(cosplay)$/i
handler.tags = ['anime']
handler.help = ['cosplay']
handler.premium = true
export default handler
