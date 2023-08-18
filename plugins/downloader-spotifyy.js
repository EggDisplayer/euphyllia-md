import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Example: ${usedPrefix + command} Melukis Senja`
    let res = await fetch(`https://api.alyachan.my.id/api/spotify?q=${text}`)
    let json = await res.json()
	let get_result = json.data[0]
	let ini_txt = `Found : *${text}*`
	for (var x of get_result) {
		ini_txt += `\n\n*Title : ${x.title}*\n`
		ini_txt += `Artists : ${x.artists}\n`
		ini_txt += `Duration : ${x.duration}\n`
		ini_txt += `Link : ${x.url}\n`
		ini_txt += `${x.preview ? `Preview : ${x.preview}\n` : ''}`
		ini_txt += `───────────────────`
	}
	m.reply(ini_txt)
}

handler.help = ['spotify']
handler.tags = ['downloader']
handler.command = /^spotify/i

handler.limit = true

export default handler
