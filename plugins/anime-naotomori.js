import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let hehe = `https://api.zahwazein.xyz/randomanime/v2/tomori?apikey=${wibu}`
	conn.sendMessage(m.chat, { image: { url: hehe }, caption: `${command} Aku ><` }, m)
}
handler.command = /^(tomori|nao|naotomori)$/i
handler.tags = ['anime']
handler.help = ['tomori']
handler.limit = true
export default handler