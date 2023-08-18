import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let hehe = `https://api.zahwazein.xyz/randomanime/marin-kitagawa?apikey=${wibu}`
	conn.sendMessage(m.chat, { image: { url: hehe }, caption: 'Hayo Nyekeli Manok:v' }, m)
}
handler.command = /^(kitagawa)$/i
handler.tags = ['anime']
handler.help = ['kitagawa']
handler.premium = true
export default handler
