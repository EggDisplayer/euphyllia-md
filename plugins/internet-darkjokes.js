import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let hehe = `https://api.zahwazein.xyz/randomimage/darkjoke?apikey=${wibu}`
	conn.sendMessage(m.chat, { image: { url: hehe }, caption: 'Kok Dark Ya??' }, m)
}
handler.command = /^(darkjoke|darkjokes)$/i
handler.tags = ['internet']
handler.help = ['darkjoke']
handler.limit = true
export default handler
