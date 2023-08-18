import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let hehe = `https://api.zahwazein.xyz/randomanime/mori-calliope?apikey=${wibu}`
	conn.sendMessage(m.chat, { image: { url: hehe }, caption: 'Nih Kak' }, m)
}
handler.command = /^(mori|moricalliope)$/i
handler.tags = ['anime']
handler.help = ['mori']
handler.premium = true
export default handler
