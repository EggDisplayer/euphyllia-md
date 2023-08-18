import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let hehe = `https://api.zahwazein.xyz/randomanime/husbu?apikey=${wibu}`
	conn.sendMessage(m.chat, { image: { url: hehe }, caption: 'Husbu Siapa Nih??' }, m)
}
handler.command = /^(husbu)$/i
handler.tags = ['anime']
handler.help = ['husbu']
handler.limit = true
export default handler
