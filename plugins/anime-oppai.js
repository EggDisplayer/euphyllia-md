import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let hehe = `https://api.zahwazein.xyz/randomanime/oppai?apikey=${wibu}`
	conn.sendMessage(m.chat, { image: { url: hehe }, caption: 'Hayo Nyekeli Manok:v' }, m)
}
handler.command = /^(oppai)$/i
handler.tags = ['anime']
handler.help = ['oppai']
handler.premium = true
export default handler
